import { PINATA_KEY, PINATA_SECRET } from "@env"

// note: api key must be changed and added to env by production
export const pinToIPFS = async (filename, fileURI, type="mp4") => {

	let hash;
	let formData = new FormData()
	if (type == "jpg") {
		formData.append(filename, {
		name: filename,
		uri: fileURI,
		type: 'image/jpg'
		})
	}
	else {
		formData.append(filename, {
		name: filename,
		uri: fileURI,
		type: 'video/mp4'
		})
	}
	const pinUrl = "http://45.63.64.72/api/pinToIPFS?filename=" + filename
	await fetch(pinUrl, {
		method: "post",
		headers: {
			'Content-Type': 'multipart/form-data',
			key: "apikey",
			},
		body: formData,
	}).then(async function(response) {
		const js = await response.json()
		hash = js
	})

	return hash;

}
