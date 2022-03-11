// import { useNavigate } from "react-router";
// import HeartLogo from "../../../images/fi-ss-heart.svg";

// function MakeSearchList(item){
//     const navigate = useNavigate();

//     return(
//         <div
//         onClick={() => {
//           navigate(`/homepage/answerquestion/${item.id}`);
//         }}
//         className="question w-100 rounded mb-2 p-3 shadow h-75 overflow-auto"
//         style={{ backgroundColor: "#001949" }}
//       >
//         <h4 className="text-white" key={item.id}>
//           {item.name}
//         </h4>
//         <div className="tags d-flex flex-row mt-4">
//           <div
//             className="likes rounded-pill text-white p-2 me-2"
//             style={{ backgroundColor: "#8D9AC5" }}
//           >
//             <img src={HeartLogo} alt="likes" />
//             <span className="mx-2">{item.id}/5</span>
//           </div>
//           <div
//             className="category rounded-pill text-white p-2 me-2"
//             style={{ backgroundColor: "#8D9AC5" }}
//           >
//             <span>{item.pantone_value}</span>
//           </div>
//           <div
//             className="isAnswered rounded-pill text-white p-2 me-2"
//             style={{ backgroundColor: "#8D9AC5" }}
//           >
//             <span>{item.year}</span>
//           </div>
//         </div>
//       </div>
//     );
// }

// export default MakeSearchList;