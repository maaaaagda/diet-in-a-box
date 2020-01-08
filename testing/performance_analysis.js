const axios = require('axios');

const options = {
  url: 'http://localhost:9000/api/products',
  method: 'GET',
  headers:{
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InJvbGUiOiJhZG1pbiIsInVzZXJJZCI6IjhmOGVhZTYwLTE2MGQtMTFlYS05NDMyLTU5YjI3ZGY2NzVjNiJ9LCJpYXQiOjE1NzgzMTM2NDYsImV4cCI6MTU3ODM0MjQ0Nn0.MIGSXx0kDC490ckPpJSgqyN9ES2rHENqUe4U1w5ZKqQ',
    'Access-Control-Allow-Origin': '*'
  }
};

const productSearchParams = ['applesauce'] //['a', 'app', 'apple', 'applesouce', 'Apples, dried, sulfured, uncooked']
const N = 10

async function getStats() {
  for (const param of productSearchParams) {
    const productOptions = Object.assign({}, options)
    productOptions.url = `${productOptions.url}?name=${param}`
    const results = []
    const timings = []
    let  i = 0;
    while (i < N) {
      const start = Date.now()
      const res = await axios(productOptions);
      results.push(parseInt(res.headers['content-length']))
      timings.push(Date.now() - start)
      i = i+1
    }
    console.log("Param:", param)
    console.log("Avg size", results.reduce((a, b) => a + b, 0)/N)
    console.log('Timings:', timings)
    console.log('Avg timing', timings.reduce((a, b) => a + b, 0)/N)

  }
}


getStats()
