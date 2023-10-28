
import './App.css';
import { useDispatch,useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './index';
import { RootState } from './state/store';



function App() {
  const dispatch=useDispatch()
    const{depositMoney,withdrawMoney,bankruptMoney}=bindActionCreators(actionCreators,dispatch)
    const state = useSelector((state: RootState) => state.bank)
  return (
    <>
    <h1>{state}</h1>
    <button onClick={()=>depositMoney(1)}>DEPOSIT</button>
    <button onClick={()=>withdrawMoney(1)}>WITHDRAW</button>
    <button onClick={()=>bankruptMoney()}>BANKRUPT</button>

    </>
    
  );
}

export default App;
