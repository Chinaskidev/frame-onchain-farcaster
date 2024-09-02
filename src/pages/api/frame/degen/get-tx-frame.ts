import { NextApiRequest, NextApiResponse } from "next";
import { CoinbaseKit } from "../../../../../classes/CoinbaseKit";
import { getERC721PreparedEncodedData, getFarcasterAccountAddress } from "../../../../../utils/tx-frame";
import { FrameRequest } from "@coinbase/onchainkit/frame";
import { erc721ContractABI } from "../../../../../utils/erc721ContractABI";
import { erc721ContractAddress } from "../../../../../utils/constants";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const { isValid, message } = await CoinbaseKit.validateMessage(
      req.body as FrameRequest
    );

    if (!isValid || !message) {
      return res.status(400).json({ error: "Invalid Request" });
    }

    const accountAddress = await getFarcasterAccountAddress(message.interactor);
    const data = await getERC721PreparedEncodedData(accountAddress);

    return res.status(200).json({
      ChainId: "eip155:666666666",
      method: "eth_sendTransaction",
      params: {
        abi: erc721ContractABI,
        to: erc721ContractAddress,
        data: data,
        value: "0"// Asegúrate de que el valor sea correcto y esté en wei
      }
    });
  } catch (error) {
    console.error("Error handling request:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
