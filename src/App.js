import { useState } from "react";
import './App.css';

import Checkout from './pages/checkout'
import FormData from './pages/formData'

function App() {

  const [generateReceipt, setGenerateReceipt] = useState(false)
  const [formFields, setFormFields] = useState({})

  const toggleReceipt = (content) =>{
    console.log("Toggle called::", generateReceipt, content);
    setGenerateReceipt(!generateReceipt)
    setFormFields(content)
    
  }

  return (
    <div className="App">
      {
        generateReceipt ? <Checkout formFields={formFields} /> : <FormData toggleReceipt={toggleReceipt} />
      }
    </div>
  );
}

export default App;
