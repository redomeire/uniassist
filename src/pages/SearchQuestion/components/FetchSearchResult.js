import { useNavigate } from "react-router";
export let listQuestion = [];

function FetchSearchResult() {

  let result = fetch("https://reqres.in/api/unknown")
    .then((res) => res.json())
    .then((res) => {
        for(let i = 0; i < res.data.length; i++){
            listQuestion.push(res.data[i]);
        }
    });

  return listQuestion;
}


export { FetchSearchResult };
