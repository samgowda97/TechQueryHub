import { Link } from 'react-router-dom';
import '../App.css'
const WelcomeScreen = () => {
  return (
    <div className="welcome-screen">
      <h1>Welcome to Tech Query Hub</h1>
      <p>Get started by asking or answering technical questions.</p>
      <Link to="/main">
        <button className="get-started-button">Get Started</button>
      </Link>
    </div>
  )
}

export default WelcomeScreen