const CustomButton = (props) => {
    function handleIncrement(){
        props.fun(props.counter+1);
    }
    return ( 
        <button onClick={handleIncrement}>Increment from child!</button>
     );
}
 
export default CustomButton;