function Login() {
    return(
        <div className="signCard">
            <div className="signUp">
                <h1>Log in</h1>
            </div>
            <div className="signForm">
                <input placeholder="Email"></input>
                <input placeholder="Password"></input>
                <br/>
                <button>Send</button>
            </div>
            <br/>
            <p>Or sign up if you don`t have an account!</p>

        </div>
    )
}

export {
    Login
}