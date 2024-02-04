import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function insertUser(username: string, password: string, firstName: string, lastName: string) {
    const res = prisma.user.create({
        data: {
            username:username,
            firstname: firstName,
            lastname: lastName,
            password
        }
    })
    console.log('inserted');
    console.log((await res)); 
}

// insertUser("admin2@gamil.com", "1234567", "harkirat1", "singh1")


interface UpdateParams {
    firstName: string;
    lastName: string;
}

async function updateUser(username: string, {
    firstName,
    lastName
}: UpdateParams) {
  const res = await prisma.user.update({
    where: { username },
    data: {
      firstname:firstName,
      lastname:lastName
    }
  });
  console.log(res);
}

// updateUser("admin1", {
//     firstName: "new name",
//     lastName: "singh"
// });


// Get User Details

async function getUser(username: string) {
    const user = await prisma.user.findFirst({
      where: {
          username: username
      }
    })
    console.log(user);
  }
  
  getUser("admin2@gamil.com");

