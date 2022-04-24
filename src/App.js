import React from 'react';
import './style.css';
import Name from './Name';
import Image from './Image';
import Retweets from './Retweets';
import Endbar from './Endbar';

export default function App() {
  return (
    <div>
      <Name />
      <Image />
      <Retweets />
      <Endbar />
    </div>
  );
}
