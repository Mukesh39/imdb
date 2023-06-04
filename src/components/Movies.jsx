import React from 'react';
import maya from '../assets/maya.webp';


const Movies = () => {
  return (
    <div className='mt-8'>  
     <div className=' mb-8 font-bold text-2xl text-center  '>Trendings</div>
     
     
     <div className='flex justify-center  flex-wrap	'> 

     <img className='w-[150px] h-[30vh]  rounded-xl m-4 hover:scale-110 duration-300' src={maya}  />
     <img className='w-[150px] h-[30vh]  rounded-xl m-4 hover:scale-110 duration-300' src={maya}  />
     <img className='w-[150px] h-[30vh]  rounded-xl m-4 hover:scale-110 duration-300' src={maya}  />
     <img className='w-[150px] h-[30vh]  rounded-xl m-4 hover:scale-110 duration-300' src={maya}  />
     <img className='w-[150px] h-[30vh]  rounded-xl m-4 hover:scale-110 duration-300' src={maya}  />
     
     
      </div>
    
    
    </div>
  )
}

export default Movies