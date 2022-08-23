import { useEffect, useState } from 'react';
import { client } from '../supabase/client';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        if(client.auth.user()) {
            navigate('/');
        };
    }, [navigate]);

    const handleSummit = async (e) => {
        e.preventDefault(); 
        try {
            const result = await client.auth.signIn({
                email
            });
            console.log(result)
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='row pt-4'>
            <div className="col-md-4 offset-md-4">
                <form onSubmit={handleSummit} className="card card-body">
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="youremail@site.com"
                        onChange={e => setEmail(e.target.value)}
                        className="form-control mb-2" 
                    />
                    <button className='btn btn-primary' >
                        Send
                    </button>
                </form>
            </div>
        </div>
  )
};

export default Login;
