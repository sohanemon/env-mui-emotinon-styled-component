import { createContext, useState } from "react";
import AuthForm from "./user/auth-form";
export const UserContext = createContext({});
function App() {
  const [user, setUser] = useState({});
  console.log(user);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className='App'>
        <AuthForm />
      </div>
    </UserContext.Provider>
  );
}

export default App;
