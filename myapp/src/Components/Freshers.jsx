import React from "react";
import "./Freshers.css"
import { FaStar } from "react-icons/fa6";
import { IoCalendarClearOutline } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";

const Freshers=()=>{
    return(
        <div className="contaner">
            <div className="left">
                <div className="finance">
                <div className="senior1">
                    <div className="finance1">
                        <div className="senior">Senior Finance Executive Revenue To Record CA Freshers</div>
                        <div className="unacademy">Unacademy <a><FaStar /><a>3.0<a>1945 Reviews</a></a></a></div>
                        <div className="year"><IoCalendarClearOutline /><a>0 - 2 years<a>|<a>₹<a>Not Disclosed</a></a></a></a></div>
                        <div className="location"><SlLocationPin /><a>Bengaluru</a></div>
                    </div>
                    <div className="img">
                        <img src="https://play-lh.googleusercontent.com/DT0jm91vA_rOkxwatXhI4yVpjU4KI0augje6ZJGYxEyNjKvIhcQt8npiLHf5-ydclsqe"/>
                        <div className="send">Send me jobs like this</div>
                    </div>
                </div>
                <div className="box">
                    <div className="post">Posted: <b>17 days ago</b> <a>|<a>Openings: <b>2 </b>|<a>Applicants:<b>884</b></a></a></a></div>
                    <div className="register">Register to apply</div>
                    <div className="login">Login to apply</div>
                </div>
                </div>
                <div className="job"></div>
            </div>
        </div>
    )
}
export default Freshers;