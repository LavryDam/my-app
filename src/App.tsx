import {useEffect, useState} from 'react';
import './App.css';
import List from './Components/List';
import Form from './Components/Form';
import {Sub} from './types';


const INITIAL_STATE = [
  {
    nick: 'midudev',
    subMonths: 12,
    avatar: 'https://unavatar.io/github/mdo',
    description: 'Desarrollador de software. Cofundador de @midudev y @theam'
  },
  {
    nick: 'pepito',
    subMonths: 3,
    avatar: 'https://unavatar.io/github/mdo'
  }
]


interface AppState{
  subs: Array<Sub>
  newSubsNumber: number
}

function App() {
  //este estado es un array de Sub
  const [subs, setSubs] = useState<Array<Sub>>([])
  const [newSubsNumber, setNewSubsNumber] = useState<AppState["newSubsNumber"]>(0)

  useEffect(() => {
    setSubs(INITIAL_STATE)
  }, [])

  const handleNewSub = (newSub: Sub): void => {
    setSubs([...subs, newSub])
    setNewSubsNumber(newSubsNumber + 1)
  }

  return (
    <div className="App">
      <h1>midu subs</h1>
       <List subs={subs} />
       <Form onNewSub={setSubs}/>
    </div>
  );
}

export default App;
