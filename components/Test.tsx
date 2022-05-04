import React, { useState } from 'react';
import { Data, Icon } from './styledComponents';
import { gsap } from 'gsap';

type TestProps = {
  data: string;
};

const Test = ({ data }: TestProps) => {
  const [activeProps, setActiveProps] = useState(false);
  const [activateIcon, setActivateIcon] = useState<null | string>(null);
  return (
    <div>
      <Data style={{overflow: 'hidden'}} activeProps={activeProps}>
        props: {data} <Icon className='box' activateicon={activateIcon} />{' '}
      </Data>
      <button
        onClick={() => {
          setActiveProps(!activeProps);
          if (!activateIcon) {
            setActivateIcon('open');
            gsap.to('.box', { rotation: 75, x: 2000, duration: 1 });
        } else {
            setActivateIcon(null);
            gsap.to('.box', { rotation: 0, x: 0, duration: 1 });
          }
        }}
      >
        click
      </button>
    </div>
  );
};

export default Test;
