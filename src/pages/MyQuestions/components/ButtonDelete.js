import { Button } from "react-bootstrap";

function ButtonDelete(props){

    function deletePost(){
        let userInfo = localStorage.getItem("Authorization");
        let result = fetch(`https://4700-140-0-18-112.ngrok.io/posts/:${props.Post.ID}/deleteAuth`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": JSON.parse(userInfo),
            },
        })
    }

    return (
        <Button variant="danger" className="z-index-1" onClick={deletePost}>Delete Post</Button>
    );
}

export default ButtonDelete;