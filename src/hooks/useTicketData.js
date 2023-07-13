import { useQuery, useQueryClient } from "react-query";
import axios from "axios";

const fetchTicket = ({ queryKey }) => {
    const id = queryKey[1];
    return axios.get(`http://localhost:5000/api/tickets/get/${id}`);
};

const useTicketData = (id) => {
    const client = useQueryClient();
    return useQuery(["ticket", id], fetchTicket, {
        initialData: () => {
            const ticketData = client.getQueryData("tickets")?.data;
            console.log("ticketData", ticketData);
            const ticket = ticketData?.find(ticket => {
                console.log("in the find ticket", ticket);
                console.log("in the find id", id);
                return ticket.ticketId === id;
            });
            console.log("ticket", ticket);
            if (ticket) {
                return {
                    data: ticket
                };
            } else {
                return undefined;
            }
        }
    });
};

export default useTicketData;