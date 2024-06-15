"use client";
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';

export default function CategorieProducts() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const { categorieId } = useParams();
  const router = useRouter();

  useEffect(() => {
    if (categorieId) {
      fetchCategorieProducts();
    }
  }, [categorieId]);

  async function fetchCategorieProducts() {
    try {
      console.log('Fetching products for categorieId:', categorieId);
      const response = await fetch(`http://localhost:5000/categories/${categorieId}/products`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log('Categorie Products fetched:', data);
      setProducts(data);
    } catch (error) {
      console.error('Erro ao buscar produtos da categoria:', error);
      setError(error.message);
    }
  }

  return (
    <main className="p-4">
      {error ? (
        <p className="text-red-500">Erro ao buscar produtos da categoria: {error}</p>
      ) : (
        <div>
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-center">Produtos da Categoria</h1>
            <button 
              onClick={() => router.back()} 
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
              Voltar
            </button>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {products.map((product) => (
              <li key={product._id} className="border p-4 rounded shadow hover:shadow-lg hover:scale-105 transition-transform duration-300">
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