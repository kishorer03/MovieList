// import { useState } from "react";

import { useState } from "react"



// export default function ReusableStar({size=48,color='#000',message=[],count=5}){
//     const [rating,setRating]=useState(0);
//     const [tempRating,setTempRating]=useState(0);
//     return( 
//         <>
//     <div className="flex items-center">
//         {Array.from({length:count},(_,i)=>(
//             <Star key={i} index={i} setTempRating={setTempRating} setRating={setRating} 
//             full={tempRating?i<=tempRating-1:i<=rating-1} size={size} color={color}/>
//         ))}
//         <p className="pl-[30px]">{message.length===count?tempRating?message[tempRating-1]:rating?message[rating-1]:"":tempRating||rating||""}</p>
//     </div>
//     <button onClick={()=>setRating(0)}>CLEAR</button>
//     </>

//     )
// }

// function Star({index,setRating,setTempRating,full,size,color}){
//     let obj={height:`${size}px`,
//     width:`${size}px`}
//     return(
//         <span role="button" style={obj} onClick={()=>setRating(index+1)} 
//         onMouseEnter={()=>setTempRating(index+1)} onMouseLeave={()=>setTempRating(0)}>
//         {full?
//         <svg
//         xmlns="http://www.w3.org/2000/svg"
//         viewBox="0 0 20 20"
//         fill={color}
//         stroke={color}
//       >
//         <path
//           d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
//         />
//       </svg> :
//       <svg
//       xmlns="http://www.w3.org/2000/svg"
//       fill="none"
//       viewBox="0 0 24 24"
//       stroke={color}
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth="{2}"
//         d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
//       />
//     </svg>
// }
//       </span>
//     )
// }


export default function ReusableStar({totalStars=10,filledStar=0,rating,setRating}){
  const size=30;
  const[tempRating,setTempRating]=useState(0);

  return(
    <div className="flex items-center">
      {Array.from({length:totalStars},(_,i)=>{
        return(
           <Star key={i} size={size} rating={rating} setRating={setRating} tempRating={tempRating} setTempRating={setTempRating} index={i}/>
        )
      }
      )}
      <p className="ml-[10px] text-yellow-500">{tempRating?tempRating<10?`0${tempRating}`:tempRating:rating?rating<10?`0${rating}`:rating:null}</p>
    </div>
  )
}

function Star({setTempRating,index,tempRating,setRating,rating,size}){
  let rate=tempRating?tempRating:rating;
  return(
    <span className={`w-[30px] h-[30px]`} onClick={()=>{setRating(index+1)}} onMouseEnter={()=>setTempRating(index+1)} onMouseLeave={()=>setTempRating(0)}>
      {/* <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 20 20"
  fill="#FFD700"
  stroke="#FFD700"
>
  <path
    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
  />
</svg> */}
{index<=rate-1?
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 20 20"
  fill="#FFD700"
  stroke="#FFD700"
>
  <path
    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
  />
</svg>:<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  stroke="#FFD700"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="{2}"
    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
  />
</svg>}

    </span>
  )
}


/*
FULL STAR

<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 20 20"
  fill="#000"
  stroke="#000"
>
  <path
    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
  />
</svg>


EMPTY STAR

<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  stroke="#000"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="{2}"
    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
  />
</svg>

*/