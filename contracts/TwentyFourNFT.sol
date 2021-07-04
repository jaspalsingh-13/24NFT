// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import '../node_modules/@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol';
import '../node_modules/@openzeppelin/contracts/utils/Counters.sol';

interface Istaking{
    function startStakePeriod(uint _tokenId) external;
    function getStakeDetails(uint _tokenId) external returns (uint,uint);
    function revokeNFTstake(uint _tokenId) external;
}
interface IAuction{
    function startBidPeriod(uint _tokenId, uint startPrice) external;
}

/**
 * @notice - This is the NFT contract
 */
contract TwentyFourNFT is ERC721URIStorage {
    using Counters for Counters.Counter;
    address dev;
    address stakingAddress;
    address auctionAddress;

     Counters.Counter private _counter;
    
    constructor (
        address _dev   //dev address
    ) 
        ERC721('24nft.store', '24NFT') 
    {
        dev = _dev;

    }

    function setStakingAddress(address _staking) public onlyDev(){
        stakingAddress = _staking;
    }
    function setAuctionAddress(address _auction) public onlyDev(){
        auctionAddress = _auction;
    }

    /** 
     * @dev mint a NFT
     * @dev tokenURI - URL include ipfs hash
     */
    function mint(address to, string memory tokenURI, uint startPrice) public returns (bool) {
        /// Mint a new NFT
        _counter.increment();
        uint256 _id = _counter.current();
        
        _mint(to, _id);
        _setTokenURI(_id, tokenURI);
        Istaking(stakingAddress).startStakePeriod(_id);
        IAuction(auctionAddress).startBidPeriod(_id, startPrice);
        return true;
    }
    function revokeNFT(uint _tokenId) public{
        uint totalStakes;
        (totalStakes,) = Istaking(stakingAddress).getStakeDetails(_tokenId);
        require(totalStakes>0,'Cannot revoke after someone has staked');
        _burn(_tokenId);
        Istaking(stakingAddress).revokeNFTstake(_tokenId);
    }

    modifier onlyDev (){
        require(msg.sender == dev,"You don't have the permission to do that");
        _;
    }
}