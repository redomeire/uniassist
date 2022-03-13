import HomeNav from "../HomePage/components/HomeNav";
import Sidebar from "../HomePage/components/Sidebar";
import MyListQuestion from "./components/MyListQuestion";
import "./style/MyQuestions.css";
import "../../global/GlobalStyle.css";

function MyQuestions() {
  return (
    <div>
      <HomeNav />
      <div className="d-flex flex-row">
        <div className="d-flex flex-column p-4 w-75 bg-white">
          <h2 className="fw-bold mb-5">Your Question</h2>
          <div className="list-question overflow-auto height-500">
            <MyListQuestion />
          </div>
        </div>
        <Sidebar />
      </div>
    </div>
  );
}

export default MyQuestions;
