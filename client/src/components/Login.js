import React from "react"; 
import ProfileForm from "./ProfileForm";
import { useHistory } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const handleLogin = (event) => {
        event.preventDefault();
        // login logic 
        history.push('/')
    }

    return(ProfileForm)
}


export default Login; 