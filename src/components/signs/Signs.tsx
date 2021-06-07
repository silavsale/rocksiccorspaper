import React, { useEffect, useState } from 'react';
import { Block } from '../../styled-components/blocks/block';
import Sign from '../sign/Sign';
import { ReactComponent as Rock } from  '../../assets/pic1_rock.svg';
import { ReactComponent as Paper } from  '../../assets/pic3_leaf.svg';
import { ReactComponent as Scissors } from  '../../assets/pic2_scissors.svg';
import randomSignChoise from '../../utils/random_choise';
import { FrameSelected } from '../../styled-components/elements/frameSelected';
import { Frame } from '../../styled-components/elements/frame';


function Signs(props:any) {

    const [parentCounter, setParentCounter] = useState(false);
    const [select, setSelect] = useState(false);
    const [robotSelect, setRobotSelect] = useState(false);
    const [signIcon, setSignIcon] = useState('');
    const [robotIcons, setRobotIcons] = useState([ 
      { name: 'rock', icon: <Rock/> },
      { name: 'paper', icon: <Paper/> }, 
      { name: 'scissors', icon: <Scissors/> }
    ]);

    const signs = [ 
      { name: 'rock', icon: <Rock/> },
      { name: 'paper', icon: <Paper/> }, 
      { name: 'scissors', icon: <Scissors/> }
    ]
    let newSigns: any = [ 
      { name: 'rock', icon: <Rock/> },
      { name: 'paper', icon: <Paper/> }, 
      { name: 'scissors', icon: <Scissors/> }
    ]
    const {user} = props;
    const randomChoise = randomSignChoise()
    // console.log('choise', randomChoise);

    if (parentCounter) {
      console.log('parentCounter user', user);
      console.log('randomChoise', randomChoise);
      setParentCounter(!parentCounter)
      setRobotSelect(!robotSelect)
      setSelect(!select)
      if (randomChoise == 'rock') {
        setRobotIcons([ 
          { name: 'rock', icon: <Rock/> },
          { name: 'rock', icon: <Rock/> },
          { name: 'rock', icon: <Rock/> },
        ])
      }
      if (randomChoise == 'paper') {
        setRobotIcons([ 
          { name: 'rock', icon: <Paper/> },
          { name: 'rock', icon: <Paper/> },
          { name: 'rock', icon: <Paper/> },
        ])
      }
      if (randomChoise == 'scissors') {
        setRobotIcons([ 
          { name: 'rock', icon: <Scissors/> },
          { name: 'rock', icon: <Scissors/> },
          { name: 'rock', icon: <Scissors/> },
        ])
      }
      console.log('newSigns', newSigns);
    }

    return (
      <div>
        <h1 style={{textAlign: 'center'}}>Human</h1>
        <Block>
            {
              signs.map((sign, index) => 
              <Sign key={index} user={user} sign={sign} select={select} setParentCounter={setParentCounter}/>
              )
            }
        </Block>
        <h1 style={{textAlign: 'center'}}>Robot</h1>
        { select ?
            <Block>
                <FrameSelected>
                { robotIcons[0].icon }
                </FrameSelected>
                <FrameSelected>
                { robotIcons[1].icon }
                </FrameSelected>
                <FrameSelected>
                { robotIcons[2].icon }
                </FrameSelected>
            </Block>
          :
            <Block>
                <Frame>
                  { robotIcons[0].icon }
                </Frame>
                <Frame>
                  { robotIcons[1].icon }
                </Frame>
                <Frame>
                  { robotIcons[2].icon }
                </Frame>
            </Block>
          }
      </div>
    );
}

export default Signs;
