import "@ethersproject/shims";
import { ethers } from "ethers";
import * as SecureStore from 'expo-secure-store';

export const createNewWallet = () => {
	try {
		return new ethers.Wallet.createRandom()
	}
	catch (error) {
		console.log(error)
	}
	
}

export const createWalletFromKey = (key) => {
	try {
		return new ethers.Wallet(key)
	}
	catch (error) {
		console.log(error)
	}
}

export const createWalletFromMnnomic = (mnemonic) => {
	try {
		return new ethers.Wallet.fromMnemonic(mnemonic)
	}
	catch (error) {
		console.log(error)
	}
}

export const storeWallet = async (wallet) => {
	try {
		await SecureStore.setItemAsync("privatekey", wallet)
		console.log('wallet saved to device')
	}
	catch(error) {
		console.log(error)
	}
}

export const fetchWallet = async () => {
	try {
		const key = await SecureStore.getItemAsync("privatekey")
		return new ethers.Wallet(key)
		
	}
	catch(error) {
		console.log(error)
	}
}

