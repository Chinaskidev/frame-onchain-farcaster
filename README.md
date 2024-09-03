# frame-onchain-farcaster en la Blockchain de DEGEN

**El frame-onchain-farcaster** es una aplicación innovadora que permite a los usuarios reclamar NFTs directamente desde un Farcaster Frame. Este repositorio contiene todo el código necesario e instrucciones para poner en marcha la aplicación.

## Comenzando

Para utilizar el **frame-onchain-farcaster**, sigue los siguientes pasos:

### Clonando el Repositorio

Primero, clona el repositorio en tu máquina local:

```bash
git clone https://github.com/Chinaskidev/frame-onchain-farcaster.git
cd amanitaframe
```
## Instalando Dependencias
Esta aplicación requiere varias dependencias, como 
```thirdweb y OnchainKit de Coinbase. Instálalas usando npm o yarn ```
```
npm install
```
o 

```
yarn install
```

## Despliegue con Vercel
Para desplegar el Farcaster Transaction Frame, recomendamos usar Vercel. Si aún no lo has hecho, regístrate en Vercel e instala la CLI de Vercel:
```
npm i -g vercel
```
Luego, dentro del directorio de tu proyecto, ejecuta:

```
vercel

```
Sigue las indicaciones para configurar y desplegar tu proyecto.

# Configurando Variables de Entorno
Vercel requiere variables de entorno específicas para que el frame-onchain-farcaster funcione correctamente. Estas incluyen:

- ```TW_SECRET_KEY:``` Clave secreta de la API de thirdweb.
- ```CONTRACT_ADDRESS:``` La dirección del contrato para el NFT.
- ```NEXT_PUBLIC_HOST_URL:``` La URL de tu aplicación desplegada.
- ```NEYMAR_API_KEY (opcional):``` Tu clave API de Neymar, si decides usarla. <br> <br>
Para agregar estas variables en Vercel, ve a la configuración de tu proyecto en el panel de Vercel, busca la sección de Variables de Entorno y agrega las variables mencionadas anteriormente.

# Pasos Finales
Una vez que tus variables de entorno estén configuradas, ¡tu aplicación estará lista para funcionar!

Puedes probar tu Frame usando el [Validador de Frames de Farcaster.](https://warpcast.com/~/developers/frames?url=https%3A%2F%2Ffc-polls.vercel.app%2Fpolls%2F054aee65-c63d-46c1-a1f9-a05b747860f6)

