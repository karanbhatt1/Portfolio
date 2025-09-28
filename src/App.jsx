import {Header,About,Education,Scroller, Contact,Skills, Footer, Projects} from "./Components/index"
import "./Styles/skills.css"
// Link --> tag is used to reload a part of page.
// Attribute of Link :  to = '' for href = ''
// NavLink --> provide additional things.
// outlet --> use the layout as the base and make sure that header and footer remain same.


function App() {
  return (
   <>
   <h1>Hello User!</h1>
   <div className="bg-black m-0 p-0 flex flex-wrap justify-center">
    <Scroller/>
    <Header/>
    {/* <main className=" bg-black flex flex-col items-center "> */}
      <About/>
      <Education/>
      <Skills/>
      <Projects/>
      <Contact/>
    {/* </main> */}
   </div>
   
   </>
  )
}

export default App;
