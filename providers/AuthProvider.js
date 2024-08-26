// AuthProvider.js
import React, { useState, useEffect } from 'react';
import AuthContext from '../contexts/AuthContext';
import { loadUser } from '../services/AuthService';
import SplashScreen from '../screens/SplashScreen';

export default function AuthProvider({ children }) {
  const [user, setUser] = useState();
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    async function runEffect() {
      try {
        const user = await loadUser();
        setUser(user);
      } catch (e) {
        console.log('Failed to load user', e);
      } 

      setStatus('idle');
    }

    runEffect();
  }, []);

  if (status === 'loading') {
    return <SplashScreen />;
  }

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}
