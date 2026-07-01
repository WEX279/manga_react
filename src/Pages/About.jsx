function About(){
    return(
        <div className="bg-Dark light:bg-Light text-Light light:text-Dark h-screen">
            <section className="p-7">
                <h1 className="font-bold text-[3em] ">About Us!</h1>
                <p>MangaSync  es un proyecto académico llevado a cabo con el fin de practicar el desarrollo de Frontend con react así cómo lidiar con peticiones de usuarios conectando con nuestro propio backend</p>
                <br/>
                <p>Esta página web está diseñada para gestionar mangas y usuarios, permitiendo que estos puedan visitar los mangas que deseen siempre y cuando tengan una cuenta. La web permite crear cuentas de usuario, iniciar sesión de forma segura, y revisar tarjetas con información de los mangas.</p>
                <br/>
                <p>El proyecto está enfocado en el desarrollo frontend utilizando React, Vite y Tailwind</p>
            </section>
        </div>
    )
}

export{
    About
}