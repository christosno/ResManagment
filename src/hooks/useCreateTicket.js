import { useMutation, useQueryClient } from "react-query";
import axios from "axios";

const createticket = (body) => {
    return axios.post('http://localhost:5000/api/tickets/post', body);
};

const useCreateTicket = () => {
    const client = useQueryClient();
    return useMutation(createticket, {
        onSuccess: () => {
            client.invalidateQueries("tickets");
        }
    });
};


export default useCreateTicket;