// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import '../node_modules/@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol';
import '../node_modules/@openzeppelin/contracts/token/ERC721/extensions/IERC721Metadata.sol';
import '../node_modules/@openzeppelin/contracts/token/ERC20/IERC20.sol';


/**
 * @notice - This is the NFT contract
 */
contract TwentyFourNFTStaking {
    using SafeERC20 for IERC20;
    IERC20 usdc;
    address nftContract;

    struct stakeDetails {
        uint endTime; //start+259200(3 days)
        mapping(address => uint256) stakedAmount;
        uint totalStakes;
        uint exists;
    }
    mapping (uint=>stakeDetails) idToStake;
    

    constructor(address _usdc, address _nftContract){
        usdc = IERC20(_usdc);
        nftContract = _nftContract;
    }
    function stake(uint _tokenId,uint amount) public{
        require(idToStake[_tokenId].exists == 1,'NFT doesnt exists');
        require(idToStake[_tokenId].endTime>block.timestamp,'You cant unstake in Bidding period has started');
        require(amount>0,'Please enter valid amount');
        usdc.safeTransferFrom(msg.sender,address(this),amount);
        idToStake[_tokenId].stakedAmount[msg.sender] +=amount;
        idToStake[_tokenId].totalStakes+=1;
    }
    function unstake(uint _tokenId, uint amount) public {
        require(idToStake[_tokenId].endTime<block.timestamp,'You cant unstake in Bidding period has started');
        require(idToStake[_tokenId].stakedAmount[msg.sender]>= amount,'Please enter valid amount');
        usdc.safeTransfer(msg.sender,amount);
        idToStake[_tokenId].stakedAmount[msg.sender] -=amount;
    }
    function startStakePeriod(uint _tokenId) external onlyContract(){
        idToStake[_tokenId].endTime = block.timestamp+259200;
        idToStake[_tokenId].exists = 1;
    }
    function revokeNFTstake(uint _tokenId) external onlyContract(){
        idToStake[_tokenId].exists = 0;
    }

    function getStakeDetails(uint _tokenId) external view returns (uint,uint){
        require(idToStake[_tokenId].exists == 1,'NFT doesnt exists');
        return (
            idToStake[_tokenId].totalStakes,
            idToStake[_tokenId].endTime
        );
    }

    modifier onlyContract (){
        require(msg.sender == nftContract,"You don't have the permission to do that");
        _;
    }
}