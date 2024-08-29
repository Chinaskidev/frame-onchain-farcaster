import Head from "next/head";

// Definir la URL del host a partir de la variable de entorno
const HOST_URL = process.env.NEXT_PUBLIC_HOST_URL;

// Definir el título y la URL de la imagen
const title = "Amanita Mutation";
const frameImgUrl = `${HOST_URL}/regenmutation.png`;
// Mostrar en la consola el valor de la URL generada para asegurarte de que es válida
console.log("HOST_URL:", HOST_URL);
console.log("frameImgUrl:", frameImgUrl);

export default function Home() {
  return (
    <>
      <Head> 
        <meta property="og:title" content={title} />
        <meta property="fc:frame" content="vNext" />
        {/* Asegúrate de que el valor de "fc:frame:image" sea correcto */}
        <meta name="fc:frame:image" content={frameImgUrl} />
        <meta name="fc:frame:image:aspect_ratio" content="1:1" />
        <meta property="fc:frame:button:1" content="Mint" />
        <meta property="fc:frame:button:1:action" content="tx" />
        <meta property="fc:frame:button:1:target" content={`${HOST_URL}/api/frame/degen/get-tx-frame`} />
      </Head>

      <h1>Amanita Mutation</h1>
      
    </>
  );
}
