import { Router } from 'express';
import { faker } from '@faker-js/faker';

const router = Router();

const generateUsers = (count = 5) =>
  Array.from({ length: count }).map(() => ({
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    avatar: faker.image.personPortrait(),
  }));

router.get('/', (_req, res) => {
  const users = generateUsers(20);
  res.status(200).json(users);
});

export default router;
