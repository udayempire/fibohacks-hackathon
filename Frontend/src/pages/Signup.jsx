import { Link } from "react-router-dom";
import { Button } from "../Components/ui/Button";
import { Input } from "../Components/ui/Input";
export const Signup = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 w-screen h-screen bg-zinc-50">
            {/*right*/}
            <div className="flex flex-col w-full h-full justify-center items-center gap-4">
                <div>
                    <h1 className="font-bold text-3xl text-center">Create Account </h1>
                    <h3 className="font-medium text-slate-500 p-2 w-full max-w-sm">
                        Already have an Account?
                        <Link className="underline cursor-pointer hover:text-blue-700" to="/signin"> Sign In</Link>
                    </h3>
                </div>
                <Button type="button" variant="default" className="grid w-full max-w-xs md:max-w-sm" text="Signup with Google">
                    <div className="flex"></div>
                    <img src="google.svg" className="w-5" alt="" />
                    p
                </Button>
                <Button type="button" variant="default" className="grid w-full max-w-xs md:max-w-sm" text="Signup with Facebook" />

                {/*or*/}
                <div className="flex items-center">
                    <hr className="flex-grow border-gray-300" />
                    <span className="mx-4 text-gray-400">OR</span>
                    <hr className="flex-grow border-gray-800" />
                </div>

                {/*Input Fields*/}
                <div className="grid w-full max-w-xs md:max-w-sm items-center gap-2.5">
                    <Input label="Full Name" id="full-name" placeholder="Enter your Name" />
                    <Input label="Email" type="email" id="email" placeholder="Enter Your Email" />
                    <Input label="Password" type="password" id="password" placeholder="Enter Your Password" />
                </div>

                <Button text="Create Account" variant="dark" className="grid w-full max-w-xs md:max-w-sm" />
                <p className="w-full max-w-xs md:max-w-lg text-center text-sm pt-5">
                    Click “Sign up” to agree to our <span className="underline underline-offset-2 cursor-pointer">Terms of Service </span> and acknowledge that our <span className="underline underline-offset-2 cursor-pointer">Privacy Policy</span> applies to you.
                </p>
            </div>

            {/*Side Panel*/}
            <div className="hidden md:block bg-cover bg-center h-full bg-blue-950">
                <div className="w-full h-full justify-center items-center flex flex-col p-20">
                    <p className="text-3xl text-white font-semibold">
                        Discover tailored events.
                        Sign up for personalized recommendations today!</p>
                    {/*side panel */}
                </div>
            </div>
        </div>
    );
};
