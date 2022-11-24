import {Routes, Route} from "react-router-dom";
import SinglePage from "../pages/single";
import HomePage from "../pages/home";


export const Router = () => {

    return(
        <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/post/:id" element={<SinglePage />}/>
        </Routes>
    )
}

export default Router;