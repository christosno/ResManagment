
import { Card } from "react-daisyui";
import { Link } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import LoadingSpinner from "../components/LoadingSpinner";
import useTicketsData from "../hooks/useTicketsData";


// const deleteTicket = (id) => {
//     return axios.delete(`http://localhost:5000/api/tickets/get/delete/${id}`);
// };

const Tickets = () => {

    const onSuccess = (data) => {
        console.log("perform side effect after data fetching", data);
    };
    const onError = (err) => {
        console.log("perform side effect after encountering error", err);
    };

    const {
        isLoading,
        data,
        isError,
        error,
        // refetch // manualy trigger the query, we just need to put it in onClick event
    } = useTicketsData(onSuccess, onError);

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
                            <Link to={`/ticket/${ticket.ticketId}`}>
                                <Card bordered="true">
                                    <Card.Body className="items-center text-center">
                                        <Card.Title tag="h2">{`Ticket ${ticket.ticketId}`}</Card.Title>
                                        <h2>Product: {ticket.product}</h2>
                                        <h3>Status: {ticket.status}</h3>
                                        <p>Description: {ticket.description}</p>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </div>
                    </li>
                );
            })}
        </ul>

    );
};

export default Tickets;
