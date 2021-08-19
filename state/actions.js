import { setFeedData, setAccountData, setWallet } from './reducer'
import { fetchFeedData } from '../data/posts'
import { fetchWallet, storeWallet } from '../utils/wallet'

export const fetchFeedDataAsync = () => async (dispatch) => {
	const feed = await fetchFeedData()
	dispatch(setFeedData(feed))
}

export const loadWalletAsync = () => async (dispatch) => {
	const wallet = await fetchWallet()
	dispatch(setWallet(wallet.privateKey))
}

export const saveWallet = (wallet) => async (dispatch) => {
	await storeWallet(wallet)
	dispatch(setWallet(wallet))
}