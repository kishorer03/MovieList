
export default function MovieList({stateMovieList,setMovieSelect}){
    return (
        <ul className="flex flex-col">
            {stateMovieList.map((e)=><RenderMovieList e={e} setMovieSelect={setMovieSelect} key={e.imdbID}/>)}
        </ul>
    )
}

function RenderMovieList({e,setMovieSelect}){
    return(
        <li className="flex min-h-[70px] pl-[40px] py-[12px] border-b-[1px] items-center hover:cursor-pointer"
        onClick={()=>setMovieSelect((a)=>a===e.imdbID?null:e.imdbID)}>
                <div className="">
                <img className="w-[35px] h-[45px]" src={e.Poster} alt="img"/>
                </div>
                <div className="ml-[20px] font-bold">
                    <p>{e.Title}</p>
                    <p>📅 {e.Year}</p>
                </div>   
        </li>
    )
}