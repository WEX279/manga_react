function TextViewer(){
    function form() {
        
    }
    return(
        <div>
            <input type="text" placeholder="Escribe" onSubmit={form}/>
            <p id="ShowTxt"></p>
        </div>
    )
}

export {
    TextViewer
}