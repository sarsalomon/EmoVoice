import React from 'react'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Eng from '../screens/En/Eng.jsx'
import Rus from '../screens/Rus/Rus.jsx'
// import { Context } from '..'
// import Eng from '../English/eng'
/* import { publicRoutes } from '../routes' */
/* import { UZBEK_ROUTE } from '../ulits/const' */
import Uzb from "../screens/Uzb/Uzb.jsx"
import Login from './Auth/Login.jsx'
import Registration from './Auth/Registration.jsx'
// import Ru from '../Russia/ru'
// import LoginMain from '../Login/loginMain'
// import RegisMain from '../Registration/RegisMain'

const AppRouter = () =>{
    // const {user} = useContext(Context)
    // console.log(user)
    return(
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Uzb/>} exact/>
                <Route path={"/en"} element={<Eng/>} exact/>
                <Route path={"/ru"} element={<Rus/>} exact/>
                <Route path={"/login"}    element={<Login />}  exact/> 
                <Route path={"/regis"}    element={<Registration />}  exact/> 

            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter