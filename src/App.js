import { Routes, Route } from "react-router-dom";
import NewsHome from "./component2/NewsHome";
import Header from "./layout/Header";

//App.js의 역할 : 라우터
const App = () => {
    return (
        <Routes>
            <Route element= {<Header/>}>
                <Route path="/" element={<NewsHome/>}/>
                <Route path="/:category" element={<NewsHome/>}/>
            </Route>    
        </Routes>
    )
}

export default App;