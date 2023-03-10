import './App.css'
import Main from '../Main/Main'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import About from '../About'
import { APP_ROUTES } from '../../utilis/constants'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import Questionnaire from '../Questionnaire/Questionnaire'
import Resources from '../Resources/Resources'

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path={APP_ROUTES.ABOUT} element={<About />} />
          <Route path={APP_ROUTES.QUIZ} element={<Questionnaire />} />
          <Route path={APP_ROUTES.RESOURCES} element={<Resources />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
