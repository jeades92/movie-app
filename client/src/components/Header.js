import React, {useState} from 'react'; 

function Header() {
    function Name() {
        const [name, setName] = useState('Guest');
        function login() {
            setName("Username")
        }
    }
    return (
        <div className="Homer">
        <h1>{Name}</h1>
        <p> Welcome to the Movie Site </p>
        </div>
    );
}

export default Header;