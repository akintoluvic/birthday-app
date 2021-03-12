import axios from "axios"

const apiKey = 'cc52e1253aa9fb8e03b2e4c5e40b0dd9'
const email = 'akintoluvic@gmail.com'

const verifyEmail = async (email) => {
    return await axios.get(`http://apilayer.net/api/check?access_key=${apiKey}
    &email=${email}
    &smtp=1
    &format = 1`)
  }
  
  export { verifyEmail }
  
