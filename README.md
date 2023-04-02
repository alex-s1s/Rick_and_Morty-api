O projeto faz uso de componentes para criar uma lista de personagens da série Rick and Morty. Ele se comunica com a API do Rick and Morty para recuperar dados de personagens e exibir esses dados na interface do usuário. O projeto também possui suporte a tradução dos personagens, espécies, tipos  e permite que os usuários adicionem personagens aos favoritos.

**Funcionalidades**

- Visualização da lista de personagens da série Rick and Morty, com informações como nome, status, espécie e gênero.
- Filtro por nome, status, espécie e gênero, permitindo que o usuário encontre personagens específicos de acordo com suas preferências.
- Visualização detalhada de um personagem selecionado, mostrando informações adicionais como localização, origem, episódios em que aparece e imagem.
- Adição de personagens aos favoritos, permitindo que o usuário salve seus personagens preferidos em uma lista separada.
- Visualização da lista de personagens favoritos, permitindo que o usuário veja todos os personagens que salvou em uma única página.
- Sistema de internacionalização, permitindo que o usuário alterne entre idiomas disponíveis (português e inglês).
- Responsividade, adaptando-se a diferentes tamanhos de tela para uma melhor experiência do usuário em dispositivos móveis.
- Tratamento de erros, exibindo mensagens de erro quando ocorrem problemas na aplicação, como falha na conexão com a API ou quando não há resultados para a busca realizada pelo usuário.

**O projeto  foi construído com as seguintes tecnologias:**

- **React:** biblioteca JavaScript para construir interfaces de usuário.
- **Next.js:** um framework React que permite criar aplicativos React com facilidade, escalabilidade e desempenho.
- **TypeScript:** uma linguagem de programação tipada que estende o JavaScript adicionando tipos estáticos.
- **ContextApi:** um recurso para gerenciamento do estado global da aplicação.
- **Axios:** uma biblioteca JavaScript para fazer solicitações HTTP.
- **Next-translate:** um pacote Next.js para tradução de aplicativos.
- **React-icons:** uma biblioteca de ícones para React.
- **Styled-components:** uma biblioteca para escrever CSS em JavaScript.
- **ESLint:** uma ferramenta para identificar e relatar padrões encontrados no código JavaScript.
- **eslint-config-next:** um conjunto de regras ESLint para projetos Next.js.
- **babel-plugin-styled-components:** um plugin Babel para Styled-components.
- **@types/node, @types/react e @types/react-dom:** pacotes que fornecem definições de tipo TypeScript para Node.js, React e ReactDOM.

**Para executar o projeto, siga os seguintes passos:**

- Certifique-se de ter o Node.js instalado em sua máquina.
- Clone o repositório do projeto.
- Abra o terminal na pasta raiz do projeto.
- Execute o comando **npm install** para instalar todas as dependências necessárias.

**Após a conclusão da instalação, execute um dos seguintes comandos, dependendo do que deseja fazer:**
- Para iniciar o ambiente de desenvolvimento: **npm run dev**
- Para criar uma versão de produção do aplicativo: **npm run build**
- Para iniciar o servidor em produção: **npm start**
- Para verificar o código seguindo as regras estabelecidas no arquivo de configuração do ESLint: **npm run lint**

Certifique-se de seguir esses passos na ordem apresentada para garantir que todas as dependências sejam instaladas corretamente e que o projeto seja executado sem problemas.

**Melhorias**

- Adicionar testes.
