import './App.css';
import {useState} from 'react' ;
import ButtonAbscent from './components/Buttons/ButtonsBottom/ButtonAbscent';
import ButtonPresent from './components/Buttons/ButtonsBottom/ButtonPresent';
import ButtonAjouterPresent from './components/Buttons/ButtonsAjouter/ButtonAjouterPresent';
import ButtonAjouterExclu from './components/Buttons/ButtonsAjouter/ButtonAjouterExclu';
import ButtonAjouterAbscent from './components/Buttons/ButtonsAjouter/ButtonAjouterAbscent';
import ListPresent from './components/List/ListPresent';
import ListTous from './components/List/ListTous';
import ListAbscent from './components/List/ListAbscent';
import AfficherNames from './components/AfficherNoms/AfficherNames';



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
  return (
    <div className="App">
        <div style={{display:ok1}}>
          <AfficherNames names={names} start ={Setnames} ok={ok}/>
          <div className="btn" > 
            <ButtonAjouterPresent  text="Présent" com={com} disabled={!com} Start={SetPresent}/>
            <ButtonAjouterExclu  text="Exclu" com={com} disabled={!com} Start={SetExclu}  />
            <ButtonAjouterAbscent  text="Abscent" com={com} disabled={!com} Start={SetAbscent}  />
          </div>
        </div>

        <div className="last-container">
            <ButtonAbscent  text="TOUS" Start={AfficherTous} /> 
            <ButtonAbscent  text="ABSCENT" Start={AfficherAbscent} /> 
            <ButtonPresent  text="PRESENT" Start={AfficherPresent} /> 
        </div>
        <ListTous t={t} tous={tous} />
        <ListPresent p={p} present={present} /> 
        <ListAbscent a={a} abscent={abscent} /> 
    </div>
  );
}
export default App;