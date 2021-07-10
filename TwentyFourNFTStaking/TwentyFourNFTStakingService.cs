using System;
using System.Threading.Tasks;
using System.Collections.Generic;
using System.Numerics;
using Nethereum.Hex.HexTypes;
using Nethereum.ABI.FunctionEncoding.Attributes;
using Nethereum.Web3;
using Nethereum.RPC.Eth.DTOs;
using Nethereum.Contracts.CQS;
using Nethereum.Contracts.ContractHandlers;
using Nethereum.Contracts;
using System.Threading;
using 24nft.Contracts.TwentyFourNFTStaking.ContractDefinition;

namespace 24nft.Contracts.TwentyFourNFTStaking
{
    public partial class TwentyFourNFTStakingService
    {
        public static Task<TransactionReceipt> DeployContractAndWaitForReceiptAsync(Nethereum.Web3.Web3 web3, TwentyFourNFTStakingDeployment twentyFourNFTStakingDeployment, CancellationTokenSource cancellationTokenSource = null)
        {
            return web3.Eth.GetContractDeploymentHandler<TwentyFourNFTStakingDeployment>().SendRequestAndWaitForReceiptAsync(twentyFourNFTStakingDeployment, cancellationTokenSource);
        }

        public static Task<string> DeployContractAsync(Nethereum.Web3.Web3 web3, TwentyFourNFTStakingDeployment twentyFourNFTStakingDeployment)
        {
            return web3.Eth.GetContractDeploymentHandler<TwentyFourNFTStakingDeployment>().SendRequestAsync(twentyFourNFTStakingDeployment);
        }

        public static async Task<TwentyFourNFTStakingService> DeployContractAndGetServiceAsync(Nethereum.Web3.Web3 web3, TwentyFourNFTStakingDeployment twentyFourNFTStakingDeployment, CancellationTokenSource cancellationTokenSource = null)
        {
            var receipt = await DeployContractAndWaitForReceiptAsync(web3, twentyFourNFTStakingDeployment, cancellationTokenSource);
            return new TwentyFourNFTStakingService(web3, receipt.ContractAddress);
        }

        protected Nethereum.Web3.Web3 Web3{ get; }

        public ContractHandler ContractHandler { get; }

        public TwentyFourNFTStakingService(Nethereum.Web3.Web3 web3, string contractAddress)
        {
            Web3 = web3;
            ContractHandler = web3.Eth.GetContractHandler(contractAddress);
        }

        public Task<GetStakeDetailsOutputDTO> GetStakeDetailsQueryAsync(GetStakeDetailsFunction getStakeDetailsFunction, BlockParameter blockParameter = null)
        {
            return ContractHandler.QueryDeserializingToObjectAsync<GetStakeDetailsFunction, GetStakeDetailsOutputDTO>(getStakeDetailsFunction, blockParameter);
        }

        public Task<GetStakeDetailsOutputDTO> GetStakeDetailsQueryAsync(BigInteger tokenId, BlockParameter blockParameter = null)
        {
            var getStakeDetailsFunction = new GetStakeDetailsFunction();
                getStakeDetailsFunction.TokenId = tokenId;
            
            return ContractHandler.QueryDeserializingToObjectAsync<GetStakeDetailsFunction, GetStakeDetailsOutputDTO>(getStakeDetailsFunction, blockParameter);
        }

        public Task<string> RevokeNFTstakeRequestAsync(RevokeNFTstakeFunction revokeNFTstakeFunction)
        {
             return ContractHandler.SendRequestAsync(revokeNFTstakeFunction);
        }

        public Task<TransactionReceipt> RevokeNFTstakeRequestAndWaitForReceiptAsync(RevokeNFTstakeFunction revokeNFTstakeFunction, CancellationTokenSource cancellationToken = null)
        {
             return ContractHandler.SendRequestAndWaitForReceiptAsync(revokeNFTstakeFunction, cancellationToken);
        }

        public Task<string> RevokeNFTstakeRequestAsync(BigInteger tokenId)
        {
            var revokeNFTstakeFunction = new RevokeNFTstakeFunction();
                revokeNFTstakeFunction.TokenId = tokenId;
            
             return ContractHandler.SendRequestAsync(revokeNFTstakeFunction);
        }

