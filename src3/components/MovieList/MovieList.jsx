import React, { useEffect, useState } from 'react'
import './MovieList.css'
import Movie_Card from '../Movie_Card/Movie_Card'
import _ from 'lodash';
export default function MovieList() {
    const [movies, setMovies] = useState([]);
    const [FilterMovies, setFilterMovies] = useState([]);
    const [MinRating, setMinRating] = useState(0);
    const [sort, setSort] = useState({
        by:"default",
        order:"asc",
    });
    useEffect(()=>{
         fetchMovies()
    },[]);

    useEffect(() => {
        if(sort.by !== "default"){
            const sortMovies = _.orderBy(FilterMovies , [sort.by],[sort.order])
            setFilterMovies(sortMovies)
        }
    }, [sort]);
    const fetchMovies= async()=>{
const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=c77f9d67c434a43fd247c1372ffd6f27`);
    const data = await response.json()
    setMovies(data.results);
    setFilterMovies(data.results);
        }
        const handelFilter = (rate)=>{
            if(rate===MinRating){
                setMinRating(0)
                setFilterMovies(movies)
            }else{
                setMinRating(rate)
           const Filtred =  movies.filter(movie=>(movie.vote_average >= rate))
           setFilterMovies(Filtred) 
            }
        }

        const handleSort =(e)=>{
            const{name , value}=e.target;
            setSort((prev)=>({...prev,[name]:value}))
        }
        console.log(sort)
   

  return (
    <section className='movie_list'>
        <header className='movie_list_header'>
            <h2 className='movie_list_heading'>Popular 🔥</h2>
            <div className="movie_list_fs">
                <ul className='movie_filter'>
                    <li className={MinRating===8?"movie_filter_item active":"movie_filter_item " } onClick={()=>handelFilter(8)} >+8 Star</li>
                    <li className={MinRating===7?"movie_filter_item active":"movie_filter_item " } onClick={()=>handelFilter(7)}  >+7 Star</li>
                    <li className={MinRating===6?"movie_filter_item active":"movie_filter_item " } onClick={()=>handelFilter(6)} >+6 Star</li>
                </ul>



                <select name="by" id="" className="movie_sorting" onChange={handleSort} value={sort.by}>
                    <option value="default">SortBY</option>
                    <option value="release_date">Date</option>
                    <option value="vote_average">Rating</option>
                </select>
                <select name="order" id="" className="movie_sorting" onChange={handleSort} value={sort.order}>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descanfing</option>
                </select>
            </div>
        </header>



        <div className="movie_cards"> {
           FilterMovies && FilterMovies.map((movie)=>(
           <Movie_Card Key={movie.id} movie={movie}/>
        ))
            } </div>
    </section>
  )
}
