import { PINATA_KEY, PINATA_SECRET } from "@env"

const pinUrl = "https://api.pinata.cloud/pinning/pinFileToIPFS";

export const pinToIPFS = async (filename, fileURI) => {

	let hash;
	let formData = new FormData();
	formData.append("file", {
		name: filename + '.mp4',
		uri: fileURI,
		type: 'video/mp4'
	})

	await fetch(pinUrl, {
		method: "post",
		headers: {
			'Content-Type': 'multipart/form-data',
			pinata_api_key: PINATA_KEY,
			pinata_secret_api_key: PINATA_SECRET,
			},
		body: formData,
	}).then(async function(response) {
		console.log(response)
		const js = await response.json()
		hash = js.IpfsHash
	})

	return hash;

	


}
