Projeto Forms do Paciente

Modificações: 

Retirada da aba Configuração (muito mais trabalho)

Modificação do Nome de "Biblioteca", para "Exibir"

Retirada do Plano de Fundo ('-')

Próximos Passos:

Inserimento da tela de Inserir dados do Paciente

Inserimento do Banco de Dados para a Tela Inserir

Inserimento da tela de exibição no Exibir (caso o paciente tenha errado algum dado informado)

Atualizações 02/11/2024:

Tudo Funcionando por parte do Adicionar

O Cadastro está funcionando corretamento no Banco de dados

Modificações feitas na pasta "backend" e arquivo "Adicionar.js"

Convertendo os elemtnos do Dropdown em JSON, por conta da falta de recurso do SQLite (do Banco em si)

Teste:

Caso queira testar na sua maquina, antes faça...

npm install

npm install react-select

npm install express sqlite3 cors

npm install express sqlite3 sequelize body-parser(caso esteja dando erro no banco)

Processo:

Ative o Banco: cd backend -> node server.js (esteja com node baixado)

Ative o Frontend: npm start -> brinque ('-')

Notas:

Caso queira atualizar algo, pode atualizar a lista de Alergias e Doenças Pre-existentes

Essa atualização pode ser feita no Adicionar.js

Em "doencasOptions" e "alergiasOptions" -> com isso será acrescentado no Dropdown