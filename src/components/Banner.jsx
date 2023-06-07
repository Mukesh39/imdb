import React , { useEffect , useState } from 'react';
import axios from 'axios';
import { Oval } from 'react-loader-spinner' ; 
function Banner() {


  let [bannerMovie , setBanner] = useState("");


  useEffect(function(){


    (function () {
     axios.
     get('https://api.themoviedb.org/3/trending/all/week?language=en-US&api_key=c329e49ea66541c60669781b65c43433')
     .then((res)=>{
      console.log(res.data.results);
      setBanner(res.data.results[0])


     })
   }) () 
 } ,[])
   

  return (
    <>   

    {
        

      bannerMovie =="" ? <div className='flex justify-center'>  
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
      <div className= {`h-[40vh]  bg-center bg-cover  flex items-end  md:h-[60vh]`}
    
            style={{
              backgroundImage:`url(https://image.tmdb.org/t/p/original/t/p/original/${bannerMovie.backdrop_path})`
            }}    
            >

      <div className='text-xl text-white  bg-gray-900  bg-opacity-60 p-4 text-center w-full md:text-3xl'>
      {bannerMovie.title}
      </div>
      
      </div> 
    }

    </>

  ) 
}

export default Banner ;