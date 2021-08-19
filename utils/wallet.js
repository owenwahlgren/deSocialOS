import "@ethersproject/shims";
import { ethers } from "ethers";

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


