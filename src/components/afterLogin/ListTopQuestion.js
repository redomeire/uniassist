import HeartLogo from "../../images/fi-ss-heart.svg";

let list = [{
    "id": 1,
    "title": "c++ compilation error",
    "category": "category",
    "isAnswered": true,
    "rating": 4.5
},{
    "id": 2,
    "title": "How to use API Route in next js?",
    "category": "category",
    "isAnswered": true,
    "rating": 3.5
}, {
    "id": 3,
    "title": "Rounding the float value to the nearest 9",
    "category": "category",
    "isAnswered": false,
    "rating": 3
}];

    function isAnswered(isAnswered){
       if(isAnswered){
            return "Answered";
       } else {
            return "Not Answered";
       }
    }

    function makeList() {
        return list.map(item => (
            <div className="w-100 rounded mb-3 p-3 shadow" style={{backgroundColor: "#001949"}}>
                <h4 className="text-white" key={item.id}>{item.title}</h4>
                <div className="tags d-flex flex-row mt-4">
                    <div className="likes rounded-pill text-white p-2 me-2" style={{backgroundColor: "#8D9AC5"}}>
                        <img src={HeartLogo} alt="likes"/>
                        <span className="mx-2">{item.rating}/5</span>
                    </div>
                    <div className="category rounded-pill text-white p-2 me-2" style={{backgroundColor: "#8D9AC5"}}>
                        <span>{item.category}</span>
                    </div>
                    <div className="isAnswered rounded-pill text-white p-2 me-2" style={{backgroundColor: "#8D9AC5"}}>
                        <span>{isAnswered(item.isAnswered)}</span>
                    </div>
                </div>
            </div>
        ));
    }

export default makeList;