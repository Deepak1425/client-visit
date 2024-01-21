import React, { useState } from 'react'
import { NavLink, useNavigate} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import { sentOtpFunction } from "../../services/Apis";
import "../../styles/style.css"

const Login = () => {

    const [email, setEmail] = useState("");
    const navigate = useNavigate();
    



    
    const sendOtp = async (e) => {
        e.preventDefault();

        if (email === "") {
            toast.error("Enter Your Email !")
        } else if (!email.includes("@")) {
            toast.error("Enter Valid Email !")
        } 
        else {
            const data = {
                email: email
            }

            const response = await sentOtpFunction(data);
            
            if (response.status === 200) {
                
                navigate("/user/otp",{state:email})
            } else {
                toast.error(response.response.data.error);
            }

            console.log(response);
        }
    }

    return (
        <>
            <section>
                <div className="form_data">
                    <div className="form_heading">
                        <h1>Welcome Back, Log In</h1>
                        <p>Hi, we are you glad you are back. Please login.</p>
                    </div>
                    <form>
                        <div className="form_input">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="" onChange={(e) => setEmail(e.target.value)} placeholder='Enter Your Email Address' />
                        </div>
                        <button className='btn' onClick={sendOtp}>Login
                        
                        </button>
                        
                    </form>
                </div>
                <ToastContainer />
            </section>
        </>
    )
}

export default Login