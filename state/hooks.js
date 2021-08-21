import { useSelector, useDispatch } from 'react-redux'
import { fetchFeedDataAsync, loadWalletAsync, saveWallet } from './actions'
import { createWalletFromKey } from '../utils/wallet'
import { useEffect } from 'react'

//FEED

//fetch feed and set to state
export const fetchFeed = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(fetchFeedDataAsync())
	}, [dispatch])
}

//return feed data from state
export const useFeedData = () => {
	const feed = useSelector((state => state.feed.feed_data))
	return feed
}


//WALLET

//loads wallet into state from persisted storage
export const loadWallet = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(loadWalletAsync())
	}, [dispatch])
}

//sets given wallet to state and persisted storage
export const setWallet = (wallet) => {
	const dispatch = useDispatch()
	dispatch(saveWallet(wallet))
}

//uses wallet from state
export const useWallet = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(loadWalletAsync())
	}, [dispatch])
	const key = useSelector((state) => state.wallet.private_key)
	if (key != null) {
		return createWalletFromKey(key)
	} else {
		return null
	}
}


//ACCOUNT

export const useAccountData = () => {
	const account = useSelector((state) => state.feed.account_data)
	return account
}




