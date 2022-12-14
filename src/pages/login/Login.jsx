import { useState } from "react"
import "./login.scss"
const Login = () => {
    const [error, setError] = useState(false)
    const handleLogin = (e)=>{
        e.preventDefault()
    }
    return (
        <div className="login">
        <form action="" onSubmit={handleLogin}>
            <input type="email" name="" id="" placeholder="email" />
            <input type="password" placeholder="password" />
            <button type="submit">Login</button>
            { error && <span>Wrong Password Or Email!</span>}
        </form>
        </div>
    )
}
export default Login