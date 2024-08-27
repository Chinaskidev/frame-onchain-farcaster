import { createThirdwebClient, defineChain } from 'thirdweb'; 
import { degen } from 'thirdweb/chains';

export const CLIENT= createThirdwebClient({
    secretKey: process.env.TW_SECRET_KEY as string,
}); 

export const CHAIN = defineChain(degen);

export const erc721ContractAddress= process.env.CONTRACT_ADDRESS as string;

