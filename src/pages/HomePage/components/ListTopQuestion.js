import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import "../../../global/GlobalStyle.css";
import HeartLogo from "../../../images/fi-ss-heart.svg";
import ReadQuestion from "../../ReadQuestion/ReadQuestion";

export const list = [{
    "id": 1,
    "title": "c++ compilation error",
    "category": "category",
    "message": `i got a compile error which i do not understand. i have a h/cpp file combination that does not contain a class but just defines some utility functions. when i try to use a struct that is defined in another class i get the error:

    error C2027: use of undefined type 'B::C'
    
    so, stripped down to the problem, the h-file looks like this
    
    namespace A {
        void foo(B::C::SStruct const & Var);
    }
    the definition of SStruct is in a class which is in another h-file, that is of course included.
    
    namespace B {
        class C {
            public:
            struct SStruct { };
        };
    }
    the strange thing is, i can use this struct in other classes fine, it just seems to be related to this one h-file which contains just utility functions. what am i missing here? thanks! (1)`,
    "isAnswered": true,
    "rating": 4.5
},{
    "id": 2,
    "title": "How to use API Route in next js?",
    "category": "category",
    "message": `i got a compile error which i do not understand. i have a h/cpp file combination that does not contain a class but just defines some utility functions. when i try to use a struct that is defined in another class i get the error:

    error C2027: use of undefined type 'B::C'
    
    so, stripped down to the problem, the h-file looks like this
    
    namespace A {
        void foo(B::C::SStruct const & Var);
    }
    the definition of SStruct is in a class which is in another h-file, that is of course included.
    
    namespace B {
        class C {
            public:
            struct SStruct { };
        };
    }
    the strange thing is, i can use this struct in other classes fine, it just seems to be related to this one h-file which contains just utility functions. what am i missing here? thanks! (2)`,
    "isAnswered": true,
    "rating": 3.5
}, {
    "id": 3,
    "title": "Rounding the float value to the nearest 9",
    "category": "category",
    "message": `i got a compile error which i do not understand. i have a h/cpp file combination that does not contain a class but just defines some utility functions. when i try to use a struct that is defined in another class i get the error:

    error C2027: use of undefined type 'B::C'
    
    so, stripped down to the problem, the h-file looks like this
    
    namespace A {
        void foo(B::C::SStruct const & Var);
    }
    the definition of SStruct is in a class which is in another h-file, that is of course included.
    
    namespace B {
        class C {
            public:
            struct SStruct { };
        };
    }
    the strange thing is, i can use this struct in other classes fine, it just seems to be related to this one h-file which contains just utility functions. what am i missing here? thanks! (3)`,
    "isAnswered": false,
    "rating": 3
}, {
    "id": 6,
    "title": "What is the best sharing button script that holds content?",
    "category": "category",
    "message": `i got a compile error which i do not understand. i have a h/cpp file combination that does not contain a class but just defines some utility functions. when i try to use a struct that is defined in another class i get the error:

    error C2027: use of undefined type 'B::C'
    
    so, stripped down to the problem, the h-file looks like this
    
    namespace A {
        void foo(B::C::SStruct const & Var);
    }
    the definition of SStruct is in a class which is in another h-file, that is of course included.
    
    namespace B {
        class C {
            public:
            struct SStruct { };
        };
    }
    the strange thing is, i can use this struct in other classes fine, it just seems to be related to this one h-file which contains just utility functions. what am i missing here? thanks! (6)`,
    "isAnswered": false,
    "rating": 2.5
}];

    function isAnswered(isAnswered){
       if(isAnswered){
            return "Answered";
       } else {
            return "Not Answered";
       }
    }

    function MakeList() {
        const navigate = useNavigate();

        return list.map(item => (
            <div onClick={() => {
                navigate(`/homepage/questiondetail/${item.id}`)
                }} className="question w-100 rounded mb-2 p-3 shadow" style={{backgroundColor: "#001949"}}>
                <h4 className="text-white" key={item.id}>{item.title}</h4>
                <div className="tags d-flex flex-row mt-4">
                    <div className="likes rounded-pill text-white p-2 me-2" style={{backgroundColor: "#5567C9"}}>
                        <img src={HeartLogo} alt="likes"/>
                        <span className="mx-2">{item.rating}/5</span>
                    </div>
                    <div className="category rounded-pill text-white p-2 me-2" style={{backgroundColor: "#5567C9"}}>
                        <span>{item.category}</span>
                    </div>
                    <div className="isAnswered rounded-pill text-white p-2 me-2" style={{backgroundColor: "#5567C9"}}>
                        <span>{isAnswered(item.isAnswered)}</span>
                    </div>
                </div>
            </div>
        ));
    }

export default MakeList;