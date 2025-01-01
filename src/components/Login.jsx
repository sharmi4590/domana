import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate();

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
    
        const { email, password } = formData;
    
        // Basic validation
        if (!email || !password) {
            setError('All fields are required!');
            return;
        }
    
        axios.post(`${process.env.REACT_APP_API_BASE_URL}/login`, { email, password })
            .then((response) => {
                if (response.data.status === '200 OK') {
                    // Redirect to the external page on success
                    window.location.href = 'https://domain-analyzer-s8fy.onrender.com/';
                } else {
                    setError(response.data.message || 'Invalid credentials!');
                }
            })
            .catch((err) => {
                console.error("Axios error:", err.response || err);
                const errorMessage = err.response?.data?.message || 'An error occurred during login. Please try again.';
                setError(errorMessage);
            });

    
    };

    return (
        <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', fontFamily: 'Arial' }}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '10px' }}>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
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
                        placeholder="Password"
                        value={formData.password}
                        style={{ width: '100%', padding: '8px', marginBottom: '5px' }}
                        onChange={handleChange}
                    />
                </div>

                {error && <p style={{ color: 'red' }}>{error}</p>}
                {success && <p style={{ color: 'green' }}>{success}</p>}

                <button
                    type="submit"
                    style={{ width: '100%', padding: '10px', backgroundColor: '#6C74CB', color: '#fff', border: 'none', cursor: 'pointer' }}
                >
                    Login
                </button>
            </form>
            <p style={{ marginTop: '10px' }}>
                Don't have an account? <Link to="/signup">Signup here</Link>
            </p>
        </div>
    );
};

export default Login;
