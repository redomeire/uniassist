import HomeNav from "../HomePage/components/HomeNav";
import Sidebar from "../HomePage/components/Sidebar";
import SearchResult from "./components/SearchResult";
import ButtonPost from "../PostQuestion/components/ButtonPost";
import ButtonAnswer from "../PostQuestion/components/ButtonAnswer";
import "./style/SearchQuestion.css";

function SearchQuestion(){
    return(
        <div>
      <HomeNav />
      <div className="d-flex flex-row">
        <div className="d-flex flex-column w-75 bg-white p-5">
          <div className="buttons d-flex w-100 justify-content-around p-4">
            <ButtonPost/>
            <ButtonAnswer/>
          </div>
          <h2 className="ms-4 fw-bold mb-4 mt-4">Search Result</h2>
          <div className="search-question h-50 overflow-scroll shadow-lg">
          <SearchResult/>
          </div>
        </div>
        <Sidebar/>
      </div>
    </div>
    );
}

export default SearchQuestion;