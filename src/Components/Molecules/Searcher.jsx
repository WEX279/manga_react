import { Input } from "../Atoms/SearchInput"
import { SearchBtn } from "../Atoms/SearchBtn"

function Searcher(){
    return(
    <div className="rounded-2xl border bg-slate-200">
        <Input/>
        <SearchBtn/>
    </div>
    )
}

export{
    Searcher
}