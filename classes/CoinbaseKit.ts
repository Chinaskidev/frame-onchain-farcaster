 import  { FrameRequest, getFrameMessage } from "@coinbase/onchainkit/frame";

export class CoinbaseKit{
    public static validateMessage = async (body: FrameRequest) =>{
        const { isValid, message } = await getFrameMessage(
            body,
            {
                neynarApiKey: process.env.NEYNAR_API_KEY,
                
            }


      );
        return { isValid, message};
    }
}