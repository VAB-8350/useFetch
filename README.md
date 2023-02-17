## useFetch
### Description
This project arose with the idea of ​​simplifying the calls to an API, I use the [axios](https://www.npmjs.com/package/axios) library and it is mainly intended to be used in React, since it is used as a hook, avoiding having too many getExample.service.js or similar files.


------------

### Example

I recommend using the initial configuration from an external `config.js` file so that we don't repeat this configuration every time you want to use it.

config.js
```javascript
const config = {
  headerOptions: {
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      'Access-Control-Allow-Origin': '*'
    }
  }
}

export default config
```
Then, in the component that we need to query, we can use it this way...

exampleComponent.jsx
```javascript
import { useEffect } from 'react'
import useFetch from '@vab-8350/usefetch'

import config from './config.js'

function exampleComponent() {

  const {GET, POST, PATCH, DELETE} = useFetch(config.fetchHeader)

  useEffect(() => {

    getInfo()

  }, [])

  const getInfo = async() => {

    const {data, status} = await GET('/users')
    console.log(data)
    console.log(status)

  }

  return (
    <div>
      example
    </div>
  )
}

export default exampleComponent
```

Functions  | parameters | required
------------- | ------------- | -------------
GET  | null | null
POST  | body | required
PATCH  | body | required
DELETE | body | optional

------------

If you need to better customize the headers you can consult the library [axios](https://www.npmjs.com/package/axios).

I hope this library was to your liking, and in the event of any improvement that you think could be incorporated, do not hesitate to let me know.


- [Linkedin](https://www.linkedin.com/in/andres-barilin-1b8a0a1b4/)
- [GitHub](https://github.com/VAB-8350)
- [My portfolio](https://www.victorbarilin.com)
