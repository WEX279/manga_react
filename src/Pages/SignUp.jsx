import { Form } from "../Components/Atoms/LogSign/Form"

function Signup(){
    return (
        <div className="flex flex-col rounded-2xl border justify-center content-center justify-self-center gap-1  w-100 h-100 m-[3em]">
            <Form LogSign={"SignUp"}/>
        </div>
    )
}

export {
    Signup
}