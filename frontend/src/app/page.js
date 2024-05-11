import { NavBar, Welcome } from "../components"
import React from 'react';

const page = () => {
  return (
    <div className="min-h-screen">

       <div className="gradient-bg-welcome">
         <NavBar />
         <Welcome/>
       </div>

    </div>
  )
}

export default page