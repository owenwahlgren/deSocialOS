
// note: api key must be changed and added to env by production
export const pinToIPFS = async (filename, fileURI, type="mp4") => {

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
	const pinUrl = "https://api.de.social/pinToIPFS?filename=" + filename
	const response = await fetch(pinUrl, {
		method: "post",
		headers: {
			'Content-Type': 'multipart/form-data',
			key: "apikey",
			},
		body: formData,
	})

	return await response.json();

}
