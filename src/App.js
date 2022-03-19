import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';


function App() {
  return (
    <div className="App">
      <LoadPosts></LoadPosts>
      <District name='Noakhali' special='bivag'></District>
      <District name='Brammonbaria' special='jodda'></District>
      <District name='Comilla' special='moynamoti'></District>
      
     
    </div>
  );
}

function LoadPosts(){
  const [posts, setPosts] = useState([]);
  useEffect( () =>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setPosts(data))
  },[])
  return(
    <div>
      <h1>hello posts</h1>
      <h3>post: {posts.length}</h3>
      {
        posts.map(post => <Post 
          title={post.title}
          body={post.body}
          key={post.id}
          ></Post>)
      }

    </div>
  )
}
function Post (props){
  return(
    <div style={{border: '2px solid blue', borderRadius: '10px', backgroundColor: 'skyblue',margin: '15px', padding: '10px'}}>
      <h4>title:{props.title}</h4>
      <p>body:{props.body}</p>
    </div>
  )
}

const districtStyle = {
  border: '2px solid violet',
  backgroundColor: 'syan',
  padding: '10px',
  margin: '10px',
  borderRadius: '10px'

}

function District (props){
  const [ power, setPower] = useState(1);
  const boostPower = () =>{
    const newPower = power * 2;
    setPower(newPower)
  }
  return(
    <div style={districtStyle}>
      <h2>Name: {props.name} </h2>
      <p>Specialty: {props.special}</p>
      <h4>power: {power}</h4>
      <button onClick={boostPower}>power</button>
    </div>
  )
}







export default App;
