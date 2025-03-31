import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AiOutlineLoading } from "react-icons/ai";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { toast } from 'react-toastify';
import instance from "../../api/axios"
import "./Login.css"

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passwordVisible, setPasswordVisible] = useState(false)
    const [isloading, setIsLoading] = useState(false)

    function submitForm(e) {
        e.preventDefault();

        setIsLoading(true);
        instance.post("/auth/login", {
            username,
            password
        })
            .then(response => {
                if (response.data.token) {
                    console.log(response.data)

                    setIsLoading(false);
                    toast.success("Success");
                    navigate("/admin");
                    dispatch({ type: "LOGIN", payload: response.data });
                }
            })
            .catch(err => {
                console.log(err);
                toast.error(err.response?.data?.message || "An error occurred");
                setIsLoading(false);
            });
        setUsername("");
        setPassword("");
    }

    useEffect(() => {
        const token = localStorage.getItem("admin-auth-token");
        if (localStorage.getItem("admin-auth-token")) {
            navigate("/admin");
        }
    }, []); // Runs only once when the component mounts


    return (
        <div className='admin'>
            <div className="container">
                <div className="flex">
                    <div className="inputs wrapper">
                        <h1>Login</h1>
                        <form className='admin-form' onSubmit={submitForm}>
                            <input value={username} type="text" placeholder='Enter Username' className='username-input' onChange={(e) => setUsername(e.target.value)} required />
                            <div className='flex password-wrapper'>
                                <input value={password} type={passwordVisible ? "text" : "password"} placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} required />
                                {passwordVisible ? <FaEyeSlash onClick={() => setPasswordVisible(false)} /> : <FaEye onClick={() => setPasswordVisible(true)} />}
                            </div>
                            <button disabled={isloading ? true : false} className='submit-btn'>
                                {isloading ? <AiOutlineLoading className='loading-spin' /> : "Login"}
                            </button>
                        </form>
                    </div>
                    <img src="https://midoshriks-school.netlify.app/assets/sing/imgs/login-form-img.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Login
