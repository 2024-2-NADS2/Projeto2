# FECAP - Fundação Escola de Comércio Álvares Penteado

<p align="center">
<a href= "https://www.fecap.br/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhZPrRa89Kma0ZZogxm0pi-tCn_TLKeHGVxywp-LXAFGR3B1DPouAJYHgKZGV0XTEf4AE&usqp=CAU" alt="FECAP - Fundação de Comércio Álvares Penteado" border="0"></a>
</p>

# CulturaHub

## CulturaSP

## Integrantes: 
- [Felipe Oluwaseun Santos Ojo](https://www.linkedin.com/in/felipeosantosojo/)  
- [Gustavo Castro](https://www.linkedin.com/in/gustavocastro01/)  
- [Marcella Santana Gonçalves Diniz Rocha](https://www.linkedin.com/in/marcella-santana-b76883262/)  
- [Thays Pontes](https://www.linkedin.com/in/thays-pontes-14663822b/)  

## Professores Orientadores:
- [Aimar Lopes](https://www.linkedin.com/in/aimarlopes/)  
- [Eduardo Savino](https://www.linkedin.com/in/eduardo-savino-gomes-77833a10/)  
- [Francisco Escobar](https://www.linkedin.com/in/francisco-escobar/)  
- [José Carlos Buesso](https://www.linkedin.com/in/jbuesso/)  
- [Victor Rosetti](https://www.linkedin.com/in/victorbarq/)  


## Descrição

<p align="center">
<img src="https://i.imgur.com/mne6mnP.png" alt="Cultura Hub" border="0">

<h1>💻 Cultura Hub - Hospedado no Netlify</h1>
🔗 https://culturahub.netlify.app
<h1>💾 Servidor Backend - Hospedado no CodeSandBox</h1>
🔗 https://codesandbox.io/p/devbox/culturahub-69kn4g

<br><br>
O projeto CulturaHub está alinhado com os princípios da ODS 19 – Arte, Cultura e Comunicação, promovendo a pluralidade cultural e a democratização do acesso à arte. A plataforma busca conectar pessoas a manifestações artísticas e culturais variadas, desde exposições a shows e peças de teatro, criando uma rede inclusiva e engajada que fortalece a interação entre artistas, produtores culturais e o público.

Através de seus filtros de busca personalizáveis, o CulturaHub democratiza a participação em eventos culturais, permitindo que pessoas de diferentes contextos sociais e geográficos tenham acesso à arte e à cultura. Além disso, ao dar visibilidade a eventos menores e facilitar conexões culturais em São Paulo, o projeto contribui para a disseminação de práticas artísticas como mecanismos de crítica social e transformação, em consonância com o objetivo de consolidar a comunicação para a paz e a cultura da diversidade.

Essa iniciativa reflete diretamente os propósitos da ODS 19 ao valorizar a liberdade cultural, estimular a diversidade e incentivar uma comunicação inclusiva, essencial para o fortalecimento de comunidades mais sustentáveis e conscientes.
<br><br>


## 🛠 Estrutura de pastas

-Raiz<br>
|<br>
|-->documentos<br>
|-->imagens<br>
|-->src<br>
  &emsp;|-->Backend<br>
  &emsp;&emsp;|-->config<br>
  &emsp;&emsp;|-->controllers<br>
  &emsp;&emsp;|-->db<br>
  &emsp;&emsp;|-->models<br>
  &emsp;&emsp;|-->routes<br>
  &emsp;|-->Frontend<br>
  &emsp;&emsp;|-->public<br>
  &emsp;&emsp;|-->src<br>
    &emsp;&emsp;&emsp;|-->pages<br>
    &emsp;&emsp;&emsp;|-->context<br>
    &emsp;&emsp;&emsp;|-->components<br>
    &emsp;&emsp;&emsp;&emsp;|-->assets<br>
    &emsp;&emsp;&emsp;&emsp;|-->header<br>
|readme.md<br>

Há também 3 pastas que seguem da seguinte forma:

<b>documentos</b>: Toda a documentação estará nesta pasta.

<b>imagens</b>: Imagens do sistema

<b>src</b>: Pasta que contém o código fonte.

## 🖥 Tecnologias utilizadas 

* HTML

* JavaScript

* CSS

* Node.js

* React

* MySQL
  
* Servidor CodeSandBox

* Figma

* Lucidchart

## 📋 Pré-requisitos

Antes de começar, você vai precisar ter instalado:  
- [Node.js](https://nodejs.org/)  
- Um editor de código como [VSCode](https://code.visualstudio.com/)  
- [MySQL Workbench](https://dev.mysql.com/downloads/workbench/) para gerenciar o banco de dados  
- Extensão **Live Server** no VSCode  
- [Azure CLI](https://learn.microsoft.com/cli/azure/install-azure-cli)

## 🛠 Instalação e Configuração

### 1. Criação do Diretório do Projeto

Primeiro, faça o download das pastas "Frontend" e "Backend", elas estão localizadas dentro da pasta "scr".

Em seguida, crie uma nova pasta onde o seu projeto será armazenado. Você pode fazer isso manualmente ou via terminal:
```bash
mkdir culturaHub
cd culturaHub
```

Dentro da pasta do projeto, extraia todos os arquivos que estão dentro da pasta "Frontend" para a raiz e mantenha tudo relacionado ao backend dentro da própria pasta.

A estrutura das pastas e dos arquivos deverá ficar da seguinte forma:

|-->culturahub<br>
  &emsp;|-->backend<br>
  &emsp;|-->nodemodules<br>
  &emsp;|-->public<br>
  &emsp;|-->src<br>
  &emsp;.gitignore<br>
  &emsp;package-lock.json<br>
  &emsp;package.json<br>
  
### 2. Inicializando o Front-end (React)

Ainda na raiz do projeto, abra o terminal instale as dependências necessárias:

```bash
npm install
```

Para rodar o site Web localmente, execute:
```bash
npm start
```
O projeto estará disponível em http://localhost:3000.

### 3. Configuração do Back-end (Node.js)

Abra um novo terminal e acesse a pasta do backend para instalar as dependências da seguinte forma:
```bash
cd ./backend
npm install
```

Após isso, inicie o servidor localmente assim:
```bash
npm start
```
Fará com que o servidor backend rode na porta http://localhost:3001.

### 4. Configuração do Banco de Dados MySQL

Instale o MySQL no seu computador e crie um banco de dados para o projeto.

* Abra o MySQL Workbench e crie um novo banco de dados.
* Rode os scripts SQL disponíveis no repositório para criar as tabelas necessárias

### 5. Conectando o Front-end e o Back-end

Agora que ambos os servidores estão funcionando, você pode configurar o front-end para se comunicar com o back-end através de chamadas API.

### 6. Término da configuração no Azure CLI

Com tudo rodando localmente, o seu projeto estará configurado e pronto para ser desenvolvido. Por meio do Azure, seu projeto será hospedado em um serviço on-line da seguinte maneira:
* Instalação do Azure CLI
   Possível fazer isso com o comando:

   ```bash
   npm install -g azure-cli

O App Service (oferecido pelo Azure) hospeda seu back-end e Azure Static Web Apps para hospedar o front-end React.

## 🗃 Histórico de lançamentos
A cada atualização os detalhes devem ser lançados aqui.
* 0.5.0 - 18/11/2024
    * Entrega do projeto final.
* 0.4.2 - 17/11/2024
    * Adição do recurso audiodescrição nos eventos.
    * Projeto de arquitetura da implementação do sistema concluído.
* 0.4.1 - 16/11/2024
    * Filtro por data/período de tempo.
    * Notificações ao usuário definidas.
* 0.4.0 - 13/11/2024
    * Requisição de usuário logado feita.
    * Página Sobre Nós definida.
    * Ajustes na página de Criar Evento.
    * Filtros de localização definidos.
* 0.3.9 - 12/11/2024
    * Primeiro modelo do site feito.
    * Código dos filtros definidos.
* 0.3.8 - 06/11/2024
    * Wireframe postado.
    * Definição do FAQ.
* 0.3.7 - 29/10/2024
    * Criptografia das senhas no banco de dados.
    * Subida do banco de dados na Azure.
    * Servidor no CodeSandBox.
* 0.3.6 - 28/10/2024
    * Tabelas eventos e usuários criadas no MySQL.
    * Conexão entre o site e o banco de dados.
* 0.3.5 - 23/10/2024
    * Diagrama de classes feito.
    * Design System feito.
* 0.3.4 - 21/10/2024
    * Licença aplicada.
* 0.3.3 - 20/10/2024
    * Página do usuário concluída.
    * Verificação de autenticação de login e banco de dados.
* 0.3.2 - 15/10/2024
    * Testes no CodeSandBox.
    * Página de criar evento feita.
* 0.3.1 - 14/10/2024
    * Introdução de Node.js e MySQL.
* 0.3.0 - 02/10/2024
    * Home definida e testes de responsividade nesta.
    * Definições de requisitos e casos de uso.
    * Rotas feitas.
    * Guia de estilo feito.
* 0.2.9 - 30/09/2024
    * Paleta de cores definida.
* 0.2.8 - 29/09/2024
    * Classes Event e User feitas.
* 0.2.7 - 26/09/2024
    * Figma do projeto atualizado.
    * Backlog das classes e seus atributos.
* 0.2.6 - 23/09/2024
    * Teste de responsividade.
* 0.2.5 - 22/09/2024
    * Criação do JS.
    * Teste de implementação e validação dos arquivos no VSCode.
* 0.2.4 - 18/09/2024
    * Projeto das páginas de cadastro e log-in feito.
    * Servidor CodeSandBox consultado.
* 0.2.3 - 17/09/2024
    * Mapa de navegação do site definido.
    * Figma do projeto atualizado.
* 0.2.2 - 13/09/2024
    * Ideia para a logo do projeto.
* 0.2.1 - 02/09/2024
    * Primeiro protótipo do HTML e do CSS lançados
    * Definição das ideias de card e banner do projeto.
* 0.2.0 - 01/09/2024
    * Definição do projeto no Figma e ideia do banner implementada.
    * Definição de atributos da classe Evento.
* 0.1.1 - 30/08/2024
    * Definição da paleta de cores.
* 0.1.0 - 20/08/2024
    * Definição da ideia e ODS do projeto.
    * Wireframe definido por membros do grupo.
* 0.0.1 - 08/08/2024
    * Início do projeto.

## 🖼 Figma do Projeto

<p><a href="https://www.figma.com/design/44VzgjpIxXsirxOWdJtm4A/Untitled?node-id=0-1&node-type=canvas&t=pEwqi3yuOjF1taog-0" target="_blank">Link do Modelo no Figma</a></p>
<p><a href="https://www.figma.com/design/QvT2FlVRYq8whjykBDH2Gz/Design-System-CulturaHub?m=auto&t=TJf3iJ9KncScX1HW-1" target="_blank">Link do Design System</a></p>
<p><a href="https://www.figma.com/design/WTJFyERfPxlN4h42QoaQb2/Guia-de-Estilo---Cultura-HUB-(Copy?m=auto&t=TJf3iJ9KncScX1HW-6)">Link do Guia de estilo</a></p>

## 📋 Licença/License

<p xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/"><a property="dct:title" rel="cc:attributionURL" href="https://culturahub.netlify.app">CulturaHub</a> by <a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="https://www.linkedin.com/in/felipeosantosojo/, https://www.linkedin.com/in/marcella-santana-b76883262/, https://www.linkedin.com/in/gustavocastro01/, https://www.linkedin.com/in/thays-pontes-14663822b/, https://www.fecap.br/">Felipe Oluwaseun Santos Ojo, Marcella Santana Gonçalves Diniz Rocha, Gustavo de Souza Castro, Thays Helyda da Silva Pontes, FECAP</a> is licensed under <a href="https://creativecommons.org/licenses/by/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">CC BY 4.0<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1" alt=""><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1" alt=""></a></p>

## 🎓 Referências

Aqui estão as referências usadas no projeto.

1. <https://www.youtube.com/>
2. <https://www.ticketmaster.com.br/>
3. <https://galena.com/>
4. <https://www.sympla.com.br/>
5. <https://www.ingresso.com/>
6. <http://tatatur.com.br/>
