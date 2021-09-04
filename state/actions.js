import { setFeedData, setAccountCreated, setAccountCollection, setPrivateKey, setAccountData } from './reducer'
import { fetchFeedData, fetchAccountCreated, fetchAccountCollected } from '../data/posts'
import { SOCIAL } from '../utils/contract'
import * as SecureStore from 'expo-secure-store';
import { useEffect } from 'react'
 
//fetch data from feed util
export const fetchFeedDataAsync = () => async (dispatch) => {
	const feed = await fetchFeedData()
	console.log("feed loaded to state!")
	return dispatch(setFeedData(feed))
}

//load wallet data from storage into state
export const loadWalletAsync = () => async (dispatch) => {
	let key
	try {
		key = await SecureStore.getItemAsync("key")
	}
	catch (e) {
		console.log(e)
	}
	console.log("wallet loaded to state!")
	return dispatch(setPrivateKey(key))
}

//save wallet to storage & set to state
export const saveWallet = (wallet) => async (dispatch) => {
	console.log("saving wallet")
	const key = wallet.privateKey.toString()
	await SecureStore.setItemAsync("key", key)
	return dispatch(setPrivateKey(key))
}

export const fetchCollected = (address) => async (dispatch) => {
	const collected = await fetchAccountCollected(address)
	dispatch(setAccountCollection(collected))
}
export const fetchCreated = (address) => async (dispatch) => {
	const created = await fetchAccountCreated(address)
	dispatch(setAccountCreated(created))
}

export const fetchAccountData = (address) => async (dispatch) => {
	const data = await SOCIAL.viewProfile(address)
	dispatch(setAccountData([data[0], data[1], data[2], JSON.parse(data[3]), JSON.parse(data[4])]))
}