import React, { useState } from 'react'
import {AddCategory,GifGrid} from './components';
export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['one punche']);
    
    
     const onAddCategory=(newCategory)=>{
        //categories.push('Valorant');Esto no se puede hacer en react porque no mutan los elementos o algo asi. Los de abajo si es valido.
        //console.log(newCategory);
        if(categories.includes(newCategory)) return; //verifica si es que el nuevo elemento ya incluye dentro del arreglo y si si, entonce termina el evento
        setCategories([newCategory,...categories]);
        //setCategories(cat=>[...categories,'Valorant']);

    }
  return (
    <>
        
         <h1>GifExpertApp</h1>

        <AddCategory 
       
        onNewCategory={(event)=>onAddCategory(event)}
        />
         
            {categories.map(category =>{
                return <GifGrid key={category} category={category}/>
            })}
        
    </>
  )
}
