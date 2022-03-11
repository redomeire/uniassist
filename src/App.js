import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import HomePage from "./pages/HomePage/HomePage";
import PostQuestion from "./pages/PostQuestion/PostQuestion";
import ReadQuestion from "./pages/ReadQuestion/ReadQuestion";
import SearchQuestion from "./pages/SearchQuestion/SearchQuestion";
import MyQuestions from "./pages/MyQuestions/MyQuestions";


function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route exact path="/homepage" element={<HomePage/>}/>
            <Route path="/homepage/postquestion" element={<PostQuestion/>}/>
            <Route path="/homepage/answerquestion" element={<SearchQuestion/>}/> {/*masih belum ada elemen*/}
            <Route path="/homepage/answerquestion/:id"/> {/*masih belum ada elemen*/}
            <Route path="/homepage/questiondetail/:id" element={<ReadQuestion/>}/>
            <Route path="/homepage/myquestion" element={<MyQuestions/>}/>
        </Routes>
    </div>
  );
}

export default App;
