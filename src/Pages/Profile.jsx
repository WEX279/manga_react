import cuenta from "../../Assets/cuenta.png"
import { LoadAccount } from "../Components/Atoms/Account"

function Profile() {

    return(
        <div className="bg-Dark light:bg-Light text-Light light:text-Dark h-screen">
            <div className="flex">
                <div>

                <h1 className=" flex justify-center font-bold text-[3em] p-7">Profile</h1>
                <section className="p-5 w-72">
                    <img src={cuenta}/>
                </section>
                </div>
                <LoadAccount/>
            </div>
        </div>
    )
}

export{
    Profile
}