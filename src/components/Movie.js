import PropTypes from "prop-types"
import styles from "./Movie.module.css"

import {Link} from "react-router-dom"


function Movie({title,medium_cover_image,summary,genres}){
  return (
    <div>
      <img src={medium_cover_image} alt=""/>
      <h2>
        <Link to="/movie">{title}</Link>
        </h2>
      <p>{summary}</p>
      <ul>
        {genres&&genres.map((g)=>{
          return <li key={g}>{g}</li>
        })}
      </ul>
    </div>
  )
}

Movie.propTypes = {
  title : PropTypes.string.isRequired,
  medium_cover_image : PropTypes.string.isRequired,
  summary : PropTypes.string.isRequired,
  genres : PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie