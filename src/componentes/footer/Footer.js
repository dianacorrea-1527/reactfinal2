import React from 'react';
import './footer.css'
 
 
class Footer extends React.Component {
 
  render() {
 
    return (
      <div className="footer">
    <div className="container">
            <p className="float-right"><a href="#">Inicio</a></p>
            <p>&copy; {(new Date().getFullYear())} American Technet. &middot; <a href="#">Soporte Especializado</a> &middot; <a href="#">recomiendanos!!</a></p>
      </div>
      </div>
    )
      
    
    
  }
 
}
 
export default Footer;