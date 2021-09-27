// var contractList = {}
// export const getPrice = (contractAddress) => {
//     const url = `https://api.coingecko.com/api/v3/simple/token_price/polygon-pos?contract_addresses=${contractAddress}&vs_currencies=usd`
//     if (contractAddress in contractList) {
//         return contractList[contractAddress]
//     }
//     else
//     {
//         try {
//             fetch(url, {method: "GET"})
//             .then(response => response.json())
//             .then(data =>  {
//                 const price = Object.values(data)[0].usd
//                 console.log(price)
//                 contractList[contractAddress] = price
//                 return price
//             })
//         } catch(error) {
//             return 0
//         }

//     }
// }

export const getPrice = async (tokenSymbol, sellAmount) => {
    let buyToken;
    tokenSymbol == "USDC" ? buyToken = "DAI" : buyToken = "USDC"
    const url = `https://polygon.api.0x.org/swap/v1/price?sellToken=${tokenSymbol}&buyToken=${buyToken}&sellAmount=${sellAmount}`
    try
    {
        const reponse = await fetch(url, {method: "GET"})
        const data = await reponse.json()
        return data.price
    } 
    catch (error) 
    {
        return 0
    }
    
}