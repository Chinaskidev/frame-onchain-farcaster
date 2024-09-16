import Head from 'next/head';
import { FrameMetadata } from '@coinbase/onchainkit/frame'; 

// Definir la URL del host a partir de la variable de entorno
const HOST_URL = process.env.NEXT_PUBLIC_HOST_URL;

// Definir el título y la URL de la imagen
const title = "Sivar Volcano";
const frameImgUrl = `${HOST_URL}sivarletrasvolcano.png`;
// Mostrar en la consola el valor de la URL generada para asegurarte de que es válida
console.log("HOST_URL:", HOST_URL);
console.log("frameImgUrl:", frameImgUrl);

export default function Home() {
  return (
    <>
      <Head> 
        <meta name="og:title" content={title} />
        <meta name="fc:frame" content="vNext" />
        <meta name="fc:frame:image" content={frameImgUrl} />
        <meta name="fc:frame:image:aspect_ratio" content="1:1" />
        
        {/* Primer botón para iniciar */}
        <meta property="fc:frame:button:1" content="Next" />
        <meta property="fc:frame:button:1:action" content="post" />
        <meta property="fc:frame:button:1:target" content={`${HOST_URL}/second-frame`} />
      </Head>

      <h1>Sivar Volcano</h1>
      <p>Welcome! Click "Start" and mint a beautiful Volcano</p>
    </>
  );
}
