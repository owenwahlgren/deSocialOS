import "@ethersproject/shims";
import { ethers } from "ethers";
export const provider = new ethers.providers.JsonRpcProvider("https://rpc-mainnet.matic.quiknode.pro");
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

