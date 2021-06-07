import React, { useState } from 'react';
import Signs from './components/signs/Signs';
import { Body } from './styled-components/blocks/body';
import { H2 } from './styled-components/elements/h2';
import { Title } from './styled-components/elements/title';
import { Counter } from './styled-components/elements/counter';
import { Button } from './styled-components/elements/button';

function App() {
  const [timerClicked, setTimerClicked] = useState(false);
  const [time, setTime] = useState(0);
  const user = ['Human', 'Robot']
  const message = ['Press Start','3', '2', '1', 'GO']
  let count = 0;

  const onButtonClick =()=>{
    setTimerClicked(!timerClicked)

    let interval = setInterval(function(){
        count += 1;
        if(count === 4){
            clearInterval(interval);
            setTimerClicked(!!timerClicked)
        }
        setTime(count)
    }, 1000);
  }

  return (
    <Body>
     <div>
      <Title>Rock Paper Scissors</Title>
      <div style={{textAlign:"center"}}>
        <Button disabled={timerClicked} onClick={()=> onButtonClick()} style={{color: "darkGreen", fontSize: "35px"}} >
          Start
        </Button>
      </div>
      <Counter>
        {message[time]}
      </Counter>
     </div>
      <div>
        <H2>User</H2>
        <Signs user={user[0]}/>
      </div>
    </Body>
  );
}

export default App;
