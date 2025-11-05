import React, { useState } from 'react';

const AuthForm = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const data = {email, password};
            console.log(data)
        } catch (error) {
            console.error(error)
        }
    }

    return (
      <>
        <form action='submit' onSubmit={handleSubmit}>
          <div>
            <label htmlFor='email'>Email</label>
            <input
              type='text'
              placeholder='Enter EMail'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor='password'>Password</label>
            <input
              type='password'
              placeholder='Enter Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button type='submit'>
                Submit
            </button>
          </div>
        </form>
      </>
    );
}

export default AuthForm