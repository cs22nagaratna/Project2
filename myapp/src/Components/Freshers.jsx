import React from "react";
import "./Freshers.css"
import { FaStar } from "react-icons/fa6";
import { IoCalendarClearOutline } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";

const Freshers=()=>{
    return(
        <div className="contaner">
            <div className="left">
                <div className="senior">
                    <div className="senior1">
                        <div className="finance">
                            <div className="record">Senior Finance Executive Revenue To Record CA Freshers</div>
                            <div className="academy">Unacademy <a><FaStar /></a><lable>3.0  |  1945 Reviews</lable></div>
                            <div className="years"><label><IoCalendarClearOutline/></label> 0 - 2 years <a>|</a><a> ₹ Not Disclosed</a></div>
                            <div className="location"><SlLocationPin /> Bengaluru</div>
                        </div>
                        <div className="img">
                            <div className="img1">
                                <img src="https://play-lh.googleusercontent.com/DT0jm91vA_rOkxwatXhI4yVpjU4KI0augje6ZJGYxEyNjKvIhcQt8npiLHf5-ydclsqe" alt="logo" />
                            </div>
                            <div className="send">Send me jobs like this</div>
                        </div>
                    </div>
                    <div className="post">
                        <div className="post1">
                            <div className="days">Posted: <b>17 days ago</b>  Openings: <b>2</b>  Application: <b>884</b></div>
                            <div className="rigister"></div>
                            <div className="login">Login to apply</div>
                        </div>
                    </div>
                </div>
                <div className="description"></div>
            </div>
            <div className="right">
                <div className="unacademy"></div>
                <div className="review"></div>
            </div>
        </div>
    )
}
export default Freshers;