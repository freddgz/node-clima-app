const axios=require('axios');
let getClima= async(lat,lng)=>{
    
    let url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=73477d874b5f3e51f88972be5a886164`;
    url+='&units=metric';
    
    let response= await axios.get(url);
    
    if(response.data.cod ==! '200'){
        throw new Error(response.data.message);
    }

    return {
        temperatura: response.data.main.temp
    }
}
module.exports={
    getClima
}