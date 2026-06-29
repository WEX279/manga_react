import { Form } from "../Components/Atoms/LogSign/Form"
import { SwitchTheme } from "../Components/Molecules/ThemeSwitcher"

function SignUpForm(){
    return (
        <div className="flex justify-center items-center h-screen bg-Dark text-Dark light:bg-Light light:text-Dark">
            <section className="flex flex-col rounded-2xl border justify-center content-center justify-self-center gap-1  w-100 h-100 p-[3em] border-Light light:border-Dark">
                <Form LogSign={"SignUp"}/>
                <SwitchTheme/>
            </section >
        </div>
    )
}

export {
    SignUpForm
}