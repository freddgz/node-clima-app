const axios=require('axios');

let getLugarLatLng= async(direccion)=>{
    let encodedSearch=encodeURI(direccion);
    let url=`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedSearch}&key=AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM`;
    
    let response= await axios.get(url);
    if(response.data.status==='ZERO_RESULTS'){
        throw new Error(`no hay resultado para la ciudad ${direccion}`);
    }

    let firstResult=response.data.results[0];
    let coor=firstResult.geometry.location;
    
    return {
        direccion: firstResult.formatted_address,
        lat: coor.lat,
        lng: coor.lng
    }
}
module.exports={
    getLugarLatLng
}