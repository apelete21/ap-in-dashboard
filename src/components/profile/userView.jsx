import React from 'react'
import { imgUrl } from '../../requests/article'
import { teams } from '../../service/icons'
import moment from 'moment/moment'

export default function UserView(props) {
    return (
        <div className='user-datas pwd-update' style={{ zIndex: 10000000, position: "fixed", top: 0, left: 0, width: "100%", height: "100vh" }}>
            <div style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: -1,
                background: "#0000"
            }} onClick={props.close} />
            <div>
                <div className='h-section'>
                    <div className="profile-image">
                        <img src={props?.item?.profile ? imgUrl + "/" + props?.item?.profile : teams.feikandine} alt="profile" />
                    </div>
                    <div>
                        <h2>{props?.item?.fullName}</h2>
                        <p>{props?.item?.email}</p>
                    </div>
                </div>
                <br />
                <div className='h-section'>
                    <div className="">
                        <h2>Country</h2>
                        <p>{props?.item?.country}</p>
                    </div>
                    <div>
                        <h2>Member till</h2>
                        <p>{moment(props?.item?.createdAt).calendar()}</p>
                    </div>
                    <div className="">
                        <h2>Role</h2>
                        <p>{props?.item?.role}</p>
                    </div>
                </div>
                <br />
                <div className='h-section'>
                    <div className="">
                        <h2>Address</h2>
                        <p>{props?.item?.address}</p>
                    </div>
                    <br />
                    <div>
                        <h2>Phone number</h2>
                        <p>{props?.item?.phone_number}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
