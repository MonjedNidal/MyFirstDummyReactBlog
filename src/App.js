import Header from "./components/Header";
import Post from "./components/Post";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App" style={{display:'block', justifyContent:'center',width:'50%',margin:'auto'}}>
      
      <Header />
      <Post x = "Hi" y = "ww"/>
      <Footer />
    </div>
  );
}

export default App;
