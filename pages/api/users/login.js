import { login } from '../../../services/user';

export default function handle(req, res) {
  try {
    const user = login(req.body);
    res.status(200).json(user.name);
  } catch (error) {
    res.status(404).json(error.message);
  }
}
