const { json } = require("body-parser")

let initVar = () =>{
  process.env.CLAVE_JWT = process.env.CLAVE_JWT ||  'clave de desarrollo/cambiar en produccion'
  process.env.PORT= process.env.PORT || 3001
  process.env.OPCIONES_JWT = process.env.OPCIONES_JWT || JSON.stringify({ expiresIn: 60 * 20, algorithm: 'HS256', jwtid: '5', keyid: '5' })
  process.env.CLIENT = 'mysql'
  process.env.CONNECTION_DB={
    host : '127.0.0.1',
    user : 'root',
    password : '',
    database : 'eventos'
  }

}

var config = { 
    consumer_key: 'YNjUgG9Pc5LLbkJhKzcT4EBt2', 
    consumer_secret: 'Gc5B1I7yRui7rtFOEXzgkkq5EPah1fgPvH8DrvJyg3LlMV4kb7', 
    access_token: '1286698992630468608-lbFzCBhghTNeUVuUuxRrP3lo0Ugejq', 
    access_token_secret: 'CFBirUvqrZOwQheSnHtfLOpOD7gCoI9KR0mbhoZHACLiP' 
  }
  
  module.exports = {
    initVar
  };
  