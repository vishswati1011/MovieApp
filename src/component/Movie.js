import React, { Fragment, useState } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
const Movie = ({ result }) => {

    const { Poster, Title, Type, Year } = result;
    return (
        <Fragment>
        <div className="col-sm-4">
          <div className="movie">
            <h2>Title:{Title}</h2>
            <img src={Poster} alt={Type} />
            <h4>Year:{Year}</h4>
        </div>
        </div>
        </Fragment>
    )

}
export default Movie;