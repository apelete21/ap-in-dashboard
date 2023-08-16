import React, { useContext, useState } from 'react'
import { AppContext } from '../../Contexts/AppContext'
import { usersReqs } from '../../requests/users'
import { createPortal } from 'react-dom'
import { PromptPopUp } from '../template/elements/prompt'
import { LoadingComp } from '../loading'

export default function UpdatePwd(props) {

    const { setStatusMessage } = useContext(AppContext)

    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const [status, setstatus] = useState()
    const [prompt, setPrompt] = useState(false)
    const [pass, setPass] = useState({
        old_pass: "",
        new_pass: ""
    })

    const handleUserChange = (data) => {
        setPass({
            ...pass,
            ...data,
        })
    }

    const handleChPwd = async () => {
        setPrompt(false)
        setLoading(true)
        const { user, ok, message } = await usersReqs(pass, "pass");
        console.log({ user, ok, message })
        if (ok) {
            setstatus(true)
        } else {
            setStatusMessage(message ?? message);
            setError(message ?? message)
        }
        setLoading(false)
    }

    return (
        <>  {
            prompt ? createPortal(
                <PromptPopUp
                    action={handleChPwd}
                    setSubmitPrompt={setPrompt}
                />, document.body) : ""
        }
            <div className='user-datas pwd-update' style={{ zIndex: 10000000, position: "fixed", top: 0, left: 0, width: "100%", height: "100vh" }}>
                <div style={{
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    zIndex: -1,
                    background: "#0000"
                }} onClick={props.cancel} />
                {loading ? <> <LoadingComp scale={0.2} /></> : <>
                    {status ?
                        <>
                            
                            <div className="updater-button"
                                onClick={() => { }}
                                style={{ cursor: "pointer" }}
                            >
                                <span onClick={props?.cancel}
                                    style={{ color: "white", background: "#dc3635" }}
                                >Cancel</span>
                                <p className='ok-par'>Update success!</p>
                            </div>
                        </>
                        : <div className="">
                            <div className="user-data-item">
                                <h3>Old Password</h3>
                                <input
                                    type="password"
                                    placeholder={"*****************"}
                                    onChange={(e) => {
                                        handleUserChange({ old_pass: e?.target?.value });
                                    }}
                                />
                            </div>
                            <div className="user-data-item">
                                <h3>New Password</h3>
                                <input
                                    type="password"
                                    placeholder={"*****************"}
                                    onChange={(e) => {
                                        handleUserChange({ new_pass: e?.target?.value });
                                    }}
                                />
                            </div>
                            <div className="updater-button"
                                style={{ cursor: "pointer" }}
                            >
                                {status ? "" : <span onClick={() => {
                                    setPrompt(true)
                                }}
                                    style={{ color: "white" }}
                                >Submit</span>}
                                <span onClick={props?.cancel}
                                    style={{ color: "white", background: "#dc3635" }}
                                >Cancel</span>
                            </div>
                        </div>}
                </>}
            </div>
        </>
    )
}
