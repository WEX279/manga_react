import { Chiikawa_sky } from "../../../Assets/Chiikawa_sky"
import { ReiCybercore } from "../../../Assets/ReiCybercore"
import { BookShelf } from "../../../Assets/BookShelf"
import { LordImOne } from "../../../Assets/LordImOne"

function Carrousel() {

    return(
        <div className="flex justify-center">
            <Chiikawa_sky/>
            <ReiCybercore/>
            <BookShelf/>
            <LordImOne/>
        </div>
    )
}

export {
    Carrousel
}