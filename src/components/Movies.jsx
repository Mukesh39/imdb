import React, { useState , useEffect } from 'react';
import axios from 'axios';
import maya from '../assets/maya.webp';
import { Oval } from 'react-loader-spinner';




const Movies = () => {




  let [movies , setMovies] = useState([]);


  useEffect(function(){


    (function () {
     axios.
     get('https://api.themoviedb.org/3/trending/all/week?language=en-US&api_key=c329e49ea66541c60669781b65c43433&page=1')
     .then((res)=>{
      console.log(res.data.results);
      setMovies(res.data.results)


     })
   }) () 
 } ,[])
   







  return (

    <div className='mt-8'>  
     <div className=' mb-8 font-bold text-2xl text-center  '>Trendings</div>
     <div className='flex justify-center  flex-wrap '> 


 {

  movies.length == 0 ? <div className='flex justify-center'>  
  <Oval
 height="80"
 width="80"
 radius="9"
 color="gray"
 secondaryColor='gray'
 ariaLabel="loading"
 wrapperStyle
 wrapperClass
/>  </div> 
   : 

  movies.map((movie)=> { 
  
return ( 
    <div  key = {movie.id} className='flex justify-center  flex-wrap '> 
    <div className='w-[160px] h-[30vh] md:h-[40vh] md:w-[180px]  rounded-xl m-4 hover:scale-110 duration-300 border-4   
    bg-center
    bg-cover 
    flex items-end  relative' 
    
    style={{
      backgroundImage:`url(https://image.tmdb.org/t/p/original/t/p/original/${movie.poster_path})`
    }}  >

    <div className=' text-xl text-white  bg-gray-900 p-2 bg-opacity-100  text-center w-full  rounded-b-xl  font-bold'>
    {movie.title || movie.name}
    </div>

    </div>

    
      

</div>
 )

  })


 }  </div>



     

      
    
    </div>
  )
}

export default Movies ; 