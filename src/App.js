import Header from "./components/Header";
import Post from "./components/Post";
import Footer from "./components/Footer";

let posts = [
  {
    name:'Monjed',
    content: 'Here is my first post',
    count: 323,
  },
  {
    name:'Ali',
    content: 'Here is my second post',
    count: 32342
  },
  {
    name:'Mohammad',
    content: 'Here is my third post',
    count: 232
  },
  {
    name:'Ahmad',
    content: 'Here is my fourth post',
    count: 3242
  }
]
let arrayOfPosts = posts
                  .map(post => <Post content= {post.content} count= {post.count} name={post.name}/>)
// let arrayOfPosts = [];
// for(let index = 0; index < posts.length; index++){
//   arrayOfPosts.push(<Post content= {posts[index].content} count= {posts[index].count}/>)
// }

function App() {
  return (
    <div className="App" style={{color:'DarkSlateGray',display:'block', justifyContent:'center',width:'50%',margin:'auto'}}>
      
      <Header />
      {arrayOfPosts}
      <Footer />
    </div>
  );
}

export default App;
