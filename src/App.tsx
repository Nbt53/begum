import { useState } from "react"
import Header from "./Header"
import Home from "./Home"
import About from "./About"
import Photography from "./Photography"
import Videos from "./Videos"


function App() {
  const [view, setView] = useState('Home')

  let componentToRender;

  switch (view) {
    case 'Home':
      componentToRender = <Home />;
      break;
    case 'About':
      componentToRender = <About />;
      break;
    case 'Photography':
      componentToRender = <Photography />;
      break;
    case 'Videos':
      componentToRender = <Videos />;
      break;
    default:
      componentToRender = <div>Component not found</div>;
  }


  return (

    <>
      <Header view={view} setView={setView} />
      {componentToRender}
    </>
  )
}

export default App
