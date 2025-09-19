import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"
import { Outlet } from "react-router"
// Link --> tag is used to reload a part of page.
// Attribute of Link :  to = '' for href = ''
// NavLink --> provide additional things.
// outlet --> use the layout as the base and make sure that header and footer remain same.
function App() {

  return (
   <>
   <div className="bg-black h-svh w-svw">
    <Header/>
    <Outlet/>
    <Footer/>

   </div>
   
   </>
  )
}

export default App
