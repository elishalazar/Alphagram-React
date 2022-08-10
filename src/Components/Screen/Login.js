import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const Login = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const PostData = () => {
        ('POST', "/signup", JSON.stringify({
            name, email, password

        })).then(res => res.json())
            .then(data => {
                if (data.error) {
                    console.log(data);

                }
                else {
                    console.log(data);
                    setName('')

                }
            })
    }

    const [rightClass, setRightClass] = React.useState(true);
    return (
        <div className="App" >
            <div class={`${rightClass && "right-panel-active"} container`}
                id="containers">

                <div class="form-container sign-in-container">
                    <form action="#">
                        <h1>Sign in</h1>

                        <span>or use your account</span>

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
                                    label="Email"
                                    variant="outlined"
                                    type="email"
                                />
                                <TextField
                                    id="outlined-basic"
                                    label="Email"
                                    variant="outlined"
                                    type="password"
                                />

                            </Box>
                        </div>
                        <a href="#">Forgot your password?</a>
                        <button>Sign In</button>
                    </form>
                </div>
                <div class="form-container sign-up-container">
                    <form action="#">
                        <h1>Create Account</h1>
                        <span>or use your email for registration</span>

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
                                    label="Name"
                                    variant="outlined"
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <TextField
                                    id="outlined-basic"
                                    label="Email"
                                    variant="outlined"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <TextField
                                    id="outlined-basic"
                                    label="password"
                                    variant="outlined"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />


                            </Box>
                        </div>
                        <button
                            onClick={() => {
                                PostData();

                            }}
                        >Sign Up</button>
                    </form>
                </div>














                <div class="overlay-container">
                    <div class="overlay">

                        <div class="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start journey with us</p>
                            <button class="ghost" id="signUp"
                                onClick={() => {

                                    setRightClass(true)
                                }}
                            >
                                Sign Up
                            </button>
                        </div>
                        <div class="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>
                                To keep connected with us please login with your personal info
                            </p>
                            <button class="ghost" id="signIn"
                                onClick={() => setRightClass(false)}
                            >
                                Sign In
                            </button>
                        </div>

                    </div>
                </div>
            </div >
        </div >
    );
}
export default Login;