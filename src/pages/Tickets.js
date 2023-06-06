import { useQuery } from "react-query";
import axios from "axios";
import { Card, Button } from "react-daisyui";
import ErrorPage from "./ErrorPage";
import LoadingSpinner from "../components/LoadingSpinner";

const fetchTickets = () => {
    return axios.get("http://localhost:5000/api/tickets/get");
};

const Tickets = () => {

    const { isLoading, data, isError, error } = useQuery("tickets", fetchTickets);

    const editTicketHandler = (ticketId) => { console.log(`edit ticket ${ticketId}`); };
    const deleteTicketHandler = (ticketId) => { console.log(`delete ticket ${ticketId}`); };

    if (isLoading) {
        return (<LoadingSpinner />);
    }

    if (isError) {
        return (<ErrorPage message={error.message} />);
    }

    return (

        <ul>
            {data?.data.map((ticket) => {
                return (
                    <li key={ticket.ticketId}>
                        <div className="p-2">
                            <Card bordered="true">
                                <Card.Body className="items-center text-center">
                                    <Card.Title tag="h2">{`Ticket ${ticket.ticketId}`}</Card.Title>
                                    <h2>Product: {ticket.product}</h2>
                                    <h3>Status: {ticket.status}</h3>
                                    <p>Description: {ticket.description}</p>
                                    <Card.Actions className="justify-end">
                                        <Button onClick={() => editTicketHandler(ticket.ticketId)}>Edit</Button>
                                        <Button onClick={() => deleteTicketHandler(ticket.ticketId)}>Delete</Button>
                                    </Card.Actions>
                                </Card.Body>
                            </Card>
                        </div>
                    </li>
                );
            })}
        </ul>

    );
};

export default Tickets;
