import { useSelector, useDispatch } from 'react-redux'
import { fetchFeedDataAsync, loadWalletAsync, saveWallet, fetchCollected, fetchCreated, fetchAccountData} from './actions'
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
	useEffect(() => {
		dispatch(saveWallet(wallet))
	}, [dispatch])
}

//uses wallet from state
export const useWallet = () => {
	
	const key = useSelector((state) => state.wallet.private_key)
	if (key != null) {
		return createWalletFromKey(key)
	} else {
		return null
	}
}


//ACCOUNT

export const fetchAccountCollection = (account) => {

	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(fetchCollected(account))
	})
}

export const fetchAccountCreated = (account) => {

	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(fetchCreated(account))
	})
}

export const useAccountCollection = () => {
	const collection = useSelector((state) => state.feed.account_collection)
	return collection
}

export const useAccountCreated = () => {
	const created = useSelector((state) => state.feed.account_created)
	return created
}

export const fetchAccountInfo = (account) => {
	const dispatch = useDispatch()
	useEffect( () => {
		dispatch(fetchAccountData(account))
	})
}

export const useAccountInfo = () => {
	const data = useSelector((state) => state.feed.account_data)
	return data
}
