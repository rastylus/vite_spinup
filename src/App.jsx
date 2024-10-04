import { useState } from 'react'
import './App.css'
import { useForm } from "react-hook-form";

function App() {

  const currentDate = new Date().toDateString();

  const [inputValue, setInputValue] = useState("");
  const [inputMaker, setInputMaker] = useState("");
  const [inputBatch, setInputBatch] = useState("");
  const [inputSku, setInputSku] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleMakerInputChange = (event) => {
    setInputMaker(event.target.value);
  };  
  
  const handleBatchInputChange = (event) => {
    setInputBatch(event.target.value);
  };

  const handleSkuInputChange = (event) => {
    setInputSku(event.target.value);
  };


  return (
    <>
        <div>
          <h3>batch receipt</h3>
          {/* <input type="text" value={inputValue} onChange={handleInputChange} /> */}
          <div>
            <label for="date">made on  : {currentDate}</label>
          </div>
          <div>
            <label for="maker">name </label>
          <input type="text" id='maker' value={inputMaker} onChange={handleMakerInputChange} />
          </div>
          <div>
            <label for="batch">batch # </label>
            <input type="text" id='batch' value={inputBatch} onChange={handleBatchInputChange} />
          </div>
          <div>
            <label for="sku">sku </label>
            <input type="text" id='sku' value={inputSku} onChange={handleSkuInputChange} />
          </div>
          <div>
            <button>print</button>
          </div>
          <div>
            <label for="peas">Do you like peas?</label>
            <input type="checkbox" name="peas" id="peas" />
          </div>
        </div>

        <div>
          <p>{inputMaker}</p>
          <p>{inputBatch}</p>
          <p>{inputSku}</p>
        </div>


    </>
  );
}

export default App
