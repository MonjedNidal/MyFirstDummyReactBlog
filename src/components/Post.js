import { useState } from "react";


let isLiked = false;
const Post = (props) => {
    let {content, count, name} = props;
    // let [counter, likeIncrement] = useState(count);
    // function addLike(){
    //     counter++;
    //     likeIncrement(counter);
    // }
    let [numOfLikes, addLike] = useState(count);
    let [isLiked, clickLike] = useState(false);


    function test(){
        console.log(isLiked)
            if(!isLiked){
                numOfLikes++;
                isLiked = !isLiked;
                clickLike(isLiked)
                addLike(numOfLikes)
            }else{
                numOfLikes--;
                isLiked = !isLiked;
                clickLike(isLiked)
                addLike(numOfLikes)
            }
    }
    return ( 
    <div className="post" style={{backgroundColor:'DarkSlateGray',color:'white',padding:'2rem', border:'solid 1px', marginBottom:'1rem', justifyContent:'space-between',display:'flex'}}>
        <div>
        <h3>{name}</h3>
        <p>{content}</p>
        </div>
        <div>
            <h5>{numOfLikes} Likes</h5>
            <button onClick={test}>Like</button>
        </div>
    </div> );
}

export default Post;