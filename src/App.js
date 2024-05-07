import { useState } from "react";
import Custom from "./login";
import Reset from "./ResetPass";

function App() {
  
  const[form,setForm] = useState("login");
  
  return (
  <div className="App">
  <h1>Welcome</h1>

  {form === "login" ? <Custom/>:<Reset/>}

  <button onClick={() =>{setForm(form === "login"? "reset":"login")}}>
  {form === "login"? "Forget Password":"Back to Login"}
  </button>
  </div>
  );
}

export default App;
