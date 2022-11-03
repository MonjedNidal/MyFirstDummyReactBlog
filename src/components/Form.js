// import { useState } from "react";

let Form = () => {
    // let [textField, setTextField] = useState("");
    // let updateTextField = (e) => {
    //     let text = e.target.value;
    //     setTextField(text);
    // }
    return ( 
        <div style={{border:'solid 1px',marginBottom:'1rem'}}>
            <div style={{margin:'1rem'}}>
            <input type={'text'} placeholder={'Enter your name'} ></input>
            </div>
            <input style={{margin:'1rem'}} type={'text'} placeholder={'What do you think about?'}></input>

            <button>Post</button>
        </div> 
    );
}
 
export default Form;