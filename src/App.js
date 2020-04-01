import React, {useState} from 'react';
import Screen from './components/Screen/Screen'
import Button from './components/Button/Button'
import './App.css';

function App() {
  const [screenText, setScreen] = useState('0')
  function handleClick(text) {
    if (text === '=') {
      const screenSplit = screenText.split(' ')
      if (screenSplit.length <= 2) {
        setScreen('error')
      } else if (screenSplit.length > 3) {
        setScreen('error')
      } else if (screenSplit[1] === '÷') {
        setScreen((screenSplit[0] / screenSplit[2]).toString())
      } else if (screenSplit[1] === '×') {
        setScreen((screenSplit[0] * screenSplit[2]).toString())
      } else if (screenSplit[1] === '-') {
        setScreen((parseFloat(screenSplit[0]) - parseFloat(screenSplit[2])).toString())
      } else if (screenSplit[1] === '+') {
        setScreen((parseFloat(screenSplit[0]) + parseFloat(screenSplit[2])).toString())
      } else {
        setScreen('error')
      }
    } else if (screenText === '0' && text !== '⇐') {
      setScreen(text)
    } else if (text === '⇐' || text === 'clr') {
      if (screenText.length === 1 || screenText === 'error' || text === 'clr') {
        setScreen('0')
      } else {
        setScreen(screenText.substring(0, screenText.length - 1))
      }
    } else if (text === '÷' || text === '×' || text === '-' || text === '+' || text === 'y²' || text === '1/x' || text === '√') {
      switch (text) {
        case '÷':
          setScreen(screenText + ' ÷ ')
        break;
        case '×':
          setScreen(screenText + ' × ')
        break;
        case '-':
          setScreen(screenText + ' - ')
        break;
        case '+':
          setScreen(screenText + ' + ')
        break;
        case 'y²':
          if (screenText.split(' ').length > 1) {
            setScreen('error')
          } else {
            setScreen((parseFloat(screenText) ** 2).toString())
          }
        break;
        case '√':
          if (screenText.split(' ').length > 1) {
            setScreen('error')
          } else {
            setScreen(Math.sqrt(parseFloat(screenText)).toString())
          }
        break;
        default:
          setScreen('error')
        break;
      }
    } else {
      setScreen(screenText + text)
    }
  }

  return (
    <main className='container'>
      <Screen screenText={screenText}/>
      <div className='button-box'>
        <Button text={'7'} handleClick={handleClick}/>
        <Button text={'8'} handleClick={handleClick}/>
        <Button text={'9'} handleClick={handleClick}/>
        <Button text={'÷'} handleClick={handleClick}/>
        <Button text={'⇐'} handleClick={handleClick}/>
      </div>
      <div className='button-box'>
        <Button text={'4'} handleClick={handleClick}/>
        <Button text={'5'} handleClick={handleClick}/>
        <Button text={'6'} handleClick={handleClick}/>
        <Button text={'×'} handleClick={handleClick}/>
        <Button text={'y²'} handleClick={handleClick}/>
      </div>
      <div className='button-box'>
        <Button text={'1'} handleClick={handleClick}/>
        <Button text={'2'} handleClick={handleClick}/>
        <Button text={'3'} handleClick={handleClick}/>
        <Button text={'-'} handleClick={handleClick}/>
        <Button text={'√'} handleClick={handleClick}/>
      </div>
      <div className='button-box'>
        <Button text={'0'} handleClick={handleClick}/>
        <Button text={'.'} handleClick={handleClick}/>
        <Button text={'='} id='equals' handleClick={handleClick}/>
        <Button text={'+'} handleClick={handleClick}/>
        <Button text={'clr'} id='clear' handleClick={handleClick}/>
      </div>
    </main>
  );
}

export default App;
