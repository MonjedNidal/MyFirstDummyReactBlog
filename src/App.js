import Header from "./components/Header";
import Post from "./components/Post";
import Footer from "./components/Footer";
import { useState } from "react";
// import Form from "./components/Form";

function reqListener() {
  let data = JSON.parse(this.responseText);
  console.log(data);
}


let posts = [
  {
    name:'Monjed',
    content: 'Here is my first post',
    count: 323,
    key:1
  },
  {
    name:'Ali',
    content: 'Here is my second post',
    count: 32342,
    key:2
  },

];



// let arrayOfPosts = [];
// for(let index = 0; index < posts.length; index++){
//   arrayOfPosts.push(<Post content= {posts[index].content} count= {posts[index].count}/>)
// }



function App() {
  let [contentFieldContent, setTextField] = useState("");
  let [nameFieldContent, setNameField] = useState("");
  let [statePost, updatePostState] = useState(posts);
  
  function changed(event){
        contentFieldContent = event.target.value;
        setTextField(contentFieldContent);
  }
  function nameChanged(event){
    nameFieldContent = event.target.value;
    setNameField(nameFieldContent);
  }
  
  function clicked (){
    // updatePostState([...statePost,{content:contentFieldContent, count:0}])
    // statePost.push()
    updatePostState([...statePost, {content:contentFieldContent, count:0,name:nameFieldContent}])
    console.log(statePost);
    setNameField("");
    setTextField("")
  }
  let arrayOfPosts = statePost
                  .map(post => <Post content= {post.content} count= {post.count} name={post.name}/>)
                  // reqListener();
  return (
    <div className="App" style={{color:'DarkSlateGray',display:'block', justifyContent:'center',width:'50%',margin:'auto'}}>
      
      <Header />
      {/* <Form /> */}
      <div style={{border:'solid 1px',marginBottom:'1rem'}}>
            <div style={{margin:'1rem'}}>
            <input type={'text'} value={nameFieldContent} onChange={nameChanged} placeholder={'Enter your name'} ></input>
            </div>
            <input value={contentFieldContent} onChange={changed} style={{margin:'1rem'}} type={'text'} placeholder={'What do you think about?'}></input>

            <button onClick={clicked}>Post</button>
        </div> 
      {arrayOfPosts}
      <Footer />
    </div>
  );
}

export default App;
