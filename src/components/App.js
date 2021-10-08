import '../style/App.css'
import { useWeb3React } from '@web3-react/core';
import { injected } from '../wallet/connectors'
import Header from './Header'

function App() {

  const {active, account,library,connector,activate,deactivate} =useWeb3React()


  const connect = async () => {
    try {
      await activate(injected)
    } catch(e){
      console.log(e)
    }
  }

  const disconnect = async() => {
    try{
      deactivate()
    }catch(e) {
      console.log(e)
    }
  }


  return (
    <>
    <Header/>
    <div className="container">
      <div className="card">
        <div className="account-info">
          {active ? <span> Connected with : <b>{account}</b> </span> : <span> Not connected</span>}
        </div>
        <div className="btn-container">
          <button className="btn"onClick={connect}> Connect to MetaMask</button>
          <button className="btn-dis"onClick={disconnect}>Desconnect</button>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
