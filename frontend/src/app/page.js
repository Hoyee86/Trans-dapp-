import { NavBar, Welcome, Services, Footer } from "../components"
import React from 'react';

const page = () => {
  return (
    <div className="min-h-screen">

       <div className="gradient-bg-welcome">
         <NavBar />
         <Welcome/>
         <Services/>
         <Footer/>
       </div>
        
    </div>
  )
}

export default page