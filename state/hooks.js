import { useSelector, useDispatch } from 'react-redux'
import { fetchFeedDataAsync, loadWalletAsync, saveWallet } from './actions'
import { createWalletFromKey } from '../utils/wallet'

//refresh/load
export const fetchFeed = () => {
	const dispatch = useDispatch()
	dispatch(fetchFeedDataAsync())
}

export const loadWallet = () => {
	const dispatch = useDispatch()
	dispatch(loadWalletAsync())
}


//set state
export const setWallet = (wallet) => {
	const dispatch = useDispatch()
	dispatch(saveWallet(wallet))
}

//fetch state
export const useFeedData = () => {
	const feed = useSelector((state => state.feed.feed_data))
	return feed
}

export const useAccountData = () => {
	const account = useSelector((state) => state.feed.account_data)
	return account
}

export const useWallet = () => {
	const key = useSelector((state) => state.wallet.private_key)
	return createWalletFromKey(key)
}

