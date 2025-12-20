import { createContext } from "react";
import axios from "axios"
import { useState, useEffect } from "react";
import Cookies from 'universal-cookie';



const AppContext = createContext();



const AppContextProvider = (props) =>{
    const cookies = new Cookies();
    const [token, setToken ] = useState(cookies.get('user_token') ? cookies.get('user_token') : false);
    const [tempToken, setTempToken ] = useState(cookies.get('tempToken') ? cookies.get('tempToken') : false);
    const [adminToken, setAdminToken ] = useState(cookies.get('admin_token') ? cookies.get('admin_token') : false);



    const value = {
        token,
        setToken,
        tempToken, 
        setTempToken ,
        adminToken, 
        setAdminToken 
    };

    return(
        <AppContext.Provider value={value}>
            {props?.children}
        </AppContext.Provider>
    )
}

export {AppContextProvider, AppContext};