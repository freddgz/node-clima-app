const lugar=require('./lugar/lugar');
const clima=require('./clima/clima');
const argv=require('yargs').options({
    direccion:{
        alias:'d',
        desc:'direccion de la ciudad',
        demand:true
    }
}).argv;

let getInfo=async(direccion)=>{
    try{
    let coor = await lugar.getLugarLatLng(argv.direccion);
    let temp= await clima.getClima(coor.lat,coor.lng)
    return `el clima en ${coor.direccion} es ${temp.temperatura} °c`;
    }catch(e){
        return 'no se pudo determinar el clima';
    }
}

getInfo(argv.direccion)
.then(rpt=>console.log(rpt))
.catch(e=>console.log(e))