import React from 'react'
import lists from './lists'

const Shopping = (props) => {
  const lists = props.lists;
  // const listItems = lists.map((list)=>
  //   <li>{props.list}</li>
    
  return (
      <ul>
        {lists}
      </ul>
  );
}


export default Shopping
