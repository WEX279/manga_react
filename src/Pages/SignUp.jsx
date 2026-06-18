function Signup() {
    return(
        <div className="signCard">
            <div className="signUp">
                <h1>Sign Up</h1>
            </div>
            <div className="signForm">
                <input placeholder="Email"></input>
                <input placeholder="Password"></input>
                <input placeholder="The same password"></input>
                <br/>
                <button>Send</button>
            </div>
            <br/>
            <p>Or log in if you already have an account!</p>

        </div>
    )
}

export {
    Signup
}