import { useQuery } from "react-query";
import axios from "axios";

const deleteTicket = (id) => {
    return axios.delete(`http://localhost:5000/api/tickets/delete/${id}`);
};

const useDeleteTicket = (id) => {
    return useQuery(["deleteTicket", id], () => deleteTicket(id), {
        enabled: false
    });
};

export default useDeleteTicket;