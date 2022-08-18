import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from "react-router-dom";

const NewPassword = () => {
    const { token } = useParams()
    console.log(token, 'gfgfgfd');
    const [password, setPassword] = useState('')


    const Signin = (e) => {

        e.preventDefault()


        fetch("/newpassword", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                password, token
            })
        }).then(res => res.json())
            .then(data => {
                console.log(data, "fffefrew");
                if (data.error) {
                    toast.error({ html: data.error })
                }
                else {
                    toast.success({ html: data.message });
                    // history.push('/login')
                }


            }).catch(err => {
                console.log({ ...err })
            })

    }
    // ------------------Login function-------------------

    const Login = (e) => {

        e.preventDefault()



        fetch("/new-password", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({

                password,
                token
            })
        }).then(res => res.json())
            .then(data => {
                console.log(data, "fffefrew");
                if (data.error) {
                    toast.error({ html: data.error })
                }
                else {
                    toast.success({ html: data.message });
                    // history.push('/login')
                }


            }).catch(err => {
                console.log(err);
            })

    }



    const showToast = () => {

    };
    const [rightClass, setRightClass] = React.useState(true);









    return (
        <div className="App" >
            <ToastContainer />
            <div className={`${rightClass && "right-panel-active"} container`}
                id="containers">
                <div className="form-container sign-up-container">
                    <form action="#">
                        <h1 className="head">New Password</h1>
                        <span className="spin">or use new password for registration</span>

                        <div className="field">
                            <Box
                                component="form"
                                sx={{
                                    "& > :not(style)": { m: 1, width: "25ch" },
                                }}
                                noValidate
                                autoComplete="off"
                            >


                                <TextField
                                    id="outlined-basic"
                                    label="new password"
                                    variant="outlined"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />


                            </Box>
                        </div>
                        <button className="but"
                            onClick={(e) => {
                                Signin(e);
                            }}
                        >Save</button>

                    </form>
                </div>




                <div className="form-container sign-in-container">
                    <form action="#">
                        <h1 className="head">New Password</h1>

                        <span className="spin">or use your account</span>

                        <div className="field">
                            <Box
                                component="form"
                                sx={{
                                    "& > :not(style)": { m: 1, width: "25ch" },
                                }}
                                noValidate
                                autoComplete="off"
                            >

                                <TextField
                                    id="outlined-basic"
                                    label="new password"
                                    variant="outlined"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />

                            </Box>
                        </div>
                        <a href="#" className="anchor">Forgot your password?</a>
                        <button
                            className="but"
                            onClick={(e) => {
                                Login(e);
                                showToast();

                            }}

                        >Saved Password</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1 className="head">Welcome Back!</h1>
                            <p className="para">
                                To keep connected with us please login with your personal info
                            </p>
                            <button className="ghost but" id="signIn"
                                onClick={() => {

                                    setPassword("")
                                    setRightClass(false);
                                }}
                            >
                                Sign In
                            </button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1 className="head">Hello, Friend!</h1>
                            <p className="para">Enter your personal details and start journey with us</p>
                            <button className="ghost but" id="signUp"
                                onClick={() => {


                                    setPassword('')

                                    setRightClass(true)
                                }}
                            >
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
}

export default NewPassword