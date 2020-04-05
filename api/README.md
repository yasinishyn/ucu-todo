# Setup

### 1. Install nvm and node

nvm - https://github.com/nvm-sh/nvm#installation-and-update

node version is recomended 11.14.0

### 2. Install packages `npm i`

### 3. Install sequalize `npm install sequelize-cli --save -g`

### 4. Create `.env` and `.env.test` files and populate with configs similar to `.env.sample` according to your pg setup.

### 5. Migrate and seed database

```
  sequelize db:migrate
  sequelize db:seed:all
```

### 6. Start the app `npm start`

### 7. API Docs

Get all todos `GET /api/v1/todos`

Get particular todo `GET /api/v1/todos/:id`

Create a new todo `POST /api/v1/todos`; body: `{todo: {title: "new title", isFinished: false}}`

Update the todo `PUT /api/v1/todos/:id`; body: `{todo: {title: "new title", isFinished: false}}`

Delete the todo `DELETE /api/v1/todos/:id`