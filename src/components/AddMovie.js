import React from "react";
import serialize from "form-serialize";
import { Link, useNavigate } from "react-router-dom";
class AddMovie extends React.Component {
  handleForSubmit = (e) => {
    e.preventDefault(); //add butonuna basıldığında sayfayı resfresh etmemesi için.
    var newMovie = serialize(e.target, { hash: true });
    this.props.onAddMovie(newMovie);
  };
  render() {
    return (
      <div className="container">
        <form className="mt-5" onSubmit={this.handleForSubmit}>
          <input
            className="form-control"
            id="disabledInput"
            type="text"
            placeholder="Fill the form to add a movie..."
            disabled
          ></input>
          <div className="form-row">
            <div className="form-group col-md-10">
              <label htmlFor="inputName">Name</label>
              <input type="text" className="form-control" name="name"></input>
            </div>
            <div className="form-group col-md-2">
              <label htmlFor="inputRating">Rating</label>
              <input type="text" className="form-control" name="rating"></input>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-12">
              <label htmlFor="inputImage">Image URL</label>
              <input
                type="text"
                className="form-control"
                name="imageURL"
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
export default AddMovie;
