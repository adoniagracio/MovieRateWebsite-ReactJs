import axios from "axios"

const baseurl = process.env.REACT_APP_BASEURL;
const apikey = process.env.REACT_APP_APIKEY;


export const getMovieList = async () => {
    const movie = await axios.get(`${baseurl}/movie/upcoming?api_key=${apikey}`);
    return movie.data.results
}

export const searchMovie = async(q) => {
    const search = await axios.get(`${baseurl}/search/movie?query=${q}&api_key=${apikey}`)
    return search.data;
}

