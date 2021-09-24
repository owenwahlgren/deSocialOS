import { POLYGONSCAN } from "@env"
export const fetchWalletActivity = async (address) => {
    try {
        const url = `https://api.polygonscan.com/api?module=account&action=tokentx&address=${address}&startblock=0&endblock=19999999&sort=asc&apikey=${POLYGONSCAN}`
        const reponse = await fetch(url, {method: "GET"})
        const data = await reponse.json()
        return data.result
    }
    catch (error)
    {
        console.log("error fetching wallet activity")
        return {}
    }
}