import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function HomeScreen(){
  const [loading,setLoading] = useState(true);
  const [movies,setMovies] = useState([]);
  const getMovies = async()=>{
    const response =await( await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year")).json()
    console.log(response)
    const data = response.data;
    setMovies(data.movies)
    setLoading(false)
  }
  useEffect(()=>{
    getMovies()
  },[]);
  return (
    <div>
    <h1>the Coins!</h1>
    {loading ? <strong>Loading...</strong>:null}
    <ul>
    {movies.map((item,index)=>{
      return <Movie title={item.title} medium_cover_image={item.medium_cover_image} summary={item.summary} genres={item.genres}/>
    })}
    </ul>
  </div>
  )
}

export default HomeScreen