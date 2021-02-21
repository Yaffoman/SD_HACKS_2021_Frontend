import React, { createContext, useState } from 'react';

// This will be a local store to hold whether or not the user is logged in.
// If they are, it will hold their name, email, etc., else it will be null
const AuthContext = createContext(null);
export function Auth({ children }) {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}

// Just use this function in your component to get access to user.
// The return type is the user (user info or null)
export default function useAuth() {
  const context = React.useContext(AuthContext);
  return context;
}