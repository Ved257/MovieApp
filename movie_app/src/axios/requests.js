const API_KEY= "76deadecb4e996be0639c6b2a624a68c";

const requests = {

    //Movie requests

    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`, 
    fetchTrendingMovies: `/discover/movie?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`, 
    fetchPopularMovie: `/movie/popular?api_key=${API_KEY}&language=en-US`,

    
    
    
    //Search
    
    fetchSearchResult: `/search/multi?api_key=${API_KEY}&language=en-US&query=`,
    fetchSearchResultMovies: `/search/movie?api_key=${API_KEY}&language=en-US&query=`,
    fetchSearchResultSeries: `/search/tv?api_key=${API_KEY}&language=en-US&query=`,


    // TV requests

    fetchTrendingTV: `/trending/tv/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginalsTV: `/discover/tv?api_key=${API_KEY}&with_networks=213&language=en-US`,
    fetchAiringTodayTV: `/tv/airing_today?api_key=${API_KEY}&language=en-US`,
    fetchPopularTV: `/tv/popular?api_key=${API_KEY}&language=en-US`,
    fetchTopRatedTV: `/tv/top_rated?api_key=${API_KEY}&language=en-US`,
    
}

export default requests;