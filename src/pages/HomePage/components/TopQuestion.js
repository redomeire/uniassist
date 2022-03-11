import MakeList from "./ListTopQuestion";
import "../style/TopQuestion.css";

function TopQuestionList(){
    return(
        <div className="p-4 d-flex flex-column">
            <h2 className="fw-bold mb-4">Top Question</h2>
            <div className="top-question-scrollbar overflow-auto" style={{height: "65%"}}>
            <MakeList/>
            </div>
        </div>
    );
}

export default TopQuestionList;