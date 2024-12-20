const { join } = require("@prisma/client/runtime/library");
const prisma = require("../prismaClient.js");

// const registerUser = async (req, res) => {
//   try {
//     const { full_name, email, age, phoneNumber, address, membership_type, join_date } =
//       req.body;

//     if (!full_name || !email || !age || !phoneNumber || !address || !membership_type || !join_date) {
//       return res.status(300).json({ message: "Provide all fields" });
//     }
//     const existingEmail = await prisma.user.findFirst({
//       where: {
//         email: email,
//       },
//     });
//     if (existingEmail) {
//       return res.status(400).json({ message: "Email already exists" });
//     }

//     const existingPhoneNumber = await prisma.user.findFirst({
//       where: {
//         phoneNumber: phoneNumber,
//       },
//     });
//     if (existingPhoneNumber) {
//       return res.status(400).json({ message: "Phone Number already exists" });
//     }

//     const allData = await prisma.user.create({
//       data: {
//         full_name: full_name,
//         age: age,
//         email: email,
//         phoneNumber: phoneNumber,
//         address: address,
//         membership_type: membership_type,
//         join_date:join_date
//       },
//     });
//     return res.status(200).json({ message: "User created successfully", allData });
//   } catch (error) {
//     console.log(error);
//     return res.status(400).json({ message: "Failed to register User" });
//   }
// };

const userRegister = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(300).json({ error: "provide all fields" });
    }
    const allData = await prisma.user.create({
      data: {
        username: username,
        email: email,
        password: password,
      },
    });
    console.log(allData);
    
    return res.status(200).json({message:"Success",allData});
  } catch (error) {
    return res.status(500).json({ error: "failed to register user" });
  }
};

module.exports = {
  userRegister,
};
