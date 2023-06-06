import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import img from "../../../assets/login/img.png";
import qrcode from "../../../assets/login/qr-code.png";
import { useAuth } from "../../../context/AuthProvider/AuthProvider";
import InputField from "../../../components/shared/Form/InputField";
import OAuthProvider from "../../../components/shared/Form/OAuthProvider";
import "./Login.css";

const Login = () => {
    const {
        register,
        formState: { errors, isSubmitSuccessful },
        handleSubmit,
    } = useForm();
    const [loginError, setLoginError] = useState("");
    const { loginWithEmailAndPassword, setLoading, setUser } = useAuth();
    const route = useNavigate();

    const handleLogin = (data) => {
        console.log(data);
        setLoginError("");

        const loginInfoData = {
            email: data.email,
            password: data.password,
        };
        axios
            .post(
                `${import.meta.env.VITE_SERVER_URI}/auth/login`,
                loginInfoData
            )
            .then((data) => {
                loginWithEmailAndPassword(
                    loginInfoData.email,
                    loginInfoData.password
                )
                    .then((result) => {
                        const user = result.user;
                        const userInfo = {
                            email: data?.data?.data?.user?.email,
                            name: data?.data?.data?.user?.username,
                            token: data?.data?.data?.user?.token,
                        };
                        toast.success("Login Successfully!");
                        setUser(user);

                        localStorage.setItem(
                            "userInfo",
                            JSON.stringify(userInfo)
                        );
                        route("/");
                        setLoading(false);
                    })
                    .catch((error) => {
                        console.log(error.message);
                        setLoginError(error.message);
                        toast.error("Login Failed!");
                        setLoading(false);
                    });
            })
            .catch(() => {
                toast.error("Login Failed!");
            });
    };
    console.log(isSubmitSuccessful);
    return (
        <div className="pb-10 bg-gradient-to-tr from-orange-100 from-20% via-orange-300 vai-35% to-gray-50 to-60%">
            <div className="container mx-auto pt-20 relative">
                <h1 className="title font-bold text-5xl text-secondary">
                    Nakam
                </h1>
                <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center mt-20">
                    <div className="flex flex-col gap-5">
                        <h2 className="font-bold text-4xl">
                            Sign In to Rechange Direct
                        </h2>
                        <p className="text-2xl">
                            If you don’t have an account You can{" "}
                            <Link to={"/register"} className="text-secondary">
                                Sign Up
                            </Link>{" "}
                        </p>
                        <img
                            className="w-[150px] h-[150px] p-5 border bg-white"
                            src={qrcode}
                            alt=""
                        />
                    </div>
                    <div className="mr-10  ">
                        <img className="animate-float" src={img} />
                    </div>

                    {/* form */}
                    <div className="w-96 sm:w-[100%] ">
                        <form action="" onSubmit={handleSubmit(handleLogin)}>
                            <InputField
                                type={"email"}
                                name={"email"}
                                errorMessagePattern={{
                                    required: "Email is required!",
                                }}
                                placeholderText={"Please Enter Email!"}
                                register={register}
                                error={errors.email}
                            />

                            <InputField
                                type={"password"}
                                name={"password"}
                                errorMessagePattern={{
                                    required: "Password is required",
                                    minLength: {
                                        value: 6,
                                        message:
                                            "Password must be 6 characters or long",
                                    },
                                }}
                                placeholderText={"Please Enter Password!"}
                                register={register}
                                error={errors.password}
                            />

                            <p className=" text-gray-400">
                                <Link>Recovery Password</Link>
                            </p>
                            {loginError && (
                                <p className="text-red-700">{loginError}</p>
                            )}

                            <button
                                disabled={isSubmitSuccessful}
                                className="bg-primary hover:bg-primary/80 transition-all w-[100%] text-white focus:outline-none font-semibold rounded-lg text-base py-4 my-4 text-center"
                                type="submit"
                            >
                                {isSubmitSuccessful ? "Logging" : "Login"}
                            </button>
                        </form>

                        <div className="relative flex py-5 items-center">
                            <div className="flex-grow border-t border-accent"></div>
                            <span className="flex-shrink mx-4 border-accent text-gray-400">
                                Or Continue with
                            </span>
                            <div className="flex-grow border-t border-accent"></div>
                        </div>

                        {/* O Auth Provider */}
                        <OAuthProvider />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
