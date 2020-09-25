;
let entorno = require('./config/config'),
app= require('./app')

entorno.initVar()

app.listen(process.env.PORT,()=>{
    console.log(`El servicio esta funcionando en el puerto ${process.env.PORT}`)
})