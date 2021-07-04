// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import '../node_modules/@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol';
import '../node_modules/@openzeppelin/contracts/token/ERC721/extensions/IERC721Metadata.sol';
import '../node_modules/@openzeppelin/contracts/token/ERC20/IERC20.sol';


/**
 * @notice - This is the NFT contract
 */
contract TwentyFourNFTBidding {
    using SafeERC20 for IERC20;
    address nftContract;
    IERC20 Matic;

    struct BidDetails {
        uint startTime;
        uint highestBid;
        uint endTime;
        uint totalBidAmount;
        uint totalBids;
        uint exists;
        mapping(address => uint) userBid;
    }
    mapping (uint => BidDetails) idToBid;

    constructor(address _matic,address _nftContract){
        Matic = IERC20(_matic);
        nftContract = _nftContract;
    }
    function startBidPeriod(uint _tokenId, uint startPrice) external onlyContract(){
        idToBid[_tokenId].startTime = block.timestamp+259200; // 3 days
        idToBid[_tokenId].highestBid = startPrice;
        idToBid[_tokenId].exists = 1;
        idToBid[_tokenId].endTime = block.timestamp+864000; // 7 + 3 days
    }

    function raiseBid(uint256 _tokenId, uint256 _bid) public bidPeriod(_tokenId) {
        require(_bid>idToBid[_tokenId].highestBid,'Please raise the bid higher than current bid');
        Matic.safeTransferFrom(msg.sender, address(this), _bid);
        idToBid[_tokenId].highestBid = _bid;
        idToBid[_tokenId].totalBidAmount += _bid;
        idToBid[_tokenId].totalBids +=1;
        idToBid[_tokenId].userBid[msg.sender] += _bid;
        idToBid[_tokenId].endTime +=86400; //24 hours
    }

    modifier onlyContract (){
        require(msg.sender == nftContract,"You don't have the permission to do that");
        _;
    }
    modifier bidPeriod (uint _tokenId) {
        require(block.timestamp>idToBid[_tokenId].startTime && idToBid[_tokenId].exists == 1,"Auction not yet started");
        require(block.timestamp<idToBid[_tokenId].endTime, "Auction has ended");
        _;
    }
}