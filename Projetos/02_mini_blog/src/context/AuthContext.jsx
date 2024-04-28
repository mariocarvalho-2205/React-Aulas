import { useContext, createContext } from "react";

// criar contexto
const AuthContext = createContext();

// criar provider e exportar função
export function AuthProvider({ children, value }) {
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// criar hook para pegar o contexto
export function useAuthValue() {
    return useContext(AuthContext)
}
