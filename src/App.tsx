import './style.scss'
import { Home } from "./components/Home";
import { Element } from './components/Element';

const App = () => {

  return (
    <>
      <div className='common__screen'>
        <div className='common__screen__container'>
          <Home />
          <Element />
        </div>
      </div>
    </>
  )
}

export default App
