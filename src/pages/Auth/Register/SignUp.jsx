import axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import img from "../../../assets/SignUp/img.png";
import qrcode from "../../../assets/SignUp/qr-code.png";
import { useAuth } from "../../../context/AuthProvider/AuthProvider";
import InputField from "../../../components/shared/Form/InputField";
import OAuthProvider from "../../../components/shared/Form/OAuthProvider";
import "./SignUp.css";

const SignUp = () => {
    const {
        register,
        formState: { errors, isSubmitSuccessful },
        handleSubmit,
        reset,
    } = useForm();
    const { createUser, setLoading, setUser } = useAuth();
    const route = useNavigate();

    const handleLogin = (data) => {
        const userObject = {
            username: data.name,
            password: data.password,
            email: data.email,
        };
        axios
            .post(
                `${import.meta.env.VITE_SERVER_URI}/auth/register`,
                userObject
            )
            .then((data) => {
                const email = data?.data?.data?.user?.email;
                const token = data?.data?.data?.user?.token;

                createUser(email, userObject?.password)
                    .then((result) => {
                        setUser(result?.user);
                        const userInfo = {
                            name: data?.data?.data?.user?.username,
                            email: email,
                            token: token,
                        };
                        localStorage.setItem(
                            "userInfo",
                            JSON.stringify(userInfo)
                        );
                        reset();
                        toast.success("Register Successfully!");
                        route("/");
                        setLoading(false);
                    })
                    .catch((error) => {
                        setLoading(false);
                        console.log(error.message);
                    });
            });
    };

    return (
        <div className="pb-10 bg-gradient-to-tr from-orange-100 from-20% via-orange-300 vai-35% to-gray-50 to-60%">
            <div className="container mx-auto pt-20">
                <h1 className="title font-bold text-5xl text-secondary">
                    Nakam
                </h1>
                <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center mt-20">
                    <div className="flex flex-col gap-5">
                        <h2 className="font-bold text-4xl">
                            Sign Up to Rechage Direct
                        </h2>
                        <p className="text-2xl">
                            Already have an account You can{" "}
                            <Link to={"/login"} className="text-secondary">
                                Login
                            </Link>{" "}
                        </p>
                        <img
                            className="w-[150px] h-[150px] p-5 border bg-white"
                            src={qrcode}
                            alt=""
                        />
                    </div>
                    <div className="mr-10">
                        <img className="animate-float" src={img} />
                    </div>

                    {/* form */}
                    <div className="w-96  sm:w-[100%]">
                        <form action="" onSubmit={handleSubmit(handleLogin)}>
                            <InputField
                                type={"text"}
                                name={"name"}
                                errorMessagePattern={{
                                    required: "User Name is required!",
                                }}
                                placeholderText={"Please Enter Name!"}
                                register={register}
                                error={errors.name}
                            />

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
                                    required: "Password is required!",
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

                            <button
                                className="bg-primary hover:bg-primary/80 transition-all w-full text-white focus:outline-none font-semibold rounded-lg text-base py-4 my-4 text-center"
                                type="submit"
                            >
                                {isSubmitSuccessful ? "Signing" : "Sign Up"}
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

export default SignUp;
