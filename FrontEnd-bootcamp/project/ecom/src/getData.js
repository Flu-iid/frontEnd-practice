import axios from "axios"

const getData = async(api) => {
  const response = await axios.get(api)
  .then(resp => resp)
  .catch(error => console.log(error)) 
  console.log(response)
  return response
} 

export default getData
