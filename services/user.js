import jwt from 'jsonwebtoken';

let users = [];

const SECRET = process.env.JWT_SECRET;

function createToken(user) {
  return jwt.sign({ email: user.email, name: user.name }, SECRET);
}

function readToken(token) {
  try {
    //Nesta função ele verifica o token e verifica se foi criado com a chave secreta
    return jwt.verify(token, SECRET);
  } catch (error) {
    throw new Error('Token invalido!');
  }
}

export function verifica(token) {
  return readToken(token);
}

export function cadastro(body) {
  const user = users.find(({ email }) => email === body.email);

  if (user) throw new Error('Usuário ja cadastrado');
  users.push(body);

  const token = createToken(body);

  return token;
}

export function login(body) {
  const user = users.find(({ email }) => email === body.email);

  if (!user) throw new Error('Usuário não cadastrado');
  if (user.password !== body.password) throw new Error('Usuário ou senha inválidos');

  const token = createToken(body);

  return token;
}
