;
let config = require('../search')
let env = 'development'
let db= require('knex')(config[env])

let getDatos = (req,res)=>{
    let tabla = req.query.tabla
    let campos = req.query.campos
    db.select(campos).from(tabla).then(resultado=>{
        return res.status(200).json({
            oK:'true',
            datos: resultado
        })
    })
    .catch((error)=>{
        return res.status(500).json({
            oK:'false',
            datos: null,
            sms: `Error del servidor ${error}` 
    })
})
}

module.exports = {
    getDatos
}