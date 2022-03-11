import { Form, FormControl, Button} from "react-bootstrap";
import FriendList from "./FriendList";
import "../style/Sidebar.css";
import SearchButton from "../../../images/search-logo.svg"

function Sidebar(){
    return(
        <div
          className="sidebar d-flex flex-column"
        >
          <Form className="d-flex w-100 mx-auto px-5 py-4">
            <FormControl
              type="search"
              placeholder="Search friend"
              className=""
              style={{ borderRadius: "50rem 0 0 50rem" }}
              aria-label="Search"
            />
            <Button
              className="bg-white border-0  d-flex align-items-center justify-content-center"
              type="submit"
              style={{ borderRadius: "0 50rem 50rem 0"}}
            >
              <img src={SearchButton} alt="search" width="20"/>
            </Button>
          </Form>
          <FriendList />
        </div>
    );
}

export default Sidebar;