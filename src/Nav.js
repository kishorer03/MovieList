export default function Nav({setMovieSelect,setIsLoading,query,setQuery,children,setStateMovieList,setError}){
    
    return(
        <nav className="flex justify-between p-[20px] bg-purple-900">
            <p className="text-white font-bold">MOVIE_WATCHLIST</p>
            <div>
            <input className=" p-[2px] rounded-md w-[400px]" type="text" value={query} onChange={(e)=>setQuery(e.target.value)} ></input>
            {query.length>0 &&<button className="ml-[10px] underline underline-offset-4 text-white"
            onClick={()=>{
                setMovieSelect(null)
                setStateMovieList([])
                setQuery("")
                setIsLoading(false)
                setError(null)
                }}>CLEAR</button>}
            </div>
            {children}
        </nav>
    )
}