import MakeList from "./ListTopQuestion";

function TopQuestion(){
    return(
        <div className="p-4 d-flex flex-column">
            <h2 className="fw-bold mb-5">Top Question</h2>
            <MakeList/>
        </div>
    );
}

export default TopQuestion;