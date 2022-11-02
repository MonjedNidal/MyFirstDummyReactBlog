const Post = (props) => {
    let {content, count, name} = props;
    return ( 
    <div className="post" style={{backgroundColor:'DarkSlateGray',color:'white',padding:'2rem', border:'solid 1px', marginBottom:'1rem', justifyContent:'space-between',display:'flex'}}>
        <div>
        <h3>{name}</h3>
        <p>{content}</p>
        </div>
        <div>
            <h5>{count} Likes</h5>
            <button>Like</button>
        </div>
    </div> );
}

export default Post;