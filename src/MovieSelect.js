import { useState,useEffect } from "react";
import ReusableStar from "./Reusable_star";
import Loader from "./Loader";

const key="e04adb3c";
export default function MovieSelected({stateMovieSummary,setStateMovieSummary,movieSelect,setMovieSelect}){
    const [d,setMovieDetails]=useState([]);
    const [isLoading,setIsLoading]=useState(false);

    let customRating=stateMovieSummary.filter((e)=>e.imdbID===movieSelect);
    const[rating,setRating]=useState(customRating.length?customRating[0].userRating:null);

    function handleEscape(){
        setMovieSelect(null);
    }
    
    function setStarFun(){
        setStateMovieSummary([...stateMovieSummary,{
            imdbID: movieSelect,
            Title: d.Title,
            Year: d.Year,
            Poster:d.Poster,
            runtime: parseInt(d.Runtime),
            imdbRating: d.imdbRating,
            userRating: rating,
          }])
        setMovieSelect(null)
    }

    function removeMovie(){
        setStateMovieSummary(stateMovieSummary.filter((e)=>e.imdbID!==movieSelect))
        setMovieSelect(null)
    }

    function updateStar(){
        setStateMovieSummary(stateMovieSummary.map((e)=>e.imdbID!==movieSelect?e:{...e,userRating:rating}))
        setMovieSelect(null)
    }

       
    useEffect(()=>{
        function callback(e){
            console.log("inside callback")
            if(e.code==="Escape"){
                handleEscape();
            }
        } 
        document.addEventListener("keydown",(e)=>{callback(e)})
        return function(){
            console.log("Executer end")
            document.removeEventListener('keydown',callback)
        }
    },[handleEscape])

    useEffect(()=>{
        async function getDetail() {
            setIsLoading(true);
            const res=await fetch(`https://www.omdbapi.com/?apikey=${key}&i=${movieSelect}`);
            const data=await res.json();
            setMovieDetails(data);
            setIsLoading(false);
        }
        getDetail();
    },[movieSelect])

    useEffect(function(){
        if(d.Title){
            document.title=`MOVIE | ${d.Title}`;
        }

    }
    ,[d])


    return(
        <div >
        <button className="top-[5px] left-[10px] flex items-center justify-center bg-white h-[25px] w-[25px] rounded-full absolute"
        onClick={()=>setMovieSelect(null)}>&larr;
        </button>
        
            {isLoading?<Loader />:
            <>
              <div className="flex justify-evenly mt-[50px] py-[15px] bg-gray-400">
            <img className="h-[100px] w-[80px]" src={d.Poster} alt="movie-poster"/>
            <div className="flex flex-col text-center gap-[5px]">
                <p className="font-bold text-xl">{d.Title}</p>
            <div className="flex justify-between">
                <p>{d.Released}</p>
                <p>{d.Runtime}</p>
                </div>
            <p>{d.Genre}</p>
            <p>imbd{` ${d.imdbRating} `}⭐</p>
            </div>
            </div>
            <div className="flex flex-col justify-center items-center mt-[30px]">
            <ReusableStar key={d.imdbID} rating={rating} setRating={setRating} size={30}/>
                <p className="px-[10px] text-justify mt-[20px]">{d.Plot}</p>
                {/* <div className="flex mt-[20px] px-[20px]"> */}
                {/* </div> */}
                <div className="mt-[20px]">
                    <p className="block text-center underline font-bold">Director</p>
                    <p className="block text-center">{d.Director}</p>
                </div>
                <div className="mt-[20px]">
                    <p className="block text-center underline font-bold">Cast</p>
                    <p className="block text-center">{d.Actors}</p>
                </div>
                
                
    
                {rating>0?!customRating.length?<button className="bg-black text-white  px-[10px] mt-[40px] py-[5px] rounded-full"
                onClick={setStarFun}>ADD TO LIST</button>:<button className="bg-black text-white mt-[40px] px-[10px] py-[5px] rounded-full"
                onClick={removeMovie}>REMOVE FROM LIST</button>:true}

                {customRating.length>0 && rating!==customRating[0].userRating && <button
                className="bg-black text-white  mt-[10px] px-[10px] py-[5px] rounded-full"
                onClick={updateStar}>Update</button>}
            </div>
            </>
            }
          
        
        
        </div>
    )
}