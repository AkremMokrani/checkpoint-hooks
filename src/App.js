import React , {useState} from 'react'
import "./App.css"
import MainNavbar from './Components/MainNavbar/MainNavbar'
import MoviesData from './Components/MoviesData/MoviesData'
import MoviesList from './Components/MoviesList/MoviesList'
import AddMovie from "./Components/AddMovie/AddMovie"
const App = () => {
  const [titleSearch , setTitleSearch]=useState('')
  const handleTitle = (input)=>{
    setTitleSearch(input)
  }

  const [ratingSearch , setRatingSearch]=useState(0)
  const handleStar = (input)=>{
   setRatingSearch(input)
  }

  const[data , setData] =useState(MoviesData)
  const getData=(input)=>{
    setData([...data , input ])
  }


  return (
    <div className="App">
      <div>
        <MainNavbar
        handleTitle={handleTitle}
        handleStar={handleStar} />
      </div>
      <div>
        <AddMovie
        getData={getData} />
      </div>
      <div>
        <MoviesList
        data={data}
        titleSearch={titleSearch} 
        ratingSearch={ratingSearch} />
      </div>
    </div>
  )
}

export default App
