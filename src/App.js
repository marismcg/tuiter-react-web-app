import Labs from "./labs";
import Tuiter from "./tuiter";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import Assignment7 from "./labs/a7";
import ExploreComponent from "./tuiter/explore";
import HomeComponent from "./tuiter/home";

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route index
                           element={<Labs/>}/>
                    <Route path="/a7" element={<Assignment7/>}/>
                    <Route path="/tuiter"
                           element={<Tuiter/>}>
                        <Route index
                               element={<ExploreComponent/>}/>
                        <Route path="home"
                               element={<HomeComponent/>}/>
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}
export default App;