import { useEffect, useState } from "react";
import Chatlogo from "../../images/chat_logo.svg";

function MakeFriendList(){
    const [friendList, setFriendList] = useState([]);
    const [ProfilePic, setProfilePic] = useState();
    let Authorization = localStorage.getItem("Authorization");

    useEffect(() => {
      if(localStorage.getItem("Authorization")){
        const myHeaders = new Headers({
            "Content-Type" : "application/json",
            "Accept" : "application/json",
            "Authorization" : JSON.parse(Authorization),
          });
        
            fetch("https://4700-140-0-18-112.ngrok.io/myPosts", {
              method: "GET",
              mode: "cors",
              headers: myHeaders,
            })
            .then((res) => res.json())
            .then((res) => {
              console.log(res);
              // localStorage.setItem("Username", JSON.stringify(res.posts.User.Username));
              for (let i = 0; i < res.posts.length; i++) {
                setFriendList(res.userAndFriends.Friends);
                setProfilePic(res.userAndFriends.Friends.ProfilePic);
              }
              localStorage.setItem("Username", JSON.stringify(res.posts[0].User.Username));
            })
          } else {
            setFriendList(["You have to login first"])
          }
    }, [])

    return friendList.map(item => (
        <div className="friend-list d-flex flex-row align-items-center justify-content-between px-4 mt-3 w-100" key={item.ID}>
            <div className="friend-profile-picture bg-white mx-3" style={{width: "40px",height: "40px",borderRadius: "50%", backgroundImage : {ProfilePic}}}></div>
            <h6 className="text-white">{item.Name}</h6>
            <img src={Chatlogo} alt="chat"/>
        </div>
    ));
}

export default MakeFriendList;