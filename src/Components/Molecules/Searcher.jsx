import { Input } from "../Atoms/SearchInput"
import { SearchBtn } from "../Atoms/SearchBtn"

function Searcher(){
    return(
    <div className="rounded-2xl border ">
        <Input/>
        <SearchBtn/>
    </div>
    )
}

export{
    Searcher
}