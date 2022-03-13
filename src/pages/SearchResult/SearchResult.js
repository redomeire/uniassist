import HomeNav from "../HomePage/components/HomeNav";
import SearchList from "../SearchQuestion/components/SearchList";
import Sidebar from "../HomePage/components/Sidebar";
import { useContext } from "react";
import { SearchInputResult } from "../HomePage/components/SearchInput";

function SearchResult(){

    const searchResult = useContext(SearchInputResult);
    console.log(searchResult);
    return(
        <div>
      <HomeNav />
      <div className="d-flex flex-row">
        <div className="d-flex flex-column w-75 bg-white p-4">
          {/* <div className="buttons d-flex w-100 justify-content-around p-4">
            <ButtonPost/>
            <ButtonAnswer/>
          </div> */}
          <h2 className="ms-4 fw-bold mb-4">Search Question</h2>
          <select
                variant="outline-secondary"
                title="Dropdown"
                id="input-group-dropdown-1"
                style={{padding : "10px"}}
                className="mb-3 rounded-pill"
                onChange={(e) => {
                    if(e.target.value === "Other"){
                      
                      console.log(e.target.value);
                    } else if(e.target.value === "Pemrograman Lanjut"){
                      
                      console.log(e.target.value);
                    } else if(e.target.value === "Pemrograman Dasar"){
                      
                      console.log(e.target.value);
                    } else if(e.target.value === "Sistem Basis Data"){
                      
                      console.log(e.target.value);
                    } else if(e.target.value === "Jaringan"){
                      
                      console.log(e.target.value);
                    } else if(e.target.value === "Pemrograman Web"){
                      
                      console.log(e.target.value);
                    } else if(e.target.value === "Pemrograman Mobile"){
                      
                      console.log(e.target.value);
                    } else if(e.target.value === "Java"){
                      
                      console.log(e.target.value);
                    } else if(e.target.value === "C++"){
                      
                      console.log(e.target.value);
                    } else if(e.target.value === "Javascript"){
                      
                      console.log(e.target.value);
                    }
                }}
              >
                <option href="#">Other</option>
                <option href="#">Pemrograman Lanjut</option>
                <option href="#">Pemrograman Dasar</option>
                <option href="#">Sistem Basis Data</option>
                <option href="#">Jaringan</option>
                <option href="#">Pemrograman Web</option>
                <option href="#">Pemrograman Mobile</option>
                <option href="#">Java</option>
                <option href="#">C++</option>
                <option href="#">Javascript</option>
              </select>
          <div className="search-question height-500 overflow-scroll shadow-lg">
          
          </div>
        </div>
        <Sidebar/>
      </div>
    </div>
    );
}

export default SearchResult;