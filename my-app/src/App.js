
import Button from './Components/Button';
import './App.css'
import Display from './Components/Display';
import { useState } from 'react';

function App() {

  const [numberClicked, setnumberClicked] = useState({
    currentNumber : 0, 
    totalNumber : 0, 
    isFirstClick: true,
    preOPs: ''
  })

  function handleNumber(event) {
    let number = event.target.innerText

    if (!numberClicked.isFirstClick) {
       number = numberClicked.currentNumber + number 
    }
      
    setnumberClicked({currentNumber: number, totalNumber: numberClicked.totalNumber, isFirstClick: false, preOPs: numberClicked.preOPs} )
  }

  function renderNumber (){
    return numberClicked.currentNumber
  
  }

  function handleOperator(event){
    let operator = event.target.innerText
    const total = doCalculation()

    setnumberClicked({currentNumber: total.toString(), totalNumber: total.toString(), isFirstClick: true, preOPs: operator})
  }

  function doCalculation () {
    let total = parseInt(numberClicked.totalNumber)
      switch(numberClicked.preOPs) {
        case '+':
        total += parseInt(numberClicked.currentNumber);
        break; 
        case '_':
        total -= parseInt(numberClicked.currentNumber);
        break; 
        case '*':
        total *= parseInt(numberClicked.currentNumber);
        break;
        case '/':      
        total /= parseInt(numberClicked.currentNumber);
        break;  
        default: 
        total = parseInt(numberClicked.currentNumber)

      }

    return total
  }

  function handleClear () {
    setnumberClicked({
    currentNumber : 0, 
    totalNumber : 0, 
    isFirstClick: true,
    preOPs: ''
    })
  }

  return (
    <div className="container">
        <div className="calculator">
        <Display value={renderNumber()}/>

        <Button value='7' onClick={handleNumber}/>
        <Button value='8' onClick={handleNumber}/>
        <Button value='9' onClick={handleNumber}/>
        <Button value='/' className='operator' onClick={handleOperator}/>

        <Button value='4' onClick={handleNumber}/>
        <Button value='5' onClick={handleNumber}/>
        <Button value='6' onClick={handleNumber}/>
        <Button value='*' className='operator' onClick={handleOperator} />

        <Button value='1' onClick={handleNumber}/>
        <Button value='2' onClick={handleNumber}/>
        <Button value='3' onClick={handleNumber}/>
        <Button value='_' className='operator'  onClick={handleOperator}/>

        <Button value='C'  onClick={handleClear}/>
        <Button value='0' onClick={handleNumber}/>
        <Button value='=' onClick={handleOperator}/>
        <Button value='+' className='operator' onClick={handleOperator}/>
        </div>
    </div>
  );
}

export default App;
