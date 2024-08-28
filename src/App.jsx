
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout'
import Contact from './components/contact/Contact'
import Projects from './components/projects/Project'

import Home from './components/home/Home'
import ShimmerEffect from './components/shimmer/Shimmer';
import  { useState, useEffect } from 'react';



function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
 
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <ShimmerEffect/>;
  }

  return (
    <div style={{ fontFamily: 'Poppins, sans-serif'}}>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Projects" element={<Projects />} />
        </Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
