import { useEffect,useState } from "react";
import Nav from "./Nav";
import Box from "./Box";
import MovieList from "./MovieBox";
import WatchSummary from "./WatchSummary";
import MovieSummary from "./MovieSummary";
import MovieSelected from "./MovieSelect";
import Loader from "./Loader";
import Errorr from "./Error";



const key="e04adb3c";
export default function App(){

    const [query,setQuery]=useState("")
    const [stateMovieList,setStateMovieList]=useState([]);
    const [stateMovieSummary,setStateMovieSummary]=useState([]);
    const [isLoading,setIsLoading]=useState(false);
    const [error,setError]=useState(null);
    const [movieSelect,setMovieSelect]=useState(null);

    let avgImbdRate=0;
    let avgUserRate=0;
    let avgRunTime=0;
    for(let i=0;i<stateMovieSummary.length;i++){
        avgImbdRate+=Number(stateMovieSummary[i].imdbRating);
        avgUserRate+=Number(stateMovieSummary[i].userRating);
        avgRunTime+=stateMovieSummary[i].runtime;
    }

    avgImbdRate/=stateMovieSummary.length;
    avgUserRate/=stateMovieSummary.length;
    avgRunTime/=stateMovieSummary.length;
    
    avgImbdRate=avgImbdRate.toFixed(2);
    avgUserRate=avgUserRate.toFixed(2);
    avgRunTime=avgRunTime.toFixed(0);

    useEffect(()=>{
        
        const controller=new AbortController();
        async function fetchme(){
            
            setError("")
            setIsLoading(true);
            try{
            const res=await fetch(`https://www.omdbapi.com/?apikey=${key}&s=${query}`,{signal:controller.signal});
            const data=await res.json();
            if(data.Response==='False'){
                throw new Error("NO MOVIE FOUND IN THE DB");
            }
            setMovieSelect(null)
            setStateMovieList(data.Search);
            setIsLoading(false);
            }catch(e){
                if(e.name!=="AbortError")
                {
                    setError(e.message)
                }
                
            }
        }
        if(query.length>2){
            fetchme();
            return function(){
                controller.abort();
            } 
        }
        setIsLoading(false);
        setError(null)
        setStateMovieList([])              
    },[query])
    
    useEffect(()=>{
        if(!movieSelect){
            document.title=`WATCH LIST`;
        }
    },[movieSelect])
   
    return(
        <div className="bg-gray-800 w-full min-h-screen pb-[40px]">
            <Nav setMovieSelect={setMovieSelect} setIsLoading={setIsLoading} query={query} setQuery={setQuery} setError={setError} setStateMovieList={setStateMovieList} >
            <p className="text-white font-bold">{query.length>0?`Found ${stateMovieList.length} movies`:"Search for Movies"}</p>
            </Nav>
            <Main>
                <Box>
                    {error?<Errorr err={error}/>:isLoading?<Loader />:<MovieList setMovieSelect={setMovieSelect} stateMovieList={stateMovieList}/>}
                </Box>
                <Box>
                    {movieSelect?<MovieSelected stateMovieSummary={stateMovieSummary} setStateMovieSummary={setStateMovieSummary} key={movieSelect}  movieSelect={movieSelect} setMovieSelect={setMovieSelect}
                    />:<><WatchSummary stateMovieSummary={stateMovieSummary} avgImbdRate={avgImbdRate}
                        avgUserRate={avgUserRate} avgRunTime={avgRunTime}/>
                    <MovieSummary setMovieSelect={setMovieSelect} key={stateMovieSummary.length} stateMovieSummary={stateMovieSummary} />
                    </>}
                    
                </Box>
                
            </Main>
        </div>
        
    )
}
  

function Main({children}){
    return(
        <div className="flex justify-evenly mt-[25px]">
            {children}
        </div>
    )
}
