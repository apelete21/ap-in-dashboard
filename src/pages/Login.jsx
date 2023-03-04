import React from 'react'

export default function Login() {
    return (
        <>
            <div className="body_wrapper login_page">
                <div className="img_container">

                </div>
                <div className="main_content">
                    <div className="logo_box">
                        <img className="logo" src="../assets/media/images/logo/logo-dark.png" alt="" />
                    </div>
                    <div className="login_form_container">
                        <div className="form_intro">
                            <h1>Login</h1>
                            <p>Enter your credentials to access your administration dashboard</p>
                        </div>
                        <form action="">
                            <div className="input-job-element">
                                <input type="text" placeholder="Identifer" />
                            </div>

                            <div className="input-job-element">
                                <input type="text" placeholder="Password" />
                            </div>

                            <input className="btn btn_secondary  submit_btn" type="submit" value="Login" />
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