        public Task<TransactionReceipt> RevokeNFTstakeRequestAndWaitForReceiptAsync(BigInteger tokenId, CancellationTokenSource cancellationToken = null)
        {
            var revokeNFTstakeFunction = new RevokeNFTstakeFunction();
                revokeNFTstakeFunction.TokenId = tokenId;
            
             return ContractHandler.SendRequestAndWaitForReceiptAsync(revokeNFTstakeFunction, cancellationToken);
        }

        public Task<string> StakeRequestAsync(StakeFunction stakeFunction)
        {
             return ContractHandler.SendRequestAsync(stakeFunction);
        }

        public Task<TransactionReceipt> StakeRequestAndWaitForReceiptAsync(StakeFunction stakeFunction, CancellationTokenSource cancellationToken = null)
        {
             return ContractHandler.SendRequestAndWaitForReceiptAsync(stakeFunction, cancellationToken);
        }

        public Task<string> StakeRequestAsync(BigInteger tokenId, BigInteger amount, bool deFi)
        {
            var stakeFunction = new StakeFunction();
                stakeFunction.TokenId = tokenId;
                stakeFunction.Amount = amount;
                stakeFunction.DeFi = deFi;
            
             return ContractHandler.SendRequestAsync(stakeFunction);
        }

        public Task<TransactionReceipt> StakeRequestAndWaitForReceiptAsync(BigInteger tokenId, BigInteger amount, bool deFi, CancellationTokenSource cancellationToken = null)
        {
            var stakeFunction = new StakeFunction();
                stakeFunction.TokenId = tokenId;
                stakeFunction.Amount = amount;
                stakeFunction.DeFi = deFi;
            
             return ContractHandler.SendRequestAndWaitForReceiptAsync(stakeFunction, cancellationToken);
        }

        public Task<string> StartStakePeriodRequestAsync(StartStakePeriodFunction startStakePeriodFunction)
        {
             return ContractHandler.SendRequestAsync(startStakePeriodFunction);
        }

        public Task<TransactionReceipt> StartStakePeriodRequestAndWaitForReceiptAsync(StartStakePeriodFunction startStakePeriodFunction, CancellationTokenSource cancellationToken = null)
        {
             return ContractHandler.SendRequestAndWaitForReceiptAsync(startStakePeriodFunction, cancellationToken);
        }

        public Task<string> StartStakePeriodRequestAsync(BigInteger tokenId)
        {
            var startStakePeriodFunction = new StartStakePeriodFunction();
                startStakePeriodFunction.TokenId = tokenId;
            
             return ContractHandler.SendRequestAsync(startStakePeriodFunction);
        }

        public Task<TransactionReceipt> StartStakePeriodRequestAndWaitForReceiptAsync(BigInteger tokenId, CancellationTokenSource cancellationToken = null)
        {
            var startStakePeriodFunction = new StartStakePeriodFunction();
                startStakePeriodFunction.TokenId = tokenId;
            
             return ContractHandler.SendRequestAndWaitForReceiptAsync(startStakePeriodFunction, cancellationToken);
        }

        public Task<string> UnstakeRequestAsync(UnstakeFunction unstakeFunction)
        {
             return ContractHandler.SendRequestAsync(unstakeFunction);
        }

        public Task<TransactionReceipt> UnstakeRequestAndWaitForReceiptAsync(UnstakeFunction unstakeFunction, CancellationTokenSource cancellationToken = null)
        {
             return ContractHandler.SendRequestAndWaitForReceiptAsync(unstakeFunction, cancellationToken);
        }

        public Task<string> UnstakeRequestAsync(BigInteger tokenId, BigInteger amount)
        {
            var unstakeFunction = new UnstakeFunction();
                unstakeFunction.TokenId = tokenId;
                unstakeFunction.Amount = amount;
            
             return ContractHandler.SendRequestAsync(unstakeFunction);
        }

        public Task<TransactionReceipt> UnstakeRequestAndWaitForReceiptAsync(BigInteger tokenId, BigInteger amount, CancellationTokenSource cancellationToken = null)
        {
            var unstakeFunction = new UnstakeFunction();
                unstakeFunction.TokenId = tokenId;
                unstakeFunction.Amount = amount;
            
             return ContractHandler.SendRequestAndWaitForReceiptAsync(unstakeFunction, cancellationToken);
        }
    }
}
