import './App.css';
import {useState} from 'react' ;
import AfficherNames from './components/AfficherNoms/AfficherNames';
import ListEtudiant from './components/List/ListEtudiant';
import ButtonLast from './components/Buttons/ButtonLast';
import ButtonsAllAjouter from './components/Buttons/ButtonsAjouter/ButtonsAllAjouter';



function App() {

  const nom=["Mouna","Ahmed","Farah","Oussema","Mehdi","Ali","Mohamed","Monji","Mounira","Jamel","Seif","Mariem"] ; 
  const [com,setCom]=useState(false) ; 
  const [names,setNames]=useState('') ; 
  const [present,setPresent]=useState([]) ; 
  const [abscent,setAbscent]=useState([]) ; 
  const [tous,setTous]=useState([]) ; 
  const [count,setCount]=useState(0); 
  const [displayBtnCommencer,setDisplayBtnCommencer]=useState(''); 
  const [displayBlocNames,setDisplayBlocNames]=useState(''); 
  const [displayListAbscent,setDisplayListAbscent]=useState('none'); 
  const [displayListPresent,setDisplayListPresent]=useState('none'); 
  const [displayListTous,setDisplayListTous]=useState('contents'); 

  function Setnames() {
    setCom(true) ; 
    setDisplayBtnCommencer('none');
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
        setDisplayBlocNames('none');
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
          setDisplayBlocNames('none');
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
          setDisplayBlocNames('none');
        }
  }

function AfficherTous() {
  if (displayListAbscent!=='none') {
  setDisplayListAbscent('none'); }
  if (displayListPresent!=='none'){
  setDisplayListPresent('none');}
  setDisplayListTous('contents');
}

function AfficherAbscent() {
  if (displayListTous!=='none') {
  setDisplayListTous('none'); }
  if (displayListPresent!=='none'){
  setDisplayListPresent('none');}
  setDisplayListAbscent('contents');
}
function AfficherPresent() {
  if(displayListAbscent!=='none') {
  setDisplayListAbscent('none');}
  if (displayListTous !=='none') {
  setDisplayListTous('none');}
  setDisplayListPresent('contents')
}
  return (
    <div className="App">
        <div style={{display:displayBlocNames}}>
          <AfficherNames names={names} start ={Setnames} displayBtnCommencer={displayBtnCommencer}/>
          <ButtonsAllAjouter com={com}  SetPresent={SetPresent} SetExclu={SetExclu} SetAbscent={SetAbscent} /> 
        </div>
        <ButtonLast startTous ={AfficherTous} startPresent={AfficherPresent} startAbscent={AfficherAbscent} />
        <ListEtudiant tous={tous} present={present} abscent={abscent} displayListAbscent={displayListAbscent} displayListTous={displayListTous} displayListPresent={displayListPresent} /> 
    </div>
  );
}
export default App;