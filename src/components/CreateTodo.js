import React, {useState} from 'react'


function CreateTodo() {
  const [newItem,setNewItem] = useState("");
  const [items,setItems] = useState([]);
  
  function addItem() {
     if (!newItem){
       alert("Enter Your List");
       return;
     }
    const item = {
      id:Math.floor(Math.random()*1000),
      value:newItem
    };
    setItems(oldList => [...oldList,item]);
    setNewItem("");
  }
  function deleteItem(id){
    const newArray =items.filter(item => item.id !== id);
    setItems(newArray);
  }

  

  return (
   
    <div className='box'>
      <div className='text-end'>
           <h2 className='hedding'>Publisher</h2>
      <div className='text-add'>
          <input 
          type="text" name="Publisher" placeholder="Write Here..." 
            value={newItem}
            onChange={e => setNewItem(e.target.value)}
          />
          <button  onClick={() => addItem()} className='btn-addList' type='button' name='addList' > Add </button>
      </div>
         <ul>
           {items.map(item => {
             return(
               <li key={item.id}> {item.value} 
               <button onClick={() => deleteItem(item.id)}>X</button>
               </li>
             )
           })}
         </ul>
      </div>
    </div>
    
   
  )
}

export default CreateTodo
