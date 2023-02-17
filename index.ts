import useFetch from './src/index'


(async() => {

  const { GET, POST, DELETE, PATCH} = useFetch({
    baseURL: 'http://localhost:3000/api/v1',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      'Access-Control-Allow-Origin': '*'
    },
  })

  const res = await GET('/usersc')

  // const res1 = await POST('/users', {
  //   "email": "probando@gmail.com",
  //   "password": "test1234",
  //   "role": "admin"
  // })

  // const res2 = await DELETE('/users/19')
  
  // const res2 = await PATCH('/users/1', {
  //   "email": "admina@gmail.com",
  // })

  
  console.log(res)
  console.log('termine')

})()