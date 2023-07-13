import { Card, Button } from "react-daisyui";
import ErrorPage from "./ErrorPage";
import LoadingSpinner from "../components/LoadingSpinner";
import { useParams } from "react-router-dom";
import useTicketData from "../hooks/useTicketData";
import useDeleteTicket from "../hooks/useDeleteTicket";

const Ticket = () => {
    const { id } = useParams();

    const { isLoading, isError, error, data } = useTicketData(id);
    const { isLoading: isLoadingDelete, data: deleteData, refetch: refetchDelete } = useDeleteTicket(id);

    console.log(data);

    const editTicketHandler = (ticketId) => { console.log(`edit ticket ${ticketId}`); };
    const deleteTicketHandler = (ticketId) => { };

    if (isLoading) {
        return (<LoadingSpinner />);
    }

    if (isError) {
        return (<ErrorPage message={error.message} />);
    }

    return (
        <div className="p-2">
            <Card bordered="true">
                <Card.Body className="items-center text-center">
                    <Card.Title tag="h2">{`Ticket ${data?.data.ticketId}`}</Card.Title>
                    <h2>Product: {data?.data.product}</h2>
                    <h3>Status: {data?.data.status}</h3>
                    <p>Description: {data?.data.description}</p>
                    <Card.Actions className="justify-end">
                        <Button onClick={() => editTicketHandler(data?.data.ticketId)}>Edit</Button>
                        <Button onClick={() => deleteTicketHandler(data?.data.ticketId)}>Delete</Button>
                    </Card.Actions>
                </Card.Body>
            </Card>
        </div>
    );


};

export default Ticket;
