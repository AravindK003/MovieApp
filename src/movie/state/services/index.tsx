import axios from 'axios';
  
export const getJson = async (url:any, options:any = {}) => {

    const optionsUpdate = {...options, headers: {...options.headers, 
 }};
    console.log('getJson updated ', optionsUpdate);   
    console.log('getJson original ', options);

    return axios.get(url, optionsUpdate)
            .then(response => {   
                console.log(response.data); 
                return response.data;
            })
            .catch((error) => {
                console.log('error 3 ' + error);
                throw error;
            });
}

let api = "https://api.themoviedb.org/3";

export const getMovie = (id: string, options = {}) => {
    return getJson(`${api}/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63`, options)
}

export const getMovies = (options = {}) => {
    return getJson(`${api}/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63`, options)
}