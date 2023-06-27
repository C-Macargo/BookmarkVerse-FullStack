import prisma from '@/config/database';

async function findUserByEmail(email: string) {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  return user;
}

async function findUserData(email: string) {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
    select: {
      id: true,
      image_url: true,
    },
  });
  return user;
}

async function createUser(email: string, password: string, name: string, image_url: string) {
  const user = await prisma.user.create({
    data: {
      email,
      password,
      name,
      image_url,
    },
  });
  return user;
}

export const authRepository = {
  findUserByEmail,
  createUser,
  findUserData,
};
