import axios from 'axios';
const options = {
  method: 'GET',
  params: {
    bl_latitude: '11.847676',
    tr_latitude: '12.838442',
    bl_longitude: '109.095887',
    tr_longitude: '109.149359',
    restaurant_tagcategory_standalone: '10591',
    restaurant_tagcategory: '10591',
    limit: '30',
    currency: 'USD',
    open_now: 'false',
    lunit: 'km',
    lang: 'en_US'
  },
  headers: {
    'X-RapidAPI-Key': 'b71b2bb445msh52aac09012080b2p17b310jsn8c05576abbc5',
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
  }
};
export const GetData =async(type)=>{
    try {
        const {data: {data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,options);
        console.log(data)
        return data;
    } catch (error) {
        console.error(error);
    }
}