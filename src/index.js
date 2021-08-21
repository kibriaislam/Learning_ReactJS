import ReactDOM from 'react-dom';
import React from 'react';

//css
import  './index.css';


const BookShop = () =>{
   return(
     <section className='booklist'>
       <Book/>
       <Book/>
       <Book/>
       <Book/>
       <Book/>
       <Book/>

     </section>
  
   )
 }


const Book=()=>{
  let image = "https://m.media-amazon.com/images/I/81XCK1VLh8L._AC_UY218_.jpg";
  let title = "Who Will Cry When You Die?"
  let writer = "by Robin Sharma"
  return(
    <article className='book'>
      <img src={image} alt="" />
      <h1>{title}</h1>
      <p>{writer}</p>
    </article>

  )
}

ReactDOM.render(<BookShop/>,document.getElementById('root'))




