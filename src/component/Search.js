import React, { useState } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Search.css';
import Axios from 'axios';
import { Fragment } from 'react';
import {v4 as uuidv4} from 'uuid';
import Movie from './Movie';
import Alert from "./Alert"
const  Search=()=>{
  

  const [movie,setMovie]=useState("");
  const [name,setName]=useState("");
  const [results, setResults]=useState([]);
  const [alert,setAlert]= useState([]);
  const API_KEY="49da3be2";
  const url=`https://www.omdbapi.com/?apikey=${API_KEY}&s=${name}`;
  const getData= async()=>{
    if(name!==""){
    const data =await Axios.get(url);
    if(!data.data)
        {
          return setAlert("No movie found..");
        }
    console.log(data);
    console.log(data.data.Search);
    setResults(data.data.Search );
  }else{
    setAlert("Please Fill the form");
  }
    };
 
  const onChange=(e)=>{
    setName(e.target.value);
  };
  const onSubmit =(e) =>{
    setMovie(name);
    e.preventDefault();  
   getData();
  }
  return (
    <>
    <Fragment>
    <div className="App">
     <div className="container">
        <form className="form" >
        {alert !==""&& <Alert alert={alert}/>}
          <label ><b>Search Movie</b></label><br/>
          <input type="text"  placeholder="Enter Movie" onChange={onChange} /><br/>
          <br/> <button type="submit" className="btn btn-primary" onClick={onSubmit}>Submit</button>
      </form>
      </div> 
      <div className="row">
      {results!==[]&& results.map(result =>
         <Movie key={uuidv4()} result={result}/>)}
      </div>
      </div>
      </Fragment>
    </>
  );
}

export default Search;