import Head from "next/head";

const HOST_URL= process.env.NEXT_PUBLIC_HOST_URL;
const title="Amanita Mutation";
const frameImgUrl= `${HOST_URL}/regenmutation.png`;




export default function Home() {
  return (
    <>
      <Head> 
        <meta property="og:title" content={title}/>
        <meta property="fc:frame" content="vNext"/>
        <meta name="fc:frame:image" content={frameImgUrl}/>
        <meta name="fc:frame:image:aspect_ratio" content="1:1"/>
        <meta property="fc: frame:button:1" content="Mint"/>
        <meta property="fc:frame:button:1:action" content="tx"/>
        <meta property="fc:frame:button:1:target" content={`${HOST_URL}/api/frame/degen/get-tx-frame`} />
        </Head>

        <h1>Amanita Mutation</h1>
      
    </>
  );
}
