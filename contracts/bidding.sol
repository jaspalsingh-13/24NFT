// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import '../node_modules/@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol';
import '../node_modules/@openzeppelin/contracts/token/ERC721/extensions/IERC721Metadata.sol';
import '../node_modules/@openzeppelin/contracts/token/ERC20/IERC20.sol';
import '../node_modules/@openzeppelin/contracts/security/ReentrancyGuard.sol';
import '../node_modules/@openzeppelin/contracts/token/ERC721/IERC721.sol';
import '../node_modules/@openzeppelin/contracts/utils/math/SafeMath.sol';

interface Inft {
    function eraseNFT(uint _tokenId) external;
    function getArtist(uint _tokenId) external view returns (address);
    function stakingAddress() external view returns (address);
}
interface Istaking{
    function getPaymentSplitter(uint _tokenId) external view returns(address);
}

/**
 * @notice - This is the NFT contract
 */
contract TwentyFourNFTBidding is ReentrancyGuard{
    using SafeERC20 for IERC20;
    using SafeMath for uint;
    address nftContract;
    IERC20 Matic;
    address platform;
    uint Fee; // input as fee*100 ex. if fee is 1% Fee = 1*100 = 100

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

    constructor(address _matic,address _nftContract , address _multisig){
        Matic = IERC20(_matic);
        nftContract = _nftContract;
        platform = _multisig;
    }
    function startBidPeriod(uint _tokenId, uint startPrice) external onlyContract(){
        idToBid[_tokenId].startTime = block.timestamp+259200; // 3 days
        idToBid[_tokenId].highestBid = startPrice;
        idToBid[_tokenId].exists = 1;
        idToBid[_tokenId].endTime = block.timestamp+2851200; // 30 + 3 days
    }

    function raiseBid(uint256 _tokenId, uint256 _bid) public nonReentrant() bidPeriod(_tokenId) {
        require(_bid>idToBid[_tokenId].highestBid,'Please raise the bid higher than current bid');
        if(idToBid[_tokenId].totalBids==0)
        {
            idToBid[_tokenId].endTime = block.timestamp + 604800;
        }
        else{
            idToBid[_tokenId].endTime +=86400; //24 hours
        }
        Matic.safeTransferFrom(msg.sender, address(this), _bid);
        idToBid[_tokenId].highestBid = _bid;
        idToBid[_tokenId].totalBidAmount += _bid;
        idToBid[_tokenId].totalBids +=1;
        idToBid[_tokenId].userBid[msg.sender] += _bid;
    }

    function claimUnusedBack(uint256 _tokenId) public bidEnd(_tokenId) {
        require(idToBid[_tokenId].userBid[msg.sender]<idToBid[_tokenId].highestBid,'cannot claim what you dont have xD');
        uint amount = idToBid[_tokenId].userBid[msg.sender];
        idToBid[_tokenId].userBid[msg.sender] = 0;
        Matic.safeTransfer(msg.sender, amount);
    }

    function claimNft(uint _tokenId) public bidEnd(_tokenId) {
        require(idToBid[_tokenId].userBid[msg.sender]==idToBid[_tokenId].highestBid,'cannot claim what you dont have xD');
        IERC721(nftContract).safeTransferFrom(address(this), msg.sender, _tokenId);
    }

    function claimSoldPrice(uint _tokenId) public bidEnd(_tokenId){
        require(Inft(nftContract).getArtist(_tokenId) == msg.sender,'You are not NFT Artist');
        uint amount1 = idToBid[_tokenId].highestBid.mul(uint(10000).sub(Fee)).div(10000);
        uint amount2 = idToBid[_tokenId].highestBid.mul((Fee)).div(20000);
        Matic.safeTransfer(msg.sender,amount1);
        Matic.safeTransfer(platform,amount2);
    }

    function claimSoldPricePatron(uint _tokenId) external bidEnd(_tokenId) {
        address stakingAddress = Inft(nftContract).stakingAddress();
        require(msg.sender == Istaking(stakingAddress).getPaymentSplitter(_tokenId));
        uint amount = idToBid[_tokenId].highestBid.mul((Fee)).div(20000);
        Matic.safeTransfer(Istaking(stakingAddress).getPaymentSplitter(_tokenId), amount);
    }
    
    function eraseNFT(uint _tokenId) public{
        require(block.timestamp<idToBid[_tokenId].endTime,'less than 30 days');
        require(idToBid[_tokenId].totalBids==0,'Someone has Bid already');
        Inft(nftContract).eraseNFT(_tokenId);
        delete idToBid[_tokenId];
    }

    function revokeNFTBid(uint _tokenId) external onlyContract(){
        delete idToBid[_tokenId];
    }

    modifier onlyContract (){
        require(msg.sender == nftContract,"You don't have the permission to do that");
        _;
    }
    modifier bidPeriod (uint _tokenId) {
        require(block.timestamp>idToBid[_tokenId].startTime && idToBid[_tokenId].exists == 1,"Auction not yet started");
        require(block.timestamp<idToBid[_tokenId].endTime, "Auction has ended ");
        _;
    }
    modifier bidEnd (uint _tokenId) {
        require(block.timestamp>idToBid[_tokenId].endTime,'Auction still is progress');
        _;
    }
}