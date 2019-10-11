import React, {useState} from 'react';
import api from '../../services/api';

export default function Login({history}){

    const [email, setEmail] = useState(''); 

    async function handleSubmit(event) {
        event.preventDefault();

        const res = await api.post('/sessions', {email});

        const {_id} = res.data;

        localStorage.setItem('user', _id);
    
        history.push('/dashboard');
    }

    function handleEmail(event){
        setEmail(event.target.value);
    }

    return (
        <>
            <p>Oferça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa!</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">E-MAIL*</label>
                <input 
                type="email" 
                id="email" 
                placeholder="Seu melhor e-mail"
                onChange={handleEmail}
                />
                <button className="btn" type="submit">Entrar</button>  
            </form> 
        </>
    );
}