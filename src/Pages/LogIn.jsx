import { Form } from "../Components/Atoms/LogSign/Form"

function Login(){
    return (
        <div className="flex justify-center items-center h-screen bg-black">
            <section className="flex flex-col border-white rounded-2xl border justify-center content-center justify-self-center gap-1  w-100 h-100 p-[4em]">
                <Form LogSign={"LogIn"}/>
            </section>
        </div>
    )
}

export {
    Login
}