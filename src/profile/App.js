import "./index.css"
import ListsCards from './components/ListsCards';
import UserProfile from './components/ProfileCard';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    
    return (
        
        <div className='profile'>
            <UserProfile />
            <ListsCards />
        </div>
                  
    );
}

export default App;
