import React from "react";
import serialize from "form-serialize";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
class EditMovie extends React.Component {
  state = {
    name: "",
    rating: "",
    overview: "",
    imageURL: "",
  };

  async componentDidMount() {
    const id = this.props.match.params.id;
    console.log(id);
    const response = await axios.get(`http://localhost:3002/movies/${id}`);
    const movie = response.data;
    this.setState({
      name: movie.name,
      rating: movie.rating,
      overview: movie.overview,
      imageURL: movie.imageURL,
    });
  }
  handleForSubmit = (e) => {
    e.preventDefault();
  };
  render() {
    return (
      <div className="container">
        <form className="mt-5" onSubmit={this.handleForSubmit}>
          <input
            className="form-control"
            id="disabledInput"
            type="text"
            placeholder="Edit the form to update a movie..."
            disabled
          ></input>
          <div className="form-row">
            <div className="form-group col-md-10">
              <label htmlFor="inputName">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={this.state.name}
              ></input>
            </div>
            <div className="form-group col-md-2">
              <label htmlFor="inputRating">Rating</label>
              <input
                type="text"
                className="form-control"
                name="rating"
                value={this.state.rating}
              ></input>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-12">
              <label htmlFor="inputImage">Image URL</label>
              <input
                type="text"
                className="form-control"
                name="imageURL"
                value={this.state.imageURL}
              ></input>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-12">
              <label htmlFor="overviewTextArea">Overview</label>
              <textarea
                className="form-control"
                name="overview"
                rows="5"
                value={this.state.overview}
              ></textarea>
            </div>
          </div>
          <input
            type="submit"
            className="btn btn-danger btn-block"
            value="Add movie"
            style={{ width: "100%", marginTop: "20px", marginBottom: "25px" }}
          ></input>
        </form>
      </div>
    );
  }
}
export default EditMovie;
