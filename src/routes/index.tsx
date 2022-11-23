import {Routes, Route} from "react-router-dom";
import SinglePage from "../pages/single";
import HomePage from "../pages/home";


export const Router = () => {

    return(
        <Routes>
            <Route path="/home" element={<HomePage />}/>
            <Route path="/single" element={<SinglePage />}/>
        </Routes>
    )
}

export default Router;