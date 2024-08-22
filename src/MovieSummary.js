export default function MovieSummary({setMovieSelect,stateMovieSummary}){
    return (
        <>
        <ul>
            {stateMovieSummary.map((e)=><RenderMovieSummary setMovieSelect={setMovieSelect} e={e} key={e.imdbID}/>)}
        </ul>
        </>
        
    )
}

function RenderMovieSummary({e,setMovieSelect}){
    return(
        <li className="flex min-h-[70px] pl-[40px] items-center py-[12px] border-b-[1px] hover:cursor-pointer" onClick={()=>setMovieSelect(e.imdbID)}>
                <div className="">
                <img className="w-[35px] h-[45px]" src={e.Poster} alt="img"/>
                </div>
                <div className="ml-[20px] font-bold">
                    <p>{e.Title}</p>
                    <p>⭐ {e.imdbRating} <span className="pl-[15px]">🌟 {e.userRating}</span> <span className="pl-[15px]">⌛{e.runtime}min</span></p>
                </div>   
        </li>
    )
}