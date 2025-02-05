import { createContext, useContext, useState } from "react";
import Dashboard from "./Dashboard";

const authContext = createContext({
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
});

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <authContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </authContext.Provider>
  );
};

function NavBar() {
  const { isAuthenticated, logout } = useContext(authContext);

  return (
    <nav>
      <span role="img" aria-label="Money bags emoji">
        💰
      </span>
      {isAuthenticated && (
        <button className="link" onClick={logout}>
          Logout
        </button>
      )}
    </nav>
  );
}

function LoginForm() {
  const { login } = useContext(authContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const username = formData.get("username");
    const password = formData.get("password");
    login(username, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="Username">Username :</label>
        <input
          type="text"
          id="username"
          required
          name="username"
          placeholder="Enter your username "
        />
      </div>

      <div>
        <label htmlFor="Password">Password :</label>
        <input
          type="password"
          id="password"
          required
          name="password"
          placeholder="Enter your password "
        />
      </div>

      <button type="submit">Login</button>
    </form>
  );
}

function Main() {
  const { isAuthenticated } = useContext(authContext);
  return <main>{isAuthenticated ? <Dashboard /> : <LoginForm />}</main>;
}

export default function ContextApp() {
  return (
    <AuthProvider>
      <NavBar />
      <Main />
    </AuthProvider>
  );
}
