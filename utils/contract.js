import "@ethersproject/shims";
import { ethers } from "ethers";
export const provider = new ethers.providers.JsonRpcProvider("https://rpc-mainnet.matic.network");
export const NFT_ABI = [
  "function requestMint(string memory _title, string memory _videoHash) public",
  "function getMetaData(uint256 _id) external view returns(string memory, string memory, address, uint256, uint256)",
  "function tokenOfOwnerByIndex(address owner, uint256 index) external view returns (uint256 tokenId)",
  "function balanceOf(address owner) external view returns (uint256 balance)",
  "function likeMedia(uint256 _id) public", 
  "function totalSupply() public view returns(uint256)"
];

export const NFT_Address = "0x0B81c569b0913021DCBd61c9dcD0F1A65B63585e";
export const NFT = new ethers.Contract(NFT_Address, NFT_ABI, provider);


export const SOCIAL_ABI = [
  "function editProfile(string memory _username, string memory _biography, string memory _media) public",
  "function follow(address _user) public",
  "function unfollow(address _user) public",
  "function viewProfile(address _user) public view returns(string memory, string memory, string memory, uint256, uint256)"
];
export const SOCIAL_ADDRESS = '0xF9760484A65F47087b2Afc41ab1af8E97773D95e';
export const SOCIAL = new ethers.Contract(SOCIAL_ADDRESS, SOCIAL_ABI, provider);




