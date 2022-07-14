import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/chat/Header';
import MessageList from './components/message-list/index';



const root = ReactDOM.createRoot(document.getElementById('root'));
function AppContainer () {

  const [currentContact, setCurrentContact] = useState(null);

  function giveData(data){
    // currentContact = data;
    setCurrentContact(data);
  }
  return <React.StrictMode>
  <>
    <MessageList callback = {giveData} />
    <Header contactData={currentContact} />
  </>
</React.StrictMode>
}
root.render(<AppContainer/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

