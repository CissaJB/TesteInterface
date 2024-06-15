"use client"
import Image from 'next/image';

import { useRouter } from 'next/navigation';
  
const Home = async ({}) => {
  const router = useRouter();

  return (
    <main className="h-screen flex flex-col">
      <div className="flex flex-1">
        <div className="w-1/2 bg-black flex flex-col items-center justify-center">
          <h1 className="text-2xl sm:text-4xl font-black tracking-wide text-center text-white mb-6">
            Bem-vindo ao Do Sitio!
          </h1>
          <Image
            src="/img/fazenda.png"
            alt="Imagem de fazenda"
            width={500}
            height={300}
            className="mb-6"
          />
          <p className="max-w-md text-center text-md text-white mb-6">
            A DoSitio é uma marca comprometida em trazer o melhor da natureza para a sua mesa. Nossa missão é fornecer produtos orgânicos de alta qualidade, cultivados com amor e respeito pelo meio ambiente. Acreditamos que uma alimentação saudável começa com ingredientes puros e naturais, e estamos dedicados a promover um estilo de vida sustentável e consciente.
          </p>
        </div>
        <div className="w-1/2 flex flex-col items-center justify-center">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">
            Faça login e venha conhecer nossos produtos
          </h2>
          <button type='button' 
            onClick={() => router.push('/login') }
            className="bg-lime-800 hover:bg-lime-600 text-white font-bold py-2 px-4 rounded"
          >
            Fazer Login
          </button>
        </div>
      </div>
    </main>
  );
};

export default Home;