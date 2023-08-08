import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/pages/Home'
import Contato from './components/pages/Contato'
import Company from './components/pages/Company'
import NewProject from './components/pages/NewProject'

import Container from './components/layouts/Container'

function App() {
  return (
    <Router>
      <Link to='/'>Home</Link>
      <Link to='/contato'>Contato</Link>
      <Link to='/company'>Empresa</Link>
      <Link to='/newproject'>Novo projeto</Link>
      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/contato' element={<Contato />} />
          <Route path='/company' element={<Company />} />
          <Route path='/newproject' element={<NewProject />} />
        </Routes>
      </Container>

      <p>Footer</p>
    </Router >
  );
}

export default App;
