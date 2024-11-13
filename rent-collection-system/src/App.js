import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import loginpage from './components/logincomponent';
import tenantdashboard from './components/tenantdashboard';
import admindashboard from './components/admindashboard';
import paymentpage from './components/paymentpage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" component={loginpage} />
        <Route path="/dashboard" component={tenantdashboard} />
        <Route path="/admin" component={admindashboard} />
        <Route path="/payment" component={paymentpage} />
      </Routes>
    </Router>
  );
}

export default App;
