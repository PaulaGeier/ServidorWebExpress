
const express =require('express');
const path = require('path');


const startServer=()=>{
    const port=3000;
    const app=express();

    
    //Aca se define la ruta para el directorio dist
    const pathDist=path.resolve(__dirname,'../dist');

    //Aca definimos el contenido estatico de la aplicacion
    app.use(express.static(pathDist));


    //Aca se define la ruta para el index.html
    app.get('*', (req, res) => {
        const indexPath = path.join(pathDist, 'index.html');
        res.sendFile(indexPath);
    })

    //Aca el servidor escucha el puerto 3000
    app.listen(port,()=>{
        console.log(`Servidor escuchando en el puerto ${port}`);
    })

}

startServer();
