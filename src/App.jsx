import { useState ,useEffect,useRef,useCallback,createContext ,useContext,useMemo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { use } from 'react'

// const ThemeContext = createContext();

function App() {
 

  // use state 01
  // const [count,setcount]=useState(0);


  // function increase() {
  //   setcount(count+1);
  // }
  // function Decrease() {
  //   if(count==0){
  //     console.log("error");
  //     return
      
  //   }
  //   setcount(count-1);
  // }

  // return(
  // <div>
  //   <p>count: {count}</p>
  //   <button onClick={()=>{increase()}}>Increment</button>
  //   <button onClick={()=>{Decrease()}}>Decrement</button>
  // </div>
  // )



  //use state 02
  // const[name,setname]=useState("");

  // return(
  //   <>
  //   <input style={{width:"200px" ,padding:"10px"}}  value={name} placeholder='Enter name:' onChange={(e)=>setname(e.target.value)} />

  //   <p>your name:{name}</p>
  //   </>
  // )



  // use state 03
  // const[show,setshow]=useState(false);

  // return(
  //   <>
  //   <input type={(show ? "text" : "password") } style={{width:"200px" ,padding:"10px"}}  value={show} placeholder='Enter password:' />

  //   <button onClick={()=>{setshow(!show)}}>{show ? "hide" : "show"}</button>
  //   </>
  // )

  

  // useEffect 01
//  const [count,setcount]=useState(0);



//   useEffect(()=>{
//     console.log(`one before count: ${count-1}`);
    
//   },[count])



//   return(
//   <div>
//     <button onClick={()=>{ setcount(count+1);}}>Increment</button>
//     <button onClick={()=>{ setcount(count-1);}}>Decrement</button>
//     <p>count:{count}</p>
//   </div>
  // )


  // useEffect 02
  
//   const[name,setname]=useState(()=>localStorage.getItem("name") || "")
//   const[save,setsave]=useState(false)


//   useEffect(()=>{
//     if(save){
//       localStorage.setItem("name",name);
//     }
//     setsave(false)
//   },[name,save])


//  return(
//     <>
//     <input type="text" style={{width:"200px" ,padding:"10px"}} onChange={(e)=>{setname(e.target.value)}}  value={name} placeholder='Enter name:' />
//     <p>name:{name}</p>
//     <button onClick={()=>setsave(true)}>save name</button>
//     </>
//   )

  // useEffect 03

// const [seconds,setseconds]=useState(0)

// useEffect(()=>{
//   let interval=setInterval(()=>{
//   setseconds(prev=>prev+1)
//   },1000)

//   return () => clearInterval(interval);
// },[])



// return(
//   <p>seconds:{seconds}</p>
// )



// useref 01

// const inputref=useRef(null);

// function focusinput(){
//   inputref.current.focus()


// }


// return(
// <>
// <input type="text" ref={inputref} placeholder='enter something...' />
// <button onClick={focusinput} >click to focus</button>
// </>
// )


// useref 2

// const [count,setcount]=useState(0);
// const prevcount=useRef(0);

//   function increase() {
//     setcount(count+1);
//   }
//   function Decrease() {
//     if(count==0){
//       console.log("error");
//       return
      
//     }
//     setcount(count-1);
//   }


//   useEffect(()=>{
//      prevcount.current=count;
//   },[count])

//   return(
//   <div>
//     <p>count: {count}</p>
//     <p>prevcount: {prevcount.current}</p>
//     <button onClick={()=>{increase()}}>Increment</button>
//     <button onClick={()=>{Decrease()}}>Decrement</button>
//   </div>
//   )



// useref 03

// const [seconds,setseconds]=useState(0)
// const [start,setstarttimer]=useState(false)

// const intervalref=useRef();

// useEffect(()=>{

//   intervalref.current=setInterval(()=>{
//   setseconds(prev=>prev+1)
//   },1000)

//   return () => clearInterval(intervalref.current);
// },[start]);

// let stop=()=>clearInterval(intervalref.current)

// return(
//   <>
//   <p>seconds:{seconds}</p>
//   <button  onClick={stop } >stop</button>
//   <button  onClick={()=>{setstarttimer(!start)}}>start</button>

//   </>
// )


// usecontext 

//   const [theme, setTheme] = useState("light");

//   return (
//     <ThemeContext.Provider value={{ theme, setTheme }}>
//       <Navbar />
//     </ThemeContext.Provider>
//   );
// }


// function Navbar() {
//   return <Button />;
// }

// function Button() {
//   const { theme, setTheme } = useContext(ThemeContext);

//   return (
//     <>
//       <p>Theme: {theme}</p>
//       <button
//         onClick={() =>
//           setTheme(theme === "light" ? "dark" : "light")
//         }
//       >
//         Toggle Theme
//       </button>
//     </>
//   );

  




};

export default App
