// import "@ethersproject/shims";
// import { ethers } from "ethers";
// const provider = new ethers.providers.JsonRpcProvider("https://rpc-mainnet.matic.quiknode.pro");
// const quickswap_address = '0x5757371414417b8C6CAad45bAeF941aBc7d3Ab32'
// const ABI = ['function getPair(address tokenA, address tokenB) external view returns (address pair)', 
//             'function getReserves() external view returns (uint112 reserve0, uint112 reserve1, uint32 blockTimestampLast)']
// const QUICKSWAP = new ethers.Contract(quickswap_address, ABI, provider)
// const USDC = '0x2791bca1f2de4661ed88a30c99a7a9449aa84174'

// var tokens = {}
// export const getPrice = (contractAddress, tokenAmount) => {
//     if (contractAddress === USDC) return 1
//     if (contractAddress === '0x0000000000000000000000000000000000000000') return 0
//     if (contractAddress in tokens) return tokens[contractAddress]
//     try 
//     {
//         QUICKSWAP.getPair(contractAddress, USDC)
//         .then(pair => new ethers.Contract(pair, ABI, provider))
//         .then(token => token.getReserves())
//         .then((reserves) => {
//             const reserve1 = parseInt(JSON.parse(reserves[0]))
//             const reserve2 = parseInt(JSON.parse(reserves[1]))
//             let price = reserve1 * tokenAmount / (reserve2 + tokenAmount)
//             price = price / 10
//             tokens[contractAddress] = price

//             if (price === undefined) return 0
//             return price
//         })
//     }
//     catch (error) 
//     {
//         // console.log(error)
//         return 0
//     }
// }
var contractList = {}
export const getPrice = (contractAddress) => {
    const url = `https://api.coingecko.com/api/v3/simple/token_price/polygon-pos?contract_addresses=${contractAddress}&vs_currencies=usd`
    if (contractAddress in contractList) {
        return contractList[contractAddress]
    }
    else
    {
        try {
            fetch(url, {method: "GET"})
            .then(response => response.json())
            .then(data =>  {
                const price = Object.values(data)[0].usd
                console.log(price)
                contractList[contractAddress] = price
                return price
            })
        } catch(error) {
            return 0
        }

    }
}