import React, { useState, useEffect } from "react";
import D1 from "../../pages/D1";
const Practice = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [people, setPeople] = useState([]);

  const [showText, setShowText] = useState(false);

  const handleMouseEnter = (e) => {
    e.target.style.background = "#b30000";
    setShowText(true);
  };
  const handleMouseLeave = (e) => {
    e.target.style.background = "black";
    setShowText(false);
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && mail) {
      const details = { name, mail };
      setPeople((people) => {
        return [...people, details];
        // return [people, details];?? add det back to back
      });
      setName("");
      setMail("");
    } else {
      console.log(" details");
    }
  };

  return (
    <div>
      <div style={styles.header}>
        <D1 />
      </div>
      <div>
        <div style={styles.main}>
          <form style={styles.form} onSubmit={handleSubmit}>
            <h1 style={styles.h1}>Registration Form</h1>
            <div style={styles.Name}>
              <label> Name: </label>
              <input
                type="text"
                id="Name"
                placeholder="Enter your name here"
                value={name}
                onChange={handleChange}
                style={styles.inputType}
              />
            </div>
            <div style={styles.Name}>
              <label> Email: </label>
              <input
                type="text"
                id="E-mail"
                placeholder="Enter your mail here"
                style={styles.inputType}
                value={mail}
                onChange={(e) => setMail(e.target.value)}
              />
            </div>

            {/* <button style={styles.button}  
       onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>Add Details</button>
          {showText && <h1>Hi ...!</h1>} */}
            <div
              style={styles.button}
              onClick={handleSubmit}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Add Details
            </div>
          </form>
          <div></div>
          {people.map((person) => {
            const { id, name, mail } = person;
            return (
              <div style={styles.onsubmit}>
                <div>
                  <h4>
                    <li>Name:{name}</li>
                  </h4>
                </div>
                <div>
                  {" "}
                  <p>
                    <li>Mail:{mail}</li>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Practice;
const styles = {
  form: {
    color: "black",
    background: "#f6f6f6",
    width: "400px",
    padding: "30px",
    marginLeft: "%",
    marginTop: "20%",
    borderRadius: "15px",
    marginLeft: "34%",
    marginTop: "10%",
  },
  inputType: {
    border: "#f6f6f6",
    width: "50%",
    color: "black",
    padding: "5px",
    borderRadius: "5px",
    marginTop: "10px",
  },
  button: {
    background: "black",
    border: "#1a8cff",
    padding: "7px",
    width: "25%",
    borderRadius: "5px",
    color: "white",
    marginLeft: "37%",
    marginTop: "24px",
    textAlign: "center",
  },
  Name: {
    marginLeft: "20%",
  },
  h1: {
    display: "flex",
    justifyContent: "center",
  },
  onsubmit: {
    color: "Black",
    // display:"flex",
    //  justifyContent:"center",
    padding: "10px",
    background: "#f6f6f6",
    marginTop: "10%",
    width: "440px",
    marginLeft: "34%",
  },
  // main: {
  //       display: "flex",
  //       justifyContent: "center",
  //       alignItems: "center",
  //       // height: "vh",
  //     },
};


// import React, { useEffect, useState } from 'react'

// // const Dummy = () => {
// //     // const[state,setState]=useState('Sudarsan')
// //     // const onChange=(e)=>{
// //     //     const newValue =e.target.value;
// //     //     setState(newValue)
// //     // }
// //     // const[me,setMe]=useState({firstName:" " ,  lastName:" "})
// //     let addnum = [4,5,6]
// //     let num = [1,2,3,...addnum]

// //     console.log(addnum)
// //     console.log(num)

// //     const [count, setCount] = useState(0)

// //     const name={
// //         fName:"Sudarsan",
// //         lName:"Perumal"
// //     }
// //     const Aname={
// //         ...name,
// //         rename:"velan",
// //         // lName:"Perumal"
// //     }
// //     console.log(Aname)

// //     return (
// //         <div>
// //             <h1> {count}</h1>
// //             {/* {console.log(count)} */}
// //             <button onClick={() => setCount((prevState) => prevState + 1)}>
// //                 + Increment
// //             </button>
// //             <button onClick={() => setCount((prevState) => prevState - 1)}>
// //                 - Decrement
// //             </button>
// //             <button onClick={() => setCount(0)}>reset</button>
// //             {/* <input  placeholder='Write here...' onChange={(e)=>{
// //                 console.log(e)
// //             }}/>
// //             {state} */}
// //             {/* <input type='text' value={me.firstName} onChange={e=>setMe({...me, firstName:e.target.value})}/>
// //             <input type='text' value={me.lirstName} onChange={e=>setMe({...me, lirstName:e.target.value})}/>
// //              My Name is {me.firstName}
// //               {JSON.stringify(me)} */}
// //         </div>
// //     )
// // }
// const Array = [
//     { id: '1', name: 'Sudarsan' },
//     { id: '2', name: 'Sai' },
//     { id: '3', name: 'Jeeth' },
//     { id: '4', name: 'Sreedhar' },
// ]
// const Books = [
//     {
//         id: '1',
//         title: 'Think and Grow Rich',
//         author: 'NAPOLEON HILL',
//         img: 'https://m.media-amazon.com/images/I/412k8mJUP6L._AC_UF452,452_FMjpg_.jpg',
//     },
//     {
//         id: '2',
//         title: 'The Power of Habit',
//         author: 'CHARLES DUHIGG',
//         img: 'https://m.media-amazon.com/images/I/41IhmDI07KL._AC_UF452,452_FMjpg_.jpg',
//     },
//     {
//         id: '3',
//         author: 'Ross Welford',
//         title: 'The 1000 year Old Boy',
//         img: 'https://m.media-amazon.com/images/I/415EJav3hrL._AC_UF452,452_FMjpg_.jpg',
//     },
// ]

// const BookList = () => {
//     return (
//         <div style={styles.main}>
//             {Books.map((book) => {
//                 return (
//                     <div>
//                         <Book key={book.id} {...book}></Book>
//                     </div>
//                 )
//             })}
//         </div>
//     )
// }

// const Book = ({ img, title, author }) => {
//     // const clickHandle = (e) => {
//     //     if (text === 'Sudarsan') {
//     //         setText('Sai')
//     //     } else {
//     //         setText('Velan')
//     //     }
//     // }
//     // const [text, setText] = useState('Sudarsan')
// //
//     // const [person, setPerson] = useState(Array)

//     // const removingItems = (id) => {
//     //     let newPerson = person.filter((people) => people.id !== id)
//     //     setPerson(newPerson)
//     // }

//     const [value,setValue]=useState(0)

//     const onClick=()=>{
//         setValue(0)
//     }
//     const intervalIncrease=()=>{
//         setTimeout(()=>{
//             setValue(value+1)
//         },2000)
//     }
//     return (
//         <div style={styles.book}>
//             <span style={styles.Image}>
//                 <img src={} />
//             </span>

//             <span style={styles.h1}>
//                 <h1> {title}</h1>
//             </span>

//             <span style={styles.Author}>
//                 <h4>{author} </h4>
//             </span>
//             {/* <button type="button" onClick={handleClick}>
//                 Click Here...!
//             </button>

//             <h1>{text}</h1>
//             <button type="button" onClick={clickHandle}>
//                 Press here..!
//             </button> */}

//             {/* <div style={styles.Array}>
//                 {person.map((props) => {
//                     const { id, name } = props
//                     return (
//                         <div key={id}>
//                             {name}

//                         </div>
//                     )
//                 })}
//             </div>
//              */}
//             {value}
//             <button onClick={()=>setValue(value+1)}>Increment</button>
//             <button onClick={()=>setValue(value-1)}>Decrement</button>
//             <button onClick={onClick}>Reset </button>

//          <h1>{value}</h1>
//          <h1>   <button  style={styles.dummybtn} onClick={intervalIncrease}>Increment after 2sec</button></h1>
//         </div>
//     )
// }

// export default BookList

// const styles = {
//     main: {
//         margin: '0%',
//     },
//     h1: {
//         color: 'Black',
//         fontWeight: '700',
//     },
//     booklist: {
//         width: '90vw',
//         margin: '5rem auto ',
//         display: 'flex',
//         flexDirecton: 'row',
//     },
//     book: {
//         background: '#f6f6f6',
//         borderRadius: '10px',
//         padding: '15px',
//         margin: '450px',
//         marginTop: '10%',
//     },
//     Image: {
//         alignItems: 'center',
//         padding: '100px',
//     },
//     Author: {
//         color: '#6179d8',
//         letterSpacing: '2.5px',
//     },
//     Array: {
//         padding: '10px',
//         color: 'Black ',
//         background: '#f6f6f6',
//     },
//     dummybtn: {
//         color: 'white',
//         background: 'Green',
//         padding: '10px',
//         borderRadius: '5px',
//         marginLeft: '40%',
//         border: 'Green',
//     },
//     removebtn: {
//         color: 'white',
//         background: '#4863A0',
//         padding: '5px',
//         borderRadius: '5px',
//         border: '#7FFFD4',
//     },
// }
