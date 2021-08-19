import { setFeedData, setAccountData, setPrivateKey } from './reducer'
import { fetchFeedData } from '../data/posts'
import * as SecureStore from 'expo-secure-store';

//fetch data from feed util
export const fetchFeedDataAsync = () => async (dispatch) => {
	const feed = await fetchFeedData()
	dispatch(setFeedData(feed))
}

//load wallet data from storage into state
export const loadWalletAsync = () => async (dispatch) => {
	const key = await SecureStore.getItemAsync("key")
	dispatch(setPrivateKey(key))
}

//save wallet to storage & set to state
export const saveWallet = (wallet) => async (dispatch) => {
	console.log("saving wallet")
	const key = wallet.privateKey.toString()
	await SecureStore.setItemAsync("key", key)
	dispatch(setPrivateKey(key))
}