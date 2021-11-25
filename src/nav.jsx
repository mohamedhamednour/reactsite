import {NavLink} from "react-router-dom"

export const Navbar = () => {
  
    return (
      <>
  
  
  <nav class="navbar navbar-dark bg-dark">
  <ul >
      <li> <NavLink className="nav-link" to="/home">
              Posts
      </NavLink> </li>
      <li>
      <NavLink className="nav-link" to="/contact">
              to
      </NavLink>  

      </li>
</ul>
              
      
      
          
       
    



    </nav>


    

  
      </>
    );
  };



