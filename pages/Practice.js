import React, { useState } from "react";
const Practice = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [people, setPeople] = useState([]);

  const handleChange = (e) => {
    setName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && mail) {
      const details = { name, mail };
      setPeople((people) => {
        return [...people, details];
        // return [...people, details];??
      });
      setName("");
      setMail("");
    } else {
      console.log(" details");
    }
  };
  return (
    <>
    <form style={styles.form} onSubmit={handleSubmit}>
    
    <h1 style={styles.h1}>Registration Form</h1>
      <div style={styles.Name}>
      
        <label > Name: </label>
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
     
      <button style={styles.button}>Add Person</button>
    </form>
    {
      people.map((person)=>{
         const{id,name,mail}=person
        return <div style={styles.onsubmit}>
         <div><h4>Name:{name}</h4></div>
        <div> <p>Mail:{mail}</p></div>
        </div>
      })
    }

</>

  );
};

export default Practice;

const styles = {
  form: {
    color: "black",
    background: "#00cccc",
    width: "400px",
    padding: "30px",
    marginLeft:"35%",
    marginTop:"20%"
   
  },
  inputType: {
    border: "#f6f6f6",
    width: "50%",
    color: "black",
    padding: "5px",
    borderRadius: "5px",
    marginTop:"10px",
  },
  button: {
    background: "black",
    border: "#1a8cff",
    padding: "7px",
    width: "25%",
    borderRadius: "5px",
    color: "white",
    marginLeft:"37%",
    marginTop:"24px"
  },
  Name:{
    marginLeft:"20%"
  },
  h1:{
    display:"flex",
    justifyContent:"center",

  },
  onsubmit:{
    color:"Black",
    // display:"flex",
    //  justifyContent:"center",
     padding:"10px",
     background:"#f6f6f6",
     marginTop:"10%",
     width: "440px",
     marginLeft:"35%",
  }
  
};
