import v3PoolABI from './univ3Pool.json'
import v3PositionsABI from './univ3Positions.json'
import v3StakerABI from './univ3Staker.json'
import batcherABI from './nftBatcher.json'
import erc20ABI from './erc20.json'

// replaced all Ethereum addreses with Mumbai versions 

// new version on polgyon mumbai 
// NOTE - ABI is correct 

export const v3Staker = {
  abi: v3StakerABI,
  address: '0xe34139463bA50bD61336E0c446Bd8C0867c6fE65'
}

// mumbai version 
// NOTE - ABI is correct 
export const v3Positions = {
  abi: v3PositionsABI,
  address: '0xc36442b4a4522e871399cd717abdd847ab11fe88'
}
export const v3Pool = { abi: v3PoolABI }

// mumbai version 
// NOTE - ABI is correct 

// address -   polygon mainnet 
// export const ETH_MATIC = {
//   abi: v3PoolABI,
//   address: '0x41C528Df7E9b0Ee1938dA63eDAB1c3E21dFEcaA0'
// }

// mainnet 
export const ETH_MATIC = {
  abi: v3PoolABI,
  address: '0xc1FF5D622aEBABd51409e01dF4461936b0Eb4E43'
}

// mumbai version
export const BATCHER = {
  abi: batcherABI,
  address: '0xCB933E4d6C91F5550A7785C0e1561e7De4EfCb5D'
}

export const ERC20 = {
  abi: erc20ABI
}
