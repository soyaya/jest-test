
const axios = require('axios')
//we do npm install axios
//then we call in axios into this doc
//define a function called fetch dada to get data from an api 


const functions = {
    fetchData: () => axios.get('https://jsonplaceholder.typicode.com/users/1').then(res => res.data).catch(err => 'error')
}
module.exports = functions;

//then export the document to be collected in the test file async.test.js