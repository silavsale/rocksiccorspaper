import React, { useState } from 'react';
import { Frame } from '../../styled-components/elements/frame';
// import randomSignChoise from '../../utils/random_choise';
import { FrameSelected } from '../../styled-components/elements/frameSelected';

function Sign(props: any) {
    const {sign, user, setParentCounter, select} = props
    const [selected, setSelected] = useState(false);
    // const [robotSelection, setRobotSelection] = useState('');
   
    const onClick = () => {
        setSelected(!selected)
        setParentCounter(true)
    }
    
  return (
    <div>
      {/* { selected || ( sign.name === robotSelection ) ? */}
      {/* { user === 'Robot' && selected? */}
      { selected ?
        <FrameSelected>
          { sign.icon }
        </FrameSelected> :
        <Frame onClick={()=> onClick()}>
          { sign.icon }
        </Frame>
      }
    </div>
  );
}

export default Sign;
