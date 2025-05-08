'use client';

import { useState, useContext } from 'react';
import { useRouter } from 'next/navigation';
import { ProdutoContext } from '../../context/ProdutoContext';

export default function NovoProduto() {
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const { adicionarProduto } = useContext(ProdutoContext);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nome || !preco) return;

    adicionarProduto({ nome, preco: parseFloat(preco).toFixed(2) });
    router.push('/');
  };

  return (
    <main style={{ padding: '20px' }}>
      <h1>Cadastrar Novo Produto</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label><br />
          <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
        </div>
        <div>
          <label>Preço:</label><br />
          <input type="number" value={preco} onChange={(e) => setPreco(e.target.value)} />
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </main>
  );
}