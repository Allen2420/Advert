import React from 'react';
import UserForm from './components/UserForm';
import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
     <div className='top-ad'>
     <img src="https://www.jetcraft.com/wp-content/uploads/2024/05/G650_sn-6232_ext_wm-1000x666.jpg" alt="advert 1" />
     <img src="https://tpc.googlesyndication.com/simgad/10523890842516689494?sqp=4sqPyQQrQikqJwhfEAEdAAC0QiABKAEwCTgDQPCTCUgAUAFYAWBfcAJ4AcUBLbKdPg&rs=AOga4qkM3udAJ-GXfNUzJ9p5Vs58Yhoujw" alt="ad 2" />
     </div>
      <UserForm />
      <Footer/>
    </div>
  );
}

export default App;
