import { useQuery } from "react-query";
import axios from "axios";

const fetchTickets = () => {
    return axios.get("http://localhost:5000/api/tickets/get/");
};

const Tickets = () => {

    const { isLoading, data } = useQuery("tickets", fetchTickets);

    if (isLoading) {
        return (<h2>Loading...</h2>);
    }

    return (
        <>
            <div >
                <ul>
                    {data?.data.map((ticket) => {
                        return (
                            <li key={ticket.ticketId}>
                                <h2>Product: {ticket.product}</h2>
                                <h3>Status: {ticket.status}</h3>
                                <p>Description: {ticket.description}</p>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </>
    );
};

export default Tickets;
