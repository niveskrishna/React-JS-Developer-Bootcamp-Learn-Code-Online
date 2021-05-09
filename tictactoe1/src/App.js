
import logo from './logo.svg';
import Icon from './components/icon'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Card,CardBody,Container,Button,Row,Col }  from 'reactstrap'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const itemArray=new Array(9).fill("Empty");



function App() {
  
  
const [iscross,setIscross]=useState(false);
const [winmessage,setWinmessage]=useState("");



const ReloadGame=()=>{
  //
  setWinmessage("");
  setIscross(false);
  itemArray.fill("Empty",0,9);
}

const changeItem=itemNumber=>{
  if(winmessage)
  {
    return toast (winmessage,{type:'success'});
  }
  
  
  if( itemArray[itemNumber]==="Empty")
  {
   itemArray[itemNumber]=iscross?"cross":"circle";
   setIscross(!iscross) ;

  }
  else{
   return toast('toast already filled',{type:'error'});
  }
  
  IsWinner();
}

const IsWinner=()=>{
    //  checking  winner of the game
    if (
      itemArray[0] === itemArray[1] &&
      itemArray[0] === itemArray[2] &&
      itemArray[0] !== "Empty"
    ) {
      setWinmessage(`${itemArray[0]} won`);
    } else if (
      itemArray[3] !== "Empty" &&
      itemArray[3] === itemArray[4] &&
      itemArray[4] === itemArray[5]
    ) {
      setWinmessage(`${itemArray[3]} won`);
    } else if (
      itemArray[6] !== "Empty" &&
      itemArray[6] === itemArray[7] &&
      itemArray[7] === itemArray[8]
    ) {
      setWinmessage(`${itemArray[6]} won`);
    } else if (
      itemArray[0] !== "Empty" &&
      itemArray[0] === itemArray[3] &&
      itemArray[3] === itemArray[6]
    ) {
      setWinmessage(`${itemArray[0]} won`);
    } else if (
      itemArray[1] !== "Empty" &&
      itemArray[1] === itemArray[4] &&
      itemArray[4] === itemArray[7]
    ) {
      setWinmessage(`${itemArray[1]} won`);
    } else if (
      itemArray[2] !== "Empty" &&
      itemArray[2] === itemArray[5] &&
      itemArray[5] === itemArray[8]
    ) {
      setWinmessage(`${itemArray[2]} won`);
    } else if (
      itemArray[0] !== "Empty" &&
      itemArray[0] === itemArray[4] &&
      itemArray[4] === itemArray[8]
    ) {
      setWinmessage(`${itemArray[0]} won`);
    } else if (
      itemArray[2] !== "Empty" &&
      itemArray[2] === itemArray[4] &&
      itemArray[4] === itemArray[6]
    ) {
      setWinmessage(`${itemArray[2]} won`);
    }
}

  
  
  
  
  return (
    <div className="App">
      <header className="App-header">       
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
        <Container>
          <Row>
            <Col md={6} className="offset-md-3">
               {winmessage?
               <div>
               <h1>{winmessage}</h1>   
               <button  className="suucces"onClick={ReloadGame}></button> 
               </div>:  
               <h1>{iscross? "Cross Turn" : "Circle Turn"  }</h1>   
               
               }
               
               <div className="grid">
                 {itemArray.map((item,index)=>(
                 <Card color="warning"  onClick={() => changeItem(index)}>
                   <CardBody className="box">
                   <Icon name={item}></Icon>

                   </CardBody>
                   </Card>
                 ))}

                 
                </div>
            </Col>
        </Row>
       </Container>
       
      </header>
     
    </div>
  );
}






export default App;
