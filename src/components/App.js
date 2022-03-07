import React from "react";
import SearchBar from "./SearchBar";
import ReactDOM from "react-dom";
import MovieList from "./MovieList";
import axios, { Axios } from "axios";

require("dotenv").config();
console.log(process.env.REACT_APP_API_KEY);

class App extends React.Component {
  state = {
    movxSies: [],
    //garip isimlendirmeler bağlantıları daha iyi anlamak için..:)

    searchQuery: "",
  };

  // async componentDidMount() {
  //   const baseURL = "http://localhost:3002/movies";
  //   const response = await fetch(baseURL);
  //   console.log(response);
  //   const data = await response.json();
  //   console.log(data);
  //   this.setState({ movxSies: data });
  // }

  async componentDidMount() {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
    );
    this.setState({ movxSies: response.data.results });
  }

  // deleteMovie = (movie) => {
  //   const newMovieList = this.state.movxSies.filter((m) => m.id !== movie.id);
  //   this.setState((state) => ({ movxSies: newMovieList }));
  // };

  //FETCH API ILE YAPIMI
  // deleteMovie = async (movie) => {
  //   const baseURL = `http://localhost:3002/movies/${movie.id}`;
  //   await fetch(baseURL, { method: "DELETE" });
  //   const newMovieList = this.state.movxSies.filter((m) => m.id !== movie.id);
  //   this.setState((state) => ({ movxSies: newMovieList }));
  // };

  //AXIOS API ILE YAPIMI
  deleteMovie = async (movie) => {
    axios.delete(`http://localhost:3002/movies/${movie.id}`);
    const newMovieList = this.state.movxSies.filter((m) => m.id !== movie.id);
    this.setState((state) => ({ movxSies: newMovieList }));
  };

  searchMovie = (event) => {
    this.setState({ searchQuery: event.target.value });
  };

  render() {
    let filteredMovies = this.state.movxSies.filter((movie) => {
      return (
        movie.original_title
          .toLowerCase()
          .indexOf(this.state.searchQuery.toLowerCase()) !== -1
      );
    });
    return (
      <div className="container ">
        <div className="row">
          <div className="col-lg-12">
            <SearchBar searchMovieProp={this.searchMovie} />
          </div>
        </div>
        <MovieList
          moviess={filteredMovies}
          deleteMovieProp={this.deleteMovie}
        />
      </div>
    );
  }
}

export default App;
