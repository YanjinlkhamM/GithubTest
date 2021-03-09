import React , {useState} from 'react';
import { useForm } from './useForm';
const App = () =>  {
  const [count , setCount] = useState(10);
  const[email , setEmail] = useState("");
  const [password , setPassword] = useState("");
  const [values, handleChange] = useForm ({email:'' , password: ''});
  const [values2 , handleChange2] = useForm({firstName:"" , lastName: ""});
  useState(()=> 10);

  return (
    <div onClick="">
      <button onClick={()=> setCount(count - 1)}>-</button>
       {count}

       <div>
         < input 
         type="text" 
         name="email" 
         value={email} 
         onChange = {e => setEmail(e.target.value)}/>
        < input 
        type = "text" 
        name = "password" 
        value={password} 
        onChange = {e => setPassword(e.target.value)}/>

       </div>
       <div>
       < input 
         type="text" 
         name="email" 
         value={ values.email} 
         onChange = {handleChange}/>
         < input 
        type = "text" 
        name = "password" 
        value={values.password} 
        onChange = {handleChange}/>
       </div>
    </div>
  );
}

export default App;
