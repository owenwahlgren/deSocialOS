import { createSlice } from "@reduxjs/toolkit"

const initialState = {feed_data: {}, 
					account_created: [{}], 
					account_collection: [{}], 
					account_data: {},
					private_key: null,
					wallet_exists: false,
					}


export const feedData = createSlice({
	name: 'feed',
	initialState,
	reducers: {
		setFeedData: (state, action) => {
			state.feed_data = action.payload
		},
		setAccountCreated: (state, action) => {
			state.account_created = action.payload
		},
		setAccountCollection: (state, action) => {
			state.account_collection = action.payload
		},
		setAccountData: (state, action) => {
			state.account_data = action.payload
		}
	}

})
export const { setFeedData, setAccountCreated, setAccountCollection, setAccountData } = feedData.actions

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