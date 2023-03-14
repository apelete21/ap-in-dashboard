import React, { useEffect, useRef } from "react";
import JobEditor from "../components/TextEditor";

export default function AddNewJob() {

    const details = useRef()

    useEffect(()=> {
        console.log(details.current?.value)
    }, [details])
    
    return (
        <>
            <div className="add-new-job">
                <div className="add-new-job-title">
                    <h1>Add a new job</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc vulputate libero et velit interdum, ac aliquet odio
                        mattis. ipsum dolor.
                    </p>
                </div>

                <div className="add-new-job-form">
                    <form action="">
                        <div className="input-job-element">
                            <p className="input-element-title">Job title</p>
                            <input type="text" placeholder="Job title" />
                        </div>
                        <div className="input-job-element">
                            <p className="input-element-title">
                                Select a category
                            </p>
                            <select name="" id="">
                                <option value="" default>
                                    Select a category
                                </option>
                            </select>
                        </div>
                        <div className="input-job-element">
                            <p className="input-element-title">
                                Employment type
                            </p>
                            <select name="" id="">
                                <option value="" default>
                                    Select a type
                                </option>
                            </select>
                        </div>
                        <div className="input-job-element">
                            <p className="input-element-title">
                                Seniority Level
                            </p>
                            <select name="" id="">
                                <option value="" default>
                                    Select a type
                                </option>
                            </select>
                        </div>
                        <div className="input-job-element">
                            <p className="input-element-title">Validity</p>
                            <select name="" id="">
                                <option value="" default>
                                    Select a type
                                </option>
                            </select>
                        </div>
                        <div className="input-job-element">
                            <p className="input-element-title">
                                Job description
                            </p>
                            <JobEditor ref={details} />
                        </div>
                    </form>
                </div>

                <div className="add-job-btn">
                    <a className="btn btn_secondary">
                        <span>Publish</span>
                    </a>
                </div>
            </div>
        </>
    );
}
