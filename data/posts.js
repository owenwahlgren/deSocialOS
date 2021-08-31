import { NFT } from '../utils/contract.js'

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

      const data = {
        id: supply,
        videoUri:
          'https://ipfs.io/ipfs/' + ipfsHash,
        user: {
          id: creator,
          username: creator.substring(0,9),
          imageUri: null
        },
        title: title,
        likes: likes,
        comments: 0,
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

      const data = {
        id: supply,
        videoUri:
          'https://ipfs.io/ipfs/' + ipfsHash,
        user: {
          id: creator,
          username: creator.substring(0,9),
          imageUri: null
        },
        title: title,
        likes: likes,
        comments: 0,
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

        const data = {
          id: supply,
          videoUri:
            'https://ipfs.io/ipfs/' + ipfsHash,
          user: {
            id: creator,
            username: creator.substring(0,9),
            imageUri: null
          },
          title: title,
          likes: likes,
          comments: 0,
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

