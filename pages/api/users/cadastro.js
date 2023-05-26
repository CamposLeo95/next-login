import { cadastro } from '../../../services/user';

export default function handle(req, res) {
  try {
    const newUser = cadastro(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(204).json(error.message);
  }
}
