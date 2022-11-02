import { useState } from "react";

const Form = () => {
    let [textField, setTextField] = useState("");
    let updateTextField = (e) => {
        let text = e.target.value;
        setTextField(text);
    }
    return ( 
        <div>
            <input type={'text'} placeholder={'Enter your name'} onChange={updateTextField}></input>
            <input type={'text'} placeholder={'What do you think about?'} onChange={updateTextField}></input>

            {/* <button onClick={}>Post</button> */}
        </div> 
    );
}
 
export default Form;