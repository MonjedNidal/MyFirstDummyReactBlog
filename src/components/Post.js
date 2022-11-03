import { useState } from "react";


const Post = (props) => {
    let {content, count, name} = props;
    // let [counter, likeIncrement] = useState(count);
    // function addLike(){
    //     counter++;
    //     likeIncrement(counter);
    // }
    let [numOfLikes, addLike] = useState(count);
    let [isLiked, clickLike] = useState(false);


    function likeClicked(){
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
    // let deleted = false;
    let [isDeleted, setIsDeleted] = useState(false)
    function deleteClicked(){
            isDeleted = true;
            setIsDeleted(isDeleted);
    }
        return ( 
        <div className="post" style={{backgroundColor:'DarkSlateGray',color:'white',padding:'2rem', border:'solid 1px', marginBottom:'1rem', justifyContent:'space-between',display:'flex'}}>
            <div>
            <h3>{name}</h3>
            <p>{content}</p>
            </div>
            <div>
                <button onClick={likeClicked}>Like</button>
                {numOfLikes == 0? null : <h5>{numOfLikes} Likes</h5>}

                <button onClick={deleteClicked}>Delete</button>
            </div>
    </div> );
}

export default Post;