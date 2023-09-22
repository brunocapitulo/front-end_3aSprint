# Meu Front-End

----------------------------

# Como executar:
Para executar esta aplicação será necessário ter instalado o Noje.js (https://nodejs.org/en)

# Primeiro comando:
npm install

# Em seguida executar:
npm start

# E assim, o projeto iniciará em http://localhost:3000


----------------------------

# Como executar pelo Docker:
Verifique se o Docker está instalado e em execução.

# Primeiro comando:
docker build -t meu-front-end:1.0 .

# Em seguida executar:
docker run -p 3000:3000 meu-front-end:1.0

# Acesse a aplicação após executar o contêiner:
http://localhost:3000


----------------------------

# A API Externa utilizada nesse projeto: https://fakestoreapi.com/

# É utilizada para representar todos os produtos, e a rota utilizada foi: https://fakestoreapi.com/products

# Esta API foi projetada para ser utilizada em projetos que requerem informações de produtos e carrinhos de compra no formato JSON.

# OBS: Não é preciso se registrar para utilizar a API.