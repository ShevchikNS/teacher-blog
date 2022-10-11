import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import About from "../components/About";
import MainPage from "../components/MainPage";
import Portfolio from "../components/Portfolio";
import ForStudent from "../components/ForStudent";
import ForParents from "../components/ForParents";
import WebResources from "../components/WebResources";


const privateRoutes = [

    {path: '/signin', element: <SignIn/>, exact: true},
    {path: '/signup', element: <SignUp/>, exact: true}
]
const publicRoutes = [
    {path: '/webResources', element: <WebResources/>, exact: true},
    {path: '/forParents', element: <ForParents/>, exact: true},
    {path: '/forStudent', element: <ForStudent/>, exact: true},
    {path: '/portfolio', element: <Portfolio/>, exact: true},
    {path: '/', element: <MainPage/>, exact: true},
    {path: '/signin', element: <SignIn/>, exact: true},
    {path: '/signup', element: <SignUp/>, exact: true}
]
export  {privateRoutes, publicRoutes}

