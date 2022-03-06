import Chatlogo from "../../images/chat_logo.svg";

let list = [{
    "id": 1,
    "name": "Ben Parker"
},{
    "id": 2,
    "name": "Michael Dam"
}, {
    "id": 3,
    "name": "Eddy Lackmann"
}, {
    "id": 4,
    "name": "Christopher C"
}, {
    "id": 5,
    "name": "Aiony Haust"
}, {
    "id": 6,
    "name": "Lesly Juarez"
}, {
    "id" : 7,
    "name": "Joseph D."
}];

function MakeFriendList(){
    return list.map(item => (
        <div className="friend-list d-flex flex-row align-items-center justify-content-between px-4 mt-3 w-100" key={item.id}>
            <div className="friend-profile-picture bg-white mx-3" style={{width: "40px",height: "40px",borderRadius: "50%"}}></div>
            <h6 className="text-white">{item.name}</h6>
            <img src={Chatlogo} alt="chat"/>
        </div>
    ));
}

export default MakeFriendList;