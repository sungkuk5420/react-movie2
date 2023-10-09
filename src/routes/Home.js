import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";

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
    <div className={styles.container}>
    {loading ? <strong>Loading...</strong>:null}
    <div className={styles.movies}>
    {movies.map((item,index)=>{
      return <Movie id={item.id} title={item.title} coverImg={item.medium_cover_image} summary={item.summary} genres={item.genres}/>
    })}
    </div>
  </div>
  )
}

export default HomeScreen