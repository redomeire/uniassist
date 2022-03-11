import { createContext, useContext } from 'react';

export const AuthContext = createContext();
export const isLoggedIn = localStorage.getItem("user-info");

export function useAuth() {

  // return useContext(AuthContext);
}