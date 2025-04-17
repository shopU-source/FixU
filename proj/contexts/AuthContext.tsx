'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (userData: RegisterData) => Promise<void>;
  logout: () => void;
  loading: boolean;
  error: string | null;
  isAuthenticated: boolean;
}

interface RegisterData {
  name: string;
  email: string;
  password: string;
  phone?: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const initAuth = async () => {
      try {
        const storedToken = localStorage.getItem('auth-token');
        const storedUser = localStorage.getItem('auth-user');
        
        if (storedToken && storedUser) {
          setToken(storedToken);
          setUser(JSON.parse(storedUser));
          setIsAuthenticated(true);
          
          document.cookie = `auth-token=${storedToken}; path=/; max-age=604800; SameSite=Lax`;

          try {
            const response = await fetch('/api/auth/validate', {
              headers: {
                'Authorization': `Bearer ${storedToken}`
              }
            });

            if (!response.ok) {
              clearAuthState();
            }
          } catch (err) {
            console.error("Error validating token:", err);
          }
        } else {
          clearAuthState();
        }
      } catch (error) {
        console.error('Auth initialization error:', error);
        clearAuthState();
      } finally {
        setLoading(false);
      }
    };

    initAuth();
  }, []);

  const clearAuthState = () => {
    setToken(null);
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('auth-token');
    localStorage.removeItem('auth-user');
    document.cookie = 'auth-token=; path=/; max-age=0';
  };

  const login = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Login failed');
      }
      
      setToken(data.token);
      setUser(data.user);
      setIsAuthenticated(true);

      localStorage.setItem('auth-token', data.token);
      localStorage.setItem('auth-user', JSON.stringify(data.user));
      
      document.cookie = `auth-token=${data.token}; path=/; max-age=604800; SameSite=Lax`;
      
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  const register = async (userData: RegisterData) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Registration failed');
      }
      
      setToken(data.token);
      setUser(data.user);
      setIsAuthenticated(true);

      localStorage.setItem('auth-token', data.token);
      localStorage.setItem('auth-user', JSON.stringify(data.user));
      
      document.cookie = `auth-token=${data.token}; path=/; max-age=604800; SameSite=Lax`;
      
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    clearAuthState();
    router.push('/');
  };

  const value = {
    user,
    token,
    login,
    register,
    logout,
    loading,
    error,
    isAuthenticated,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
