import "./App.css";
import Background from "./Component/backgroundUpper/Background";
import { useState } from "react";

function App() {
  const NEED_HELP = 'need help?'
  const CLOSE_HELP = 'close bot'
  const [bot, setBot] = useState(false);
  const onClickHandler = () => {
    setBot(!bot);
    console.log(bot);
  };
  return (
    <div className="main">
      <h1 className="headerMain">Chatbot UI</h1>
      <button className="bot-btn" onClick={onClickHandler} >
        {bot ? CLOSE_HELP : NEED_HELP}
      </button>
      <div className={bot ? 'background' : 'hidden'}>

        <Background show={bot} hide={onClickHandler} className='background' />
      </div>
    </div>
  );
}

export default App;
