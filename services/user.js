let users = [];

export function cadastro(body) {
  const user = users.find(({ email }) => email === body.email);

  if (user) throw new Error('Usuário ja cadastrado');

  users.push(body);
  return body;
}

export function login(body) {
  const user = users.find(({ email }) => email === body.email);

  if (!user) throw new Error('Usuário não cadastrado');
  if (user.password !== body.password) throw new Error('Usuário ou senha inválidos');

  return user;
}
