import { configureStore } from "@reduxjs/toolkit"
import { feedData, walletSlice } from './reducer'

export default configureStore({
	reducer: {
		feed: feedData.reducer,
		wallet: walletSlice.reducer
	}
})