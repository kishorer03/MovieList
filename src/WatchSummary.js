export default function WatchSummary({stateMovieSummary,avgImbdRate,avgUserRate,avgRunTime}){
    return(
        <div className="h-[70px] w-[350px] bg-gray-500 text-white text-center rounded-t-md text-sm font-serif font-bold shadow-lg">
            {stateMovieSummary.length? <>
           <p className=" pt-[10px]">MOVIES YOU WATCHED</p>
           <p className="mt-[10px]">#️⃣{stateMovieSummary.length}<span className="pl-[15px]">⭐ {avgImbdRate}</span> <span className="pl-[15px]">🌟 {avgUserRate}</span> <span className="pl-[15px]">⌛{avgRunTime}min</span></p> 
           </>:
           <p className=" px-[30px] pt-[15px] ">ADD SOME MOVIES TO YOUR WATCHLIST</p>
           }
           
        </div>
    )
}