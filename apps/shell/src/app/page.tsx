// Esta página NUNCA será vista pelo usuário.
// Ela só existe para o 'next build' do 'shell' não falhar.
// Todo o tráfego de '/' é roteado para o app 'web'.
export default function ShellPage() {
  return null; // Não renderiza nada
}