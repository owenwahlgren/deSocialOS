import { createSlice } from "@reduxjs/toolkit"

const initialState = {feed_data: {}, account_data: {}, private_key: null}
export const feedData = createSlice({
	name: 'feed',
	initialState,
	reducers: {
		setFeedData: (state, action) => {
			state.feed_data = action.payload
		},
		setAccountData: (state, action) => {
			state.account_data = action.payload
		}
	}

})
export const { setFeedData, setAccountData } = feedData.actions

export const walletSlice = createSlice({
	name: 'wallet',
	initialState,
	reducers: {
		setPrivateKey: (state, action) => {
			state.private_key = action.payload
		}
	}
})

export const { setPrivateKey } = walletSlice.actions