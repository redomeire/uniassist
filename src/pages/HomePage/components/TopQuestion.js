import MakeList from "./ListTopQuestion";
import "../../../global/GlobalStyle.css";
import "../style/TopQuestion.css";

function TopQuestionList(){
    return(
        <div className="p-4 d-flex flex-column">
            <h2 className="fw-bold mb-4">Top Question</h2>
            <div className="top-question-scrollbar overflow-auto height-500">
            <MakeList/>
            </div>
        </div>
    );
}

export default TopQuestionList;