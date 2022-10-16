import { createContext, useState } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router.jsx";
export const UserContext = createContext({});
function App() {
  const [user, setUser] = useState({});
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div>
        <RouterProvider router={router} />
      </div>
    </UserContext.Provider>
  );
}

export default App;
