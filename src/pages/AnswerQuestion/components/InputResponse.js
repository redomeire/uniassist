import { useState } from "react";
import { Form, FormControl } from "react-bootstrap";

function InputResponse(){
    const [response, setResponse] = useState();
    


    return(
        <div>
            <Form.Group className="d-flex flex-column" controlId="title">
              <FormControl
                className="form-title rounded w-100 mb-3"
                placeholder="Title"
                aria-label="Dollar amount (with dot and two decimal places)"
                onChange={(e) => setResponse(e.target.value)}
              />
            </Form.Group>
        </div>
    );
}

export default InputResponse;