const bcrypt = require('bcrypt')

//Method 1
const hashPassword = async (pw) =>{
  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(pw,salt)
  console.log(salt)
  console.log(hash)
}


//Compares the password with its hash
const login = async(pw,hashedPw) => {
  const result = await bcrypt.compare(pw,hashedPw)
  if(result){
    console.log('You are in!')
  } else{
    console.log('WRONG')
  }
}



hashPassword('hi')

login('hi!','$2b$10$r4ElZWd7GRfVAJb7lNer/uuQFj8HwZCKnilSs9lb9fKFQHRF5sXvS')