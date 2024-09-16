import Head from 'next/head';

const HOST_URL = process.env.NEXT_PUBLIC_HOST_URL;

const title = "Mint your Frame";
const secondFrameImgUrl = `${HOST_URL}second-image.png`;

export default function SecondFrame() {
  return (
    <>
      <Head>
        <meta name="og:title" content={title} />
        <meta name="fc:frame" content="vNext" />
        <meta name="fc:frame:image" content={secondFrameImgUrl} />
        <meta name="fc:frame:image:aspect_ratio" content="1:1" />
        {/* Botón para mint */}
        <meta property="fc:frame:button:1" content="Mint" />
        <meta property="fc:frame:button:1:action" content="post" />
        <meta property="fc:frame:button:1:target" content={`${HOST_URL}/api/frame/base/get-tx-frame`} />
      </Head>

      <h1>Mint your Frame</h1>
      <p>Click "Mint".</p>
    </>
  );
}
