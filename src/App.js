import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  // const friendsNames = [
  //   { name:'Sharlok Homes'},
  //   {name: 'Dr Watson'},
  //   { name :'Bomkeyes Bokshi'},
  //   { name: 'Felu Da'}
  // ]
   const [friendsNames, setFriends] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setFriends(data))
  },[])

  return (
    
    <div className="App">
      
      <FriendCounter></FriendCounter>


      {
        friendsNames.map(friend => <Frieds friend ={friend} key={friend.id}></Frieds>)
      }
    

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      
      </header>
    </div>
  );
}
function FriendCounter(){
  const [count, setCount] = useState(4)
  
  return(
    <div>
      <button onClick={() =>{setCount(count +1)}}>Add friend</button>
      <h3>Total Friends :  {count} </h3>
      <NewFriends new ={count}></NewFriends>
    </div>
  )
}

function NewFriends(props){
  return(
    <div> New Friends : {props.new}</div>
  )
}

 function Frieds(props){
  // console.log(props);
  const friendStyle ={
       border : "1px solid purple",
       margin :'20px',
       backgroundColor : 'purple',
       color : 'white',
  }
  const {name} = props.friend

   return (
 
     <div style={friendStyle}>
       <h1>Name:{name}</h1>

     </div>
   )
 }

export default App;
