import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/Header'
import { Form } from './components/Form/Form'
import { Products } from './components/products/Products'
import { Button } from './components/Button'


function App() {
  const products = [
    {
      title : "Product 1",
      price: 100,
      description: "This is product 1",
      rate : 5
    },
    {
      title : "Product 2",
      price: 200,
      description: "This is product 2",
      rate : 4
    },
    {
      title : "Product 3",
      price: 300,
      description: "This is product 3",
      rate : 3
    }
  ]
//annonymous function
  function sayHello() {
    alert("Hello Susana 🥰");  
    smileFunction();
  }

  //arrow function more than one line
  const smileFunction = () => {
    alert("smile Susana 🥰");
    console.log("you deserve 🥰");  
    smileFunction2();
  }

  //arrow function one line
  const smileFunction2 = () => console.log("🎁");

  const helloFunction = (name) => {
    name =prompt("Please enter your name");
    alert(`Hello ${name} 🥰`);
  }

  //useState 
  const [count, setCount] = useState(0);
  
  //useState with object
  const [user, setUser] = useState({ fName: "Susana", lName: "Sameh", age: 32 });
  
  //useState with input value
  const [inputValue, setInputValue] = useState("");


  //form with useState
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const handleSubmit =(e) => {
    e.preventDefault();
    if (nameInput === "" || nameInput.length < 3) {
      alert("Please enter your name");
      return;
    }
    if (emailInput === "" || !emailInput.includes("@")) {
      alert("Please enter a valid email");
      return;
    }
    if (passwordInput.length < 8 || passwordInput === "") {
      alert("Password must be at least 8 characters");
      return;
    }
    // console.log(nameInput);
    // console.log(emailInput);
    // console.log(passwordInput);
    //if the key of object the same like value of input we can use object destructuring
    // console.log({nameInput, emailInput, passwordInput});
    
    //send this data to backend api 
    console.log({ name: nameInput, email: emailInput, password: passwordInput });
    clearInputs();
  }
  function clearInputs() {
    setNameInput("");
    setEmailInput("");
    setPasswordInput("");
  }

  return (
    <>
      {/* <Header />
      <Form />
      <Products products={products}/> */}
      {/* <button className='bg-slate-900 text-white px-4 py-2 rounded-lg' type="button" onClick={sayHello}>Click me</button>
      <button className='bg-amber-600 text-white px-4 py-2 rounded-lg' type="button" onClick={() => alert("Hello Susana 🥰")}>arrow function</button>
      <button className='bg-amber-600 text-white px-4 py-2 rounded-lg' type="button" onClick={(e) => console.log(e.target)}>Event Target</button>
      <button style={{backgroundColor : "red"}} type="button" onClick={() => helloFunction()}>Hello Function</button> */}
      {/* <Button
        text="Click Me"
        onClick={sayHello} />
      
      <Button
        text="Click Me 2"
        onClick={helloFunction} /> */}

      {/* using span instead of text props*/}
      {/* <Button onClick={() => alert("Hello Susana 🥰")}>
        <span>Hello</span>
      </Button> */}

      {/* <div className="text-center border-2 border-red-900">
        <h3>Count : {count}</h3>
        <Button onClick={() => setCount(count + 1)}>Increment</Button>
        // using prev to get the previous value
        <Button onClick={() => setCount((prev) => prev - 1)}>Decrement</Button>
        <Button onClick={() => setCount(0)}>Reset</Button>
      </div> */}

      {/* <div className="text-center border-2 border-red-900">
        <h3>
          Name : {user.fName} {user.lName}
        </h3>
        <h3>Age : {user.age}</h3>
        <Button
          onClick={() =>
            //to keep the previous value we use prev like this 
            //to change only one value (lName) we use prev like this
            setUser((prev) => {
              return { ...prev, lName: "Boctor" };
            })
          }
        >
          Change Name
        </Button>
        <Button onClick={() => setUser({ ...user, age: user.age + 1 })}>
          Change Age
        </Button>
      </div>

      <div className="text-center border-2 border-red-900">
        <label htmlFor="name">Name : </label>
        <input type='text' id='name' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />    

      </div>
          <span>Your name is : {inputValue}</span> */}

      <div>
        <form action="" className="flex flex-col m-3 bg-stone-100 p-2 border-violet-500 border-2 " onSubmit={handleSubmit}>
          <div>
          <label htmlFor="name">Name : </label>
          <input
            type="text"
            id="name"
              name="name"
              value={nameInput}
              className="border m-auto w-6/12 hover:bg-amber-50 hover:text-amber-600 hover:border-amber-600"
              onChange={(e) =>setNameInput(e.target.value)}
            />
            {/* {console.log(nameInput)} */}
          </div>

          <div>
             <label htmlFor="email">Email : </label>
          <input
            type="email"
            id="email"
              name="email"
              value={emailInput}
              className="border m-2 w-6/12 hover:bg-amber-50 hover:text-amber-600 hover:border-amber-600"
              onChange={(e) => setEmailInput(e.target.value)}
              
            />
            {/* {console.log(emailInput)} */}
          </div>
         
          <div>
            <label htmlFor="password">Password : </label>
          <input
            type="password"
            id="password"
              name="password"
              value={passwordInput}
            className="border m-2 w-6/12 hover:bg-amber-50 hover:text-amber-600 hover:border-amber-600"
            onChange={(e) => setPasswordInput(e.target.value)}
            />
            {/* {console.log(passwordInput)} */}
          </div>
         

          <Button type="submit">Submit</Button>
        </form>
      </div>
    </>
  );
}

export default App


//hooks is a small function do something
//hooks name refered to it's function
//DOM two types virtual dom(memory) and real dom(browser)
//state is a storage data in virsual dom memory like localstorage or sessionstorage
//render is a function that convert virtual dom to real dom
//component is a function that return html
//with useState we rerender the component
//useState is destructuring array like [value, setValue] 
//useState is a function that return array
//useState is a hook that return state and setState
//we useState by making variable like const [value(name of the variable or state to can use in jsx), setValue] = useState(initialValue)