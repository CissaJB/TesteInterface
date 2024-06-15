"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ProductPage() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const router = useRouter();

  //Função para buscar os dados no servidor
  async function fetchData() {
    try {
      const response = await fetch('http://localhost:5000/products'); //Servidor do Dositio
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Erro ao buscar dados do servidor :(', error);
      setError(error.message);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  //Quando clicar no botão vai para a página de categorias
  const handleCategorySearch = () => {
    router.push('/categories');
  };

  //Se a página não carregar uma mensagem de erro é exibida, senão a pág aparece com produtos, preços e um botão
  return (
    <main className="p-4"> 
      {error ? (
        <p className="text-red-500">Erro ao buscar dados do servidor: {error}</p>
      ) : (
        <div> 
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-center">Produtos</h1>
            <button 
              onClick={handleCategorySearch}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              Pesquisar por Categoria
            </button>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {products.map((product) => (
              <li 
                key={product.id} 
                className="border p-4 rounded shadow hover:shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <img 
                  src={product.imageUrl} 
                  alt={product.name} 
                  className="w-full h-48 object-cover mb-4 rounded" 
                  onError={(e) => e.target.style.display = 'none'} 
                />
                <div className="flex justify-between items-center">
                  <p className="text-lg font-semibold">{product.name}</p>
                  <p className="text-lg font-semibold text-green-600">{product.Preço}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
}