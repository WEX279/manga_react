import { Form } from "../Components/Atoms/LogSign/Form";
import { SwitchTheme } from "../Components/Molecules/ThemeSwitcher";


function LoginForm() {
	return (
		<div className="flex justify-center items-center h-screen bg-slate-50 text-black dark:bg-slate-900">
            <section className="flex flex-col rounded-2xl border justify-center content-center justify-self-center gap-1  w-100 h-100 p-[3em] dark:border-white">
                <Form LogSign={"LogIn"} />
                <SwitchTheme/>
            </section>
        </div>
	);
}

export{
    LoginForm
}