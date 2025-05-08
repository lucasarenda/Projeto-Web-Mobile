'use client';

import Link from 'next/link';
import { useContext } from 'react';
import { ProdutoContext } from '../context/ProdutoContext';

export default function Home() {
  const { produtos } = useContext(ProdutoContext);

  return (
    <main style={{ padding: '20px' }}>
      <h1>Catálogo de Produtos</h1>
      <Link href="/novo_produto">
        <button>Adicionar Produto</button>
      </Link>

      <ul>
        {produtos.map((produto, index) => (
          <li key={index}>
            <strong>{produto.nome}</strong> - R$ {produto.preco}
          </li>
        ))}
      </ul>
    </main>
  );
}