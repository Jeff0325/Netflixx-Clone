const API_KEY = "e12ab1670ad1b292576363b01abe223c";


const requests = {
fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`, 
fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`, 
fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`, 
fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`, 
fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`, 
fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`, 
fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`, 
fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
fetchTrailer: `/movie/{movie_id}/videos?api_key=${API_KEY}`,
}

export default requests;