import { createContext, useContext } from 'react';

export const AuthContext = createContext();
export const isLoggedIn = localStorage.getItem("Authorization");

export function useAuth() {

  // return useContext(AuthContext);
}