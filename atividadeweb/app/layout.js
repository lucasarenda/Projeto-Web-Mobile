import './globals.css';
import { ProdutoProvider } from '../context/ProdutoContext';

export const metadata = {
  title: 'Catálogo de Produtos',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <ProdutoProvider>{children}</ProdutoProvider>
      </body>
    </html>
  );
}
