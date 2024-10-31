import '../App.css'
const Home = ()=>{
    const handleSubmit = (event) =>{
        event.preventDefault();
    }
    return(
        <div className='form-container'>
            <h1 className="signup">Sign-up form</h1>
            <form className='form'>
                <label> Enter your name : 
                    <input type = "text"/>
                </label>
                <button className='submit-button'>Submit</button>
            </form>
        </div>
    )
}

export default Home;