import React from 'react';
import './style.css';
import Name from './Name';
import Image from './Image';
import Retweets from './Retweets';
import Endbar from './Endbar';

export default function App() {
  return (
    <div className="component">
      <Name className="c1"/>
      <Image className="c1" />
      <Retweets className="c1" />
      <Endbar className="c1" />
    </div>
  );
}
