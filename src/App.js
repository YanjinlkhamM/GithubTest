import './App.css';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import HookCountertwo from './components/HookCountertwo';
import HookCounterThree from './components/HookCounterThree';
import HookCounterfour from './components/HookCounterfour';
import HookCounterOne from './components/HookCounterOne';
import HookMouse from './components/HookMouse';
import MouseContainer from './components/MouseContainer';
import IntervalHookCounter from './components/IntervalHookCounter';

function App() {
  return (
    <div className="App">
   {/* <ClassCounter/>*/}
  {/*<HookCounter></HookCounter>*/ }  
  {/*<HookCountertwo></HookCountertwo> */}
  {/* <HookCounterThree></HookCounterThree>*/}
   {/* <HookCounterfour></HookCounterfour>*/} 
   {/* <HookCounterOne></HookCounterOne>*/}
   {/*<MouseContainer></MouseContainer>*/}
   <IntervalHookCounter></IntervalHookCounter>
    </div>
  );
}

export default App;
