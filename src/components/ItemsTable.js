import React from 'react';
import {Icon} from 'react-icons-kit'
import {trash} from 'react-icons-kit/feather/trash'

const ItemsTable = ({items, deleteItem}, index) => {
  return items.map(item=>(
    <tr key={item.itemName}> 
      <td>{item.itemName}</td>
      <td>{item.price}</td>
      <td>{item.stocks}</td>
      <td className='btn' onClick={()=>deleteItem(item.itemName)}>
        <Icon className='icon' icon={trash}></Icon>
      </td>
    </tr>
  ))
}
 
export default ItemsTable;