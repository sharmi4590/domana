import React, { useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Signup = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const navigate=useNavigate();

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setError('');
        setSuccess('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { name, email, password } = formData;

        // Basic validation
        if (!name || !email || !password) {
            setError('All fields are required!');
            return;
        }

        axios.post(`${process.env.REACT_APP_API_BASE_URL}/signup`, { name, email, password })
            .then(result => {
                setSuccess('Signup successful!');
                setFormData({ name: '', email: '', password: '' });
                navigate("/login");
            })
            .catch(err => {
                setError('An error occurred during signup. Please try again.');
                console.error(err);
            });
    };

    return (
            <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', fontFamily: 'Arial' }}>
                <h2>Signup</h2>
                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: '10px' }}>
                        <label>Name:</label>
                        <input
                            type="text"
                            name="name"
                            placeholder='Name'
                            value={formData.name}
                            style={{ width: '100%', padding: '8px', marginBottom: '5px' }}
                            onChange={handleChange}
                        />
                    </div>

                    <div style={{ marginBottom: '10px' }}>
                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                            placeholder='Email'
                            value={formData.email}
                            style={{ width: '100%', padding: '8px', marginBottom: '5px' }}
                            onChange={handleChange}
                        />
                    </div>

                    <div style={{ marginBottom: '10px' }}>
                        <label>Password:</label>
                        <input
                            type="password"
                            name="password"
                            placeholder='Password'
                            value={formData.password}
                            style={{ width: '100%', padding: '8px', marginBottom: '5px' }}
                            onChange={handleChange}
                        />
                    </div>

                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    {success && <p style={{ color: 'green' }}>{success}</p>}

                    <button
                        type="submit"
                        style={{ width: '100%', padding: '10px', backgroundColor:'#6C74CB', color: '#fff', border: 'none', cursor: 'pointer' }}
                    >
                        Signup
                    </button>
                </form>
                <p style={{ marginTop: '10px' }}>
                    Already an existing user?
                </p>
                <Link 
    to="/login" 
    className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none text-[#6C74CB]"
>
    Login
</Link>

            </div>
    );
};

export default Signup;
