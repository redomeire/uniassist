import MakeFriendList from "../../../components/afterLogin/ListFriend";
import "../../../global/GlobalStyle.css";

function FriendList(){
    return (
        <div className="d-flex flex-column align-items-center justify-content-center height-500 overflow-auto">
            <MakeFriendList/>
        </div>
    );
}

export default FriendList;