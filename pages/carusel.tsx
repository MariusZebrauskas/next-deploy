import React from 'react';
import styled from 'styled-components';

const DifferentButton = styled.a`
  color: red;
`;

const Wrapper = styled.div`
  width: 100%;
  margin-top: 10rem;
`;

const Box = styled.section`
  width: 50%;
`;
const carusel = () => {
  return (
    <Wrapper className='flex justify-center items-center'>
      <Box>
        <div className='carousel w-full'>
          <div id='item1' className='carousel-item w-full'>
            <img
              src='https://api.lorem.space/image/car?w=800&h=200&hash=8B7BCDC2'
              className='w-full'
            />
          </div>
          <div id='item2' className='carousel-item w-full'>
            <img
              src='https://api.lorem.space/image/car?w=800&h=200&hash=500B67FB'
              className='w-full'
            />
          </div>
          <div id='item3' className='carousel-item w-full'>
            <img
              src='https://api.lorem.space/image/car?w=800&h=200&hash=A89D0DE6'
              className='w-full'
            />
          </div>
          <div id='item4' className='carousel-item w-full relative '>
            <img
              src='https://api.lorem.space/image/car?w=800&h=200&hash=225E6693'
              className='w-full'
            />
            <button className='absolute bottom-0 text-tahiti '>nice function</button>
          </div>
        </div>
        <div className='flex justify-center w-full py-2 gap-2'>
          <a href='#item1' className='btn btn-xs'>
            1
          </a>
          <a href='#item2' className='btn btn-xs'>
            2
          </a>
          <DifferentButton href='#item3' className='btn btn-xs '>
            3
          </DifferentButton>
          <a href='#item4' className='btn btn-xs'>
            4
          </a>
        </div>
      </Box>
    </Wrapper>
  );
};

export default carusel;
