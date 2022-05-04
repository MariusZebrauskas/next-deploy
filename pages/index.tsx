import Link from 'next/link';
import axios from 'axios';
import { useState } from 'react';

export default function Home() {
  const [data, setData] = useState('');
  const [postData, setPostData] = useState(' ');

  const getData = () => {
    axios
      .get('http://localhost:3000/api/test')
      .then((data) => setData(data.data.message))
      .catch((err) => console.log(err));
  };


  const postDataDB = () => {
    axios
      .post('https://jsonplaceholder.typicode.com/posts', {name: 'post'})
      .then((data) =>setPostData(data.data.id))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <button>
        <Link href='/test'>test</Link>
      </button>
      <br />
      <br />
      <button onClick={getData}>get from lambda</button>
      <br />
      <br />
      <br />
      <button onClick={postDataDB}>post</button>
      <br />
    
      <br />
      <br />
      <p style={{color:"red"}}>

      {data}
      </p>
      <br />
     
      <br />
      <br />
      <p style={{color:"blue"}}>{postData}</p>
    </div>
  );
}
