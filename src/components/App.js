import React from "react";
import SearchBar from "./SearchBar";
import ReactDOM from "react-dom";
import MovieList from "./MovieList";
import axios, { Axios } from "axios";
import AddMovie from "./AddMovie";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditMovie from "./EditMovie";
require("dotenv").config();
//console.log(process.env.REACT_APP_API_KEY);

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
    const response = await axios.get("http://localhost:3002/movies");
    this.setState({ movxSies: response.data });
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

  addMovie = async (movie) => {
    await axios.post(`http://localhost:3002/movies/`, movie);
    this.setState((state) => ({
      movxSies: state.movxSies.concat([movie]),
    }));
  };

  render() {
    let filteredMovies = this.state.movxSies
      .filter((movie) => {
        return (
          movie.name
            .toLowerCase()
            .indexOf(this.state.searchQuery.toLowerCase()) !== -1
        );
      })
      .sort((a, b) => {
        return a.id < b.id ? 1 : a.id > b.id ? -1 : 0; //son eklediğimiz filmin en başta gözükmesini sağlar.
      });

    return (
      <BrowserRouter>
        <div className="container ">
          <Routes>
            <Route
              path="/"
              element={
                <div className="row">
                  <div className="col-lg-12">
                    <SearchBar searchMovieProp={this.searchMovie} />
                    <MovieList
                      moviess={filteredMovies}
                      deleteMovieProp={this.deleteMovie}
                    />
                  </div>
                </div>
              }
            ></Route>
            <Route
              path="/add"
              element={
                <AddMovie
                  onAddMovie={(movie) => {
                    this.addMovie(movie);
                  }}
                />
              }
            ></Route>
            <Route path="edit/:id" element={<EditMovie />}></Route>
          </Routes>
        </div>
      </BrowserRouter>

      // <div className="container ">
      //   <div className="row">
      //     <div className="col-lg-12">
      //       <SearchBar searchMovieProp={this.searchMovie} />
      //     </div>
      //   </div>
      //   <MovieList
      //     moviess={filteredMovies}
      //     deleteMovieProp={this.deleteMovie}
      //   />
      //   <AddMovie />
      // </div>
    );
  }
}

export default App;
