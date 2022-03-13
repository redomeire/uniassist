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
import AnswerQuestion from "./pages/AnswerQuestion/AnswerQuestion";
import SearchResult from "./pages/SearchResult/SearchResult";


function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<LandingPage/>}/> { /*done*/}
            <Route path="/login" element={<Login/>}/> {/* kurang private route */}
            <Route path="/register" element={<Register/>}/> {/* kurang restricted route */}
            <Route exact path="/homepage" element={<HomePage/>}/> {/* done */}
            <Route path="/homepage/postquestion" element={<PostQuestion/>}/> { /* done */}
            <Route path="/homepage/answerquestion" element={<SearchQuestion/>}/> {/*memperbaiki list*/}
            <Route path="/homepage/answerquestion/searchresult" element={<SearchResult/>}/> {/*memperbaiki list*/}
            <Route path="/homepage/answerquestion/:id" element={<AnswerQuestion/>}/>
            <Route path="/homepage/questiondetail/:id" element={<AnswerQuestion/>}/>
            <Route path="/homepage/myquestion" element={<MyQuestions/>}/>
            <Route path="/homepage/myquestion/:id" element={<AnswerQuestion/>}/>
        </Routes>
    </div>
  );
}

export default App;
