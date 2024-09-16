import Head from 'next/head';

const HOST_URL = process.env.NEXT_PUBLIC_HOST_URL;

const title = "Sivar Volcano";
const secondFrameImgUrl =`${HOST_URL}sivavolcano.png`;

export default function SecondFrame() {
  return (
    <>
      <Head>
        <meta name="og:title" content={title} />
        <meta name="fc:frame" content="vNext" />
        <meta name="fc:frame:image" content={secondFrameImgUrl} />
        <meta name="fc:frame:image:aspect_ratio" content="1:1" />

        {/* Botón para mintear */}
        <meta property="fc:frame:button:1" content="Mint" />
        <meta property="fc:frame:button:1:action" content="tx" />
        <meta property="fc:frame:button:1:target" content={`${HOST_URL}/api/frame/base/get-tx-frame`} />
      </Head>

      <h1>Mint your Sivar Volcano Frame</h1>
      <img src={secondFrameImgUrl} alt="Sivar Volcano" />
      <p>Click "Mint" to mint this beautiful frame.</p>
    </>
  );
}
