import Home from "./pages/home"
import Russia from "./pages/Russia"
import English from "./pages/English"

import { ENGLISH_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE, RUSSIA_ROUTE, UZBEK_ROUTE } from "./ulits/const"
import loginMain from "./Login/loginMain"
import RegisMain from    "./Registration/RegisMain"

export const publicRoutes = [
    {
        path: UZBEK_ROUTE,
        Component: Home
    },
    {
        path: RUSSIA_ROUTE,
        Component: Russia
    },
    {
        path: ENGLISH_ROUTE,
        Component: English
    },
    {
        path: LOGIN_ROUTE,
        Component: loginMain
    },
    {
        path: REGISTER_ROUTE,
        Component: RegisMain
    },
]