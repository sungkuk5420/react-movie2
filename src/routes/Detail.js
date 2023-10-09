import { useEffect,useState } from "react";
import {useParams} from "react-router-dom";
import Movie from "../components/Movie"

function DetailScreen(){
  const [loading,setLoading] = useState(true);
  const [movie,setMovie] = useState(null);
  const {id }= useParams()
  console.log(id);

  const getMovie = async()=>{
    const {data} = await(await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json()
    console.log(data)
    setMovie(data.movie)
    setLoading(false)
  }

  useEffect(()=>{
    getMovie()
  },[])
  return (
    <div>
      <h1>Detail</h1>
      {loading ? <strong>Loading...</strong>:<Movie id={movie.id} title={movie.title} coverImg={movie.medium_cover_image} summary={movie.summary} genres={movie.genres}/>}
    </div>
    
  )
}

export default DetailScreen