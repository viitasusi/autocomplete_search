import axios from 'axios';

export const fetchPredictions = async (input) => {
    const url = `https://maps.googleapis.com/maps/api/place/queryautocomplete/json?key=${process.env.REACT_APP_GOOGLE_PLACES_KEY}&input=${input}`;
    const config = { headers: { 'Access-Control-Allow-Methods': 'GET,PUT,PATCH,POST,DELETE', 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json', 'withCredentials': 'true' }}; 
    return await axios.get(url, config);
}



