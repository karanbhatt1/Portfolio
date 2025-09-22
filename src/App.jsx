import { Outlet } from "react-router"
import {Header,About,Education,Scroller} from "./Components/index"
// Link --> tag is used to reload a part of page.
// Attribute of Link :  to = '' for href = ''
// NavLink --> provide additional things.
// outlet --> use the layout as the base and make sure that header and footer remain same.
function App() {
  return (
   <>
   <div className="bg-black h-svh m-0 p-0 flex flex-wrap justify-center">
    <Scroller/>
    <Header/>
    <main className="bg-black">
      <Outlet/>
    </main>  
   </div>
   
   </>
  )
}

export default App
