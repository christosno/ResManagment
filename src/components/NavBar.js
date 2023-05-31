import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div >
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/tickets">Tickets</Link></li>
            </ul>
        </div>
    );
};

export default Home;