import React from 'react'
import '../App.css';

class Header extends React.Component {
    render(){
        return(
            <header className="header-mem">
                <img 
                src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png" 
                alt="Problem?"
                />
                <p>Meme Generator</p>
            </header>
        )
    }


}

export default Header