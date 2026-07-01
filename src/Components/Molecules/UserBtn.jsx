import { SignUpBtn } from "../Atoms/LogSign/SignUpBtn"
import { LogInBtn } from "../Atoms/LogSign/LogInBtn"
import { ProfileBtn } from "../Atoms/ProfileBtn"

function UserBtn() {
    const token = localStorage.getItem("token")

    if(!token){
        return(
            <div  className="flex gap-1 ">
                <LogInBtn/>
                <SignUpBtn/>
            </div>
        )
    } else{
        return(
            <div>
                <ProfileBtn/>
            </div>
        )
    }
    
}

export{
    UserBtn
}