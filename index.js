const bcrypt = require('bcrypt')

//Method 1
const hashPassword = async (pw) =>{
  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(pw,salt)
  console.log(salt)
  console.log(hash)
}

hashPassword('hi')