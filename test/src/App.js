
import './App.css';
import {useState} from 'react' ;

function App() {

  const nom=["Mouna","Ahmed","Farah","Oussema","Mehdi","Ali","Mohamed","Monji","Mounira","Jamel","Seif","Mariem"] ; 

  const [com,setCom]=useState(false) ; 
  const [names,setNames]=useState('') ; 
  const [present,setPresent]=useState([]) ; 
  const [abscent,setAbscent]=useState([]) ; 
  const [tous,setTous]=useState([]) ; 
  const [count,setCount]=useState(0); 

  
  const [ok,setOk]=useState(''); 
  const [ok1,setOk1]=useState(''); 
  const [a,setA]=useState('none'); 
  const [p,setP]=useState('none'); 
  const [t,setT]=useState('contents'); 

  function Setnames() {
    setCom(true) ; 
    setOk('none');
    setNames(nom[count]) ;
    setCount(count + 1)
  }

  function SetPresent() {
    
      present.unshift([names,'Present']);
      setPresent(present); 
      tous.unshift([names,'Present']);
      setTous(tous);
      if(count<nom.length) {
      setCount(count+1);
      setNames(nom[count]) ; 
    }
      else {
        setOk1('none');
      }
    
  }

  function SetAbscent() {
    
      abscent.unshift([names,'Abscent']);
      setAbscent(abscent);
      tous.unshift([names,'Abscent']);
      setTous(tous);
      if(count<nom.length) {
        setCount(count+1);
        setNames(nom[count]) ;
      }
        else {
          setOk1('none');
        }
    
  }

  function SetExclu() {
      tous.unshift([names,'Exclu']);
      setTous(tous);
      if(count<nom.length) {
        setCount(count+1);
        setNames(nom[count]) ;
      }
        else {
          setOk1('none');
        }
  }

  function List(props){
    
    return ( 
      <div className="affichage">
        <div className="container-affichage">
          <div className="type">
            <h3>{props.list[0]}</h3>
          </div>
          <div className="type">
            <h5>{props.list[1]}</h5>
          </div>
        </div>
    </div>
    );
  }

function AfficherTous() {
  if (a!=='none') {
  setA('none'); }
  if (p!=='none'){
  setP('none');}
  setT('contents');
}

function AfficherAbscent() {
  if (t!=='none') {
  setT('none'); }
  if (p!=='none'){
  setP('none');}
  setA('contents');
}
function AfficherPresent() {
  if(a !=='none') {
  setA('none');}
  if (t !=='none') {
  setT('none');}
  setP('contents')
}
var buttonp = document.getElementById("my-buttonp");
var buttone = document.getElementById("my-buttone");
var buttona = document.getElementById("my-buttona");
function ChangeOpacityPresent(){
  if(com)
  buttonp.style.opacity=0.5 ; 
}
function ChangeOpacityPresent1(){
  if(com)
  buttonp.style.opacity=1 ; 
}

function ChangeOpacityExclu(){
  if(com)
  buttone.style.opacity=0.5 ; 
}
function ChangeOpacityExclu1(){
  if(com)
  buttone.style.opacity=1 ; 
}

function ChangeOpacityAbscent(){
  if(com)
  buttona.style.opacity=0.5 ; 
}
function ChangeOpacityAbscent1(){
  if(com)
  buttona.style.opacity=1 ; 
}

  return (
    <div className="App">
      <div className="container">
        <div  className="scontainer" style={{display:ok1}}>
          <div className="names">
            <button onClick={Setnames} className="btncommencer" style={{display:ok}}>
              <span>COMMENCER</span>
            </button>
            <h4>{names}</h4>
          </div>
          <div className="btn" >
            <button disabled={!com} onMouseOver={ChangeOpacityPresent} onMouseOut={ChangeOpacityPresent1} id="my-buttonp" style={{opacity: com ? 1 : 0.5 , cursor: com ? 'pointer': ''}} onClick ={SetPresent} className="btnp " >
              <span>Présent</span>
            </button>
            <button disabled={!com} onMouseOver={ChangeOpacityExclu} onMouseOut={ChangeOpacityExclu1} id="my-buttone" style={{opacity: com ? 1 : 0.5 , cursor: com ? 'pointer': ''}} onClick ={SetExclu} className="btne">
              <span>Exclu</span>
            </button>
            <button disabled={!com} onMouseOver={ChangeOpacityAbscent} onMouseOut={ChangeOpacityAbscent1} id="my-buttona" style={{opacity: com ? 1 : 0.5 , cursor: com ? 'pointer': ''}}  onClick ={SetAbscent} className="btna">
              <span>Abscent</span>
            </button>
          </div>
          </div>

          <div className="last-container">
            <button onClick={AfficherTous} className="btnend btnleft">
              <span>TOUS</span>
            </button>
            <button onClick={AfficherAbscent} className="btnend btnmiddle">
              <span>ABSCENT</span>
            </button>
            <button onClick={AfficherPresent} className="btnend btnright" >
              <span>PRESENT</span>
            </button>
          </div>

          <div style={{display:t}}>
          {tous.map((tous,index) => 
              <List list={tous} key={index}  />
            )}
          
          </div>

           <div style={{display:p}}>
          {present.map((present,index) => 
              <List list={present} key={index} />
            )}
          
          </div>
        
          <div style={{display:a}}>
          {abscent.map((abscent,index) => 
              <List list={abscent} key={index} />
            )}
          </div> 
          
        </div>
    </div>
  );
}
export default App;