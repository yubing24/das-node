import { PrismaClient } from "@prisma/client";
import { createId } from "@paralleldrive/cuid2";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

const generateUsers = () => {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const domain = faker.internet.domainName();
  let user = {
    id: createId(),
    email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${domain}`,
    firstName,
    lastName,
    password: `Password123!`,
  };
  return user;
};

async function main() {
  // generate users
  for (let i = 0; i < 10; i++) {
    const user = generateUsers();
    await prisma.user.create({
      data: user,
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
