import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import { useState, useEffect } from 'react';

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch("")
    .then((res) => {
      if (res.ok) {
        res.json()
        .then((user) => setUser(user));
      }
    });
  }, []);

  // console.log(user)

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={ <LogIn setUser={setUser} /> } />
          <Route path="/signup" element={ <SignUp setUser={setUser} /> } />
          <Route path="/" element={ <Home user={user} setUser={setUser} /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
