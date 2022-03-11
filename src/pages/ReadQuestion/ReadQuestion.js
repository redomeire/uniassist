import HomeNav from "../HomePage/components/HomeNav";
import Sidebar from "../HomePage/components/Sidebar";
import {Card} from "react-bootstrap";
import { list } from "../HomePage/components/ListTopQuestion";
import FeedbackButton from "./components/FeedbackButton";

import "../../global/GlobalStyle.css";

function ReadQuestion(){
    const URL = window.location.href;
    const lastURLcharacter = URL.charAt(URL.length - 1);
    const index = list.findIndex(x => x.id === parseInt(lastURLcharacter));

    function getTitle(){
        const title = list[index].title;
        return title;
    }

    function getCategory(){
        const category = list[index].category;
        return category;
    }

    function getContent(){
        const content = list[index].message;
        return content;
    }

    return (
        <div>
            <HomeNav/>
            <div className="d-flex flex-row">
                <div className="p-5 w-75">
                    <h2>{getTitle()}</h2>
                    <h2 className="mb-3">{getCategory()}</h2>
                    <Card className="color-dark text-white p-5 mb d-flex align-items-center">
                        <p>{getContent()}</p>
                        {/* <FeedbackButton/> */}
                    </Card>
                </div>
                <Sidebar/>
            </div>
        </div>
    );
}

export default ReadQuestion;