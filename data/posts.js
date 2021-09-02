import { NFT, SOCIAL } from '../utils/contract.js'

async function fetchFeedData() {

  var feedData = [];
  let supply = JSON.parse(await NFT.totalSupply())
    while (supply > 0) { 
      const result = await NFT.getMetaData(supply)
      const title = result[0];
      const ipfsHash = result[1];
      const creator = result[2];
      const timestamp = JSON.parse(result[3]);
      const likes = JSON.parse(result[4]);
      const amountComments = JSON.parse(result[5])

      const userInfo = await SOCIAL.viewProfile(creator)

      const data = {
        id: supply,
        videoUri:
          'http://45.63.64.72:8080/ipfs/' + ipfsHash,
        user: {
          id: creator,
          username: userInfo[0] || creator.substring(0,9),
          imageUri: "http://45.63.64.72:8080/ipfs/" + userInfo[2]
        },
        title: title,
        likes: likes,
        comments: amountComments,
        shares: 100,
      };

      feedData.push(data)
      supply -= 1;
  }
  return feedData;

}

async function fetchAccountCollected(address) {
  var feedData = [];
  try {

    let supply = JSON.parse(await NFT.balanceOf(address))
    while (supply > 0) {
      const token = JSON.parse(await NFT.tokenOfOwnerByIndex(supply))
      const result = await NFT.getMetaData(token)

      const creator = result[2];
      const title = result[0];
      const ipfsHash = result[1];
      const timestamp = JSON.parse(result[3]);
      const likes = JSON.parse(result[4]);
      const amountComments = JSON.parse(result[5])
      const userInfo = await SOCIAL.viewProfile(creator)

      const data = {
        id: supply,
        videoUri:
          'http://45.63.64.72:8080/ips/' + ipfsHash,
        user: {
          id: creator,
          username: userInfo[0] || creator.substring(0,9),
          imageUri: "http://45.63.64.72:8080/ipfs/" + userInfo[2]
        },
        title: title,
        likes: likes,
        comments: amountComments,
        shares: 100,
      };

      feedData.push(data)
      supply -= 1;
    }
  }
  catch {

  }
  return feedData;
}


async function fetchAccountCreated(address) {

  var feedData = [];
  try {


    let supply = JSON.parse(await NFT.totalSupply())
    while (supply > 0) {
      const result = await NFT.getMetaData(supply)

      const creator = result[2];

      if (creator == address) {

        const title = result[0];
        const ipfsHash = result[1];
        const timestamp = JSON.parse(result[3]);
        const likes = JSON.parse(result[4]);
        const amountComments = JSON.parse(result[5])
        const userInfo = await SOCIAL.viewProfile(creator)
        
        const data = {
          id: supply,
          videoUri:
            'http://45.63.64.72:8080/ipfs/' + ipfsHash,
          user: {
            id: creator,
            username: userInfo[0] || creator.substring(0,9),
            imageUri: "http://45.63.64.72:8080/ipfs/" + userInfo[2]
          },
          title: title,
          likes: likes,
          comments: amountComments,
          shares: 100,
        };

        feedData.push(data)
      }
    supply -= 1;
  }
  }
  catch(error) {
    
  }
  return feedData;

}


module.exports = {fetchFeedData, fetchAccountCreated, fetchAccountCollected};

