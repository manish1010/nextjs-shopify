"use client"
import { useState } from "react"

import {logIn,logOut } from "@/redux/features/authSlice";
import { useDispatch } from "react-redux";

export default function LogIn() {
    const [userName, setUsername] = useState("");

    const dispatch = useDispatch();

    const onClickLogin = () => { 
        dispatch(logIn(userName));
    };

    const onClickToggle = () => { };

    const onClickLogout = () => { };

    return(
         <div>
            <input type="text" onChange={(e)=>setUsername(e.target.value)}/>
            <br/><br/>
            <button onClick={onClickLogin}>Log in</button>
            <br/><br/>
            <button>Log out</button>

         </div>
    )
}
