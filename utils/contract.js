import "@ethersproject/shims";
import { ethers } from "ethers";
export const provider = new ethers.providers.JsonRpcProvider("https://rpc-mainnet.matic.quiknode.pro");
export const NFT_ABI = [
  "function requestMint(string memory _title, string memory _ipfs) public",
  "function getMetaData(uint256 _id) public view returns(string memory, string memory, address, uint256, uint256, uint256)",
  "function tokenOfOwnerByIndex(address owner, uint256 index) external view returns (uint256 tokenId)",
  "function balanceOf(address owner) external view returns (uint256 balance)",
  "function like(uint256 _id) public", 
  "function totalSupply() public view returns(uint256)",
  "function userLiked(uint256 _id, address _user) public view returns (bool)",
  "function readComment(uint256 _id, uint256 _commentIndex) public view returns (address, string memory)",
  "function comment(uint256 _id, string memory _message) public"

];

export const NFT_Address = "0x8E3FB61AF20BE85bbB41c71Bce620A4c11F42bC7";
export const NFT = new ethers.Contract(NFT_Address, NFT_ABI, provider);


export const SOCIAL_ABI = [
  "function editProfile(string memory _username, string memory _biography, string memory _media) public",
  "function follow(address _user) public",
  "function unfollow(address _user) public",
  "function viewProfile(address _user) public view returns(string memory, string memory, string memory, uint256, uint256)"
];
export const SOCIAL_ADDRESS = '0x65B9fc3Ba215AFf29FBDc24E6668D6919cC1C72d';
export const SOCIAL = new ethers.Contract(SOCIAL_ADDRESS, SOCIAL_ABI, provider);




