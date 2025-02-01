import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
// import Car from './Car.js';
// import ReactDOM from 'react-dom/client';

// // const myFirstElement = <h1>My First React App!</h1>

// // class Car {
// //   constructor(name) {
// //     this.brand = name;
// //   }

// //   present() {
// //     return 'I have a ' + this.brand;
// //   }
// // }

// // class Model extends Car {
// //   constructor(name, mod) {
// //     super(name);
// //     this.model = mod;
// //   }

// //   show() {
// //     return this.present() + ', and it is a ' + this.model + '!';
// //   }
// // }

// // const myCar = new Model("Ford", "Mustang");

// // hello = (val) => "Hello " + val;
// // console.log(hello("World!"));
// // document.getElementById("demo").innerHTML = hello("World");

// const myFirstElement = (
//   <div>
//     <h1>My First React App!</h1>
//     <p id="demo"></p>
//     <button id="btn">Change Color</button>
//     <h1>Hello World!</h1>
//     <h2>React is awesome!</h2>
    
//     <p>React is a JavaScript library for building user interfaces.</p>

//     <p>React makes it easy to create interactive UIs.</p>

//     <p>Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.</p>

//     <p>Declarative views make your code more predictable and easier to debug.</p>
//   </div>
// );


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(myFirstElement);

// class Header {
//   constructor() {
//     this.color = "Red";
//   }

//   // Render method
//   changeColor = function() {
//     document.getElementById("demo").innerHTML += this.color;
//   }
// }

// const myHeader = new Header();

// window.addEventListener("load", myHeader.changeColor);

// document.getElementbyId("btn").addEventListener("click", myHeader.changeColor);

// const myArray = ['apple', 'banana', 'orange'];

// const [first, second, third] = myArray;

// console.log(first);
// console.log(second);
// console.log(third);

// .map() method creates a new array with the results of calling a function for every array element.
// const myList = myArray.map((item) => <p>{item + ' lol'}</p>)

// const container = document.getElementById('root');
// const root = ReactDOM.createRoot(container);
// root.render(myList);

// this is called a fragment. It is used to group multiple elements together.

// const myElement = (
//     <>
//       <p className='myClass'>I am a paragraph.</p>
//       <p className='myClass'>I am a paragraph too.</p>
//     </>
//   );

// const x = 10;

// const myElement = <h1>{(x) < 10 ? "Hello" : "Goodbye"}</h1>;

// class Car extends React.Component {
//     render() {
//         return <h2>Hi, I am a Car!</h2>;
//     }
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Car />);
// function MissedGoal() {
//     return <h1>MISSED!</h1>;
//   }
  
//   function MadeGoal() {
//     return <h1>Goal!</h1>;
//   }

// function Goal(props) {
//     const isGoal = props.isGoal;
//     if (isGoal) {
//       return <MadeGoal/>;
//     }
//     return <MissedGoal/>;
//   }
  
//   const root = ReactDOM.createRoot(document.getElementById('root'));
//   root.render(<Goal isGoal={false} />);

// function Garage(props) {
//     const cars = props.cars;
//     return (
//       <>
//         <h1>Garage</h1>
//         {cars.length > 0 &&
//           <h2>
//             You have {cars.length} cars in your garage.
//           </h2>
//         }
//       </>
//     );
//   }
  
//   const cars = ['Ford', 'BMW', 'Audi'];
//   const root = ReactDOM.createRoot(document.getElementById('root'));
//   root.render(<Garage cars={cars} />);

// function Goal(props) {
//     const isGoal = props.isGoal;
//     return (
//       <>
//         { isGoal ? <MadeGoal/> : <MissedGoal/> }
//       </>
//     );
//   }
  
//   const root = ReactDOM.createRoot(document.getElementById('root'));
//   root.render(<Goal isGoal={false} />);

// function MyForm() {
//     const [inputs, setInputs] = useState({});
  
//     const handleChange = (event) => {
//       const name = event.target.name;
//       const value = event.target.value;
//       setInputs(values => ({...values, [name]: value}))
//     }
  
//     const handleSubmit = (event) => {
//       event.preventDefault();
//       alert(inputs);
//     }
  
//     return (
//       <form onSubmit={handleSubmit}>
//         <label>Enter your name:
//         <input 
//           type="text" 
//           name="username" 
//           value={inputs.username || ""} 
//           onChange={handleChange}
//         />
//         </label>
//         <label>Enter your age:
//           <input 
//             type="number" 
//             name="age" 
//             value={inputs.age || ""} 
//             onChange={handleChange}
//           />
//           </label>
//           <input type="submit" />
//       </form>
//     )
//   }
//   function MyForm() {
//     const [myCar, setMyCar] = useState("Volvo");
  
//     const handleChange = (event) => {
//       setMyCar(event.target.value)
//     }
  
//     return (
//       <form>
//         <select value={myCar} onChange={handleChange}>
//           <option value="Ford">Ford</option>
//           <option value="Volvo">Volvo</option>
//           <option value="Fiat">Fiat</option>
//         </select>
//       </form>
//     )
//   }

// function MyForm() {
//     const [textarea, setTextarea] = useState(
//       "The content of a textarea goes in the value attribute"
//     );
  
//     const handleChange = (event) => {
//       setTextarea(event.target.value)
//     }
  
//     return (
//       <form>
//         <textarea value={textarea} onChange={handleChange} />
//       </form>
//     )
//   }

//   const root = ReactDOM.createRoot(document.getElementById('root'));
//   root.render(<MyForm />);

// function Garage() {
//     return (
//         <div>
//             <h1>Who lives in my Garage?</h1>
//             <Car color="red" />
//         </div>
//     );
// }

// const container = document.getElementById('root');
// const root = ReactDOM.createRoot(container);
// root.render(<Garage />);

export default function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// // reportWebVitals();