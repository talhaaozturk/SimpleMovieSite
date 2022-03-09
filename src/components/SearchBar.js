import React from "react";
import { Link, useNavigate } from "react-router-dom";

class SearchBar extends React.Component {
  handleFormSubmit = (event) => {
    event.preventDefault(); //arama yerine birşeyler yazıp enterladığımızda sayfa yenileniyordu,onu engellemek için bu fonksiyonu yazdık.
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <div className="form-row mb-5">
          <div className="col-10">
            <input
              onChange={this.props.searchMovieProp}
              type="text"
              className="form-control"
              placeholder="Search a movie"
            />
          </div>
          <div className="col-2 float-end">
            <button
              type="button"
              className="btn btn-danger"
              style={{
                float: "right",
                marginTop: "-39px",
                marginRight: "50px",
              }}
            >
              <Link
                to="/add"
                style={{ textDecoration: "none", color: "white" }}
              >
                Add Movie
              </Link>
            </button>
            {/* <button
              type="button"
              className="btn btn-danger"
              style={{
                float: "right",
                marginTop: "-39px",
                marginRight: "50px",
              }}
            >
              Add movie
            </button> */}
          </div>
        </div>
      </form>
    );
  }
}

export default SearchBar;
