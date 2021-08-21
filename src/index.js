import ReactDOM from 'react-dom';
import React from 'react';

//css
import  './index.css';

 const books =[
 {
   id:1,
   title: "Who Will Cry When You Die?",
   writer: "by Robin Sharma",
   image : "https://m.media-amazon.com/images/I/81XCK1VLh8L._AC_UY218_.jpg",
   
  },

  {
    id:2,
    title : "Malibu Rising: A Novel",
    writer : "by Taylor Jenkins Reid ",
    image : "https://m.media-amazon.com/images/I/914BkcGCNgS._AC_UY218_.jpg",
    
   },

   {
      id:3,
      title : "Her Last Holiday",
      writer : "by C.L. Taylor",
      image : "https://m.media-amazon.com/images/I/81UHQx0uLuL._AC_UY218_.jpg",
      
   },

 ]


const BookShop = () =>{
   return(
     <section className='booklist'>
       {books.map((book)=>{
         
         return(
           <Book key={book.id} book={book}></Book>
         )
         
       })}
     </section>
  
  )
}

const Book=(props)=>{
  const {title,writer,image} = props.book;

  const clickHandler=()=>{
    alert('clicked')
  }


  return(
    <article className='book'>
      <img src={image} alt="" />
      <h1>{title}</h1>
      <p>{writer}</p>
      <button type="button" onClick={clickHandler}> Click </button>
    </article>

  )
}

ReactDOM.render(<BookShop/>,document.getElementById('root'))




