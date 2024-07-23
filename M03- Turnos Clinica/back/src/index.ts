import server from "./server";
import { PORT } from "./config/envs"
import "reflect-metadata"
import { AppDataSource } from "./config/data-source";
//import preloadData from "./helpers/preloadData"

AppDataSource.initialize()
.then(res=>{
    console.log("Consexion a la base de datos realizada con exito");
    //preloadData()
   // .then (res => {
      server.listen(PORT,()=>{
        console.log(`Services on PORT ${PORT}`);
      })  
    })
       
//a})