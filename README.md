🌊 UrbanAssist

📌 Sobre o projeto

**UrbanAssist** é uma API desenvolvida para fins academicos a ideia do projeto é ajudar pessoas em situações de enchentes e 
alagamentos a encontrar **abrigos próximos** com informações úteis e atualizadas.

O foco do projeto é oferecer uma solução simples e eficiente para:

* Localizar abrigos disponíveis
* Consultar vagas disponíveis
* Buscar abrigos por bairro
* Atualizar ocupação dos abrigos
* Gerenciar cadastro de abrigos

---

🚀 Tecnologias utilizadas

### Backend

* Node.js
* Express
* SQLite
* Postman

### (Próxima etapa)

* React
* Axios
* Vite

---

⚙️ Funcionalidades

### CRUD de abrigos

### Criar abrigo

```http
POST /abrigos
```

### Listar abrigos

```http
GET /abrigos
```

### Atualizar vagas

```http
PUT /abrigos/:id
```

### Remover abrigo

```http
DELETE /abrigos/:id
```

---

🔎 Busca por bairro

```http
GET /buscar?bairro=Centro
```

Retorna apenas os abrigos do bairro informado.

---

🗄 Estrutura do banco

Tabela:

```sql
abrigos
```

Campos:

```text
id
nome
endereco
bairro
capacidade
vagas
telefone
```

---

🧪 Exemplo de cadastro

```json
{
  "nome": "Escola Municipal Centro",
  "endereco": "Rua das Flores, 100",
  "bairro": "Centro",
  "capacidade": 120,
  "vagas": 45,
  "telefone": "11999999999"
}
```

---

▶️ Como executar

Instalar dependências:

```bash
npm install
```

Rodar servidor:

```bash
node server.js
```

Servidor:

```bash
http://localhost:3000
```

---

📁 Estrutura do projeto

```bash
backend/
├── server.js
├── database.js
├── database.db
├── package.json
```

---


