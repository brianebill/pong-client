import React from 'react';
import {
  List,
  ListItem,
} from 'Components';

export const BigShow = ({ winners }) => {
//   const sorted = () => {
      
//   };

  // play mp3


  return (
    <List>
      {winners.map(item => (
        <ListItem
         item={item}
         key={item.username}
        >
          Name: {item.username}
          Score: {item.score}
        </ListItem>
      ))}
    </List>
  );
};