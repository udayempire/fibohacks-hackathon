import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../Components/ui/Button";
import { Input } from "../Components/Input";
import { useDispatch } from "react-redux";
import { userLogin } from "../store/Action/Auth";
import { useNavigate } from "react-router-dom";

export const Signin = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };
const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault();
           dispatch(userLogin(formData))     
    };

    return (
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 w-screen h-screen bg-zinc-50">
            {/* Side Panel */}
            <div className="hidden md:block bg-cover bg-center h-full bg-blue-950">
                <div className="w-full h-full justify-center items-center flex flex-col p-20">
                    <p className="text-3xl text-white font-semibold">
                        Discover tailored events.
                        Sign up for personalized recommendations today!
                    </p>
                </div>
            </div>
            {/* Right Panel */}
            <div className="flex flex-col w-full h-full justify-center items-center gap-4">
                <div>
                    <h1 className="font-bold text-3xl text-center">Login to Account</h1>
                    <h3 className="font-medium text-slate-500 p-2 w-full max-w-sm">
                        Already have an Account?
                        <Link className="underline cursor-pointer hover:text-blue-700" to="/signup"> Sign Up</Link>
                    </h3>
                </div>
                <Button type="button" variant="default" className="grid w-full max-w-xs md:max-w-sm" text="Signup with Google">
                    <div className="flex"></div>
                    <img src="google.svg" className="w-5" alt="" />
                </Button>
                <Button type="button" variant="default" className="grid w-full max-w-xs md:max-w-sm" text="Signup with Facebook" />

                {/* OR Divider */}
                <div className="flex items-center">
                    <hr className="flex-grow border-gray-300" />
                    <span className="mx-4 text-gray-400">OR</span>
                    <hr className="flex-grow border-gray-800" />
                </div>

                {/* Input Fields */}
                <div className="grid w-full max-w-xs md:max-w-sm items-center gap-2.5">
                    {/* <Input
                        label="Full Name"
                        id="full-name"
                        name="fullName"
                        placeholder="Enter your Name"
                        onChange={handleChange}
                    /> */}
                    <Input
                        label="Email"
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter Your Email"
                        onChange={handleChange}
                    />
                    <Input
                        label="Password"
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter Your Password"
                        onChange={handleChange}
                    />
                </div>

                <Button text="Signin" type="submit" variant="dark" className="grid w-full max-w-xs md:max-w-sm"
                 onClick={()=>{
                    navigate("/")
                }} 
                />
                <p className="w-full max-w-xs md:max-w-lg text-center text-sm pt-5">
                    Click “Sign in” to agree to our <span className="underline underline-offset-2 cursor-pointer">Terms of Service</span> and acknowledge that our <span className="underline underline-offset-2 cursor-pointer">Privacy Policy</span> applies to you.
                </p>
            </div>
        </form>
    );
};