"use client"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Page() {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);
  const router = useRouter();

  async function fetchData() {
    try {
      const response = await fetch('http://localhost:5000/categories');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log('Categories fetched:', data);
      setCategories(data);
    } catch (error) {
      console.error('Erro ao buscar dados do servidor:', error);
      setError(error.message);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleCategoryClick = (id) => {
    router.push(`/categories/${id}/products`);
  };

  return (
    <main className="p-4">
      {error ? (
        <p className="text-red-500">Erro ao buscar dados do servidor: {error}</p>
      ) : (
        <div>
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-center">Escolha a Categoria de Produtos</h1>
            <button 
              onClick={() => router.back()} 
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
              Voltar
            </button>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((categorie) => (
              <li 
                key={categorie.id || categorie._id} 
                className="border p-4 rounded shadow hover:shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
                onClick={() => handleCategoryClick(categorie.id || categorie._id)}
              >
                <img 
                  src={categorie.img_URL} 
                  alt={categorie.name} 
                  className="w-full h-48 object-cover mb-4 rounded" 
                  onError={(e) => e.target.style.display = 'none'} 
                />
                <p className="text-lg font-semibold">{categorie.name}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
}
