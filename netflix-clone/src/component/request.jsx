const tmbdApiKey = "1e31b001685bb9abfe5d1769c053d634"; //its api key getting from TMBD site that is allow us to get the movie data from the site so we are making a request for it

const requests = {
  fetchTrending: `/trending/all/week?api_key=${tmbdApiKey}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${tmbdApiKey}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${tmbdApiKey}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${tmbdApiKey}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${tmbdApiKey}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${tmbdApiKey}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${tmbdApiKey}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${tmbdApiKey}&with_genres=99`,
};
export default requests;
