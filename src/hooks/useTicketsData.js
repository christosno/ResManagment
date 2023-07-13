import { useQuery } from "react-query";
import axios from "axios";

const fetchTickets = () => {
    return axios.get("http://localhost:5000/api/tickets/get");
};

const useTicketsData = (onSuccess, onError) => {
    return useQuery("tickets", fetchTickets, {
        onSuccess: onSuccess, // we can redirect the user or open a modal or.....
        onError: onError, // we can pop up a notification or ....
        // gia posi wra mporei na kanei display ta data, opote otan ginei to query amesos tha kanei desplay
        // ta cached data mexri na erthoun ta nea apo to neo request
        cacheTime: 50000, // default value 5 lepta
        // gia posi wra tha einai ta data energa kai den tha xrizete na kanei neo request
        staleTime: 30000, // default value 0
        refetchOnMount: true, // default to true
        refetchOnWindowFocus: true, // default to true
        refetchInterval: false, // defaulte to false, we can set a number for miliseconds for refetch/ in background to the polling
        refetchIntervalInBackground: false, // default to false, continue the polling in backround
        // enabled: false, // default to true, it is used when we wnat to fetch date on click event and not on the rendering of the component
        // select: (data) => {
        //     // you can map or filter and transform the server data as you want
        // }
        keepPreviousData: false // default to false, if true it keeps the data from the prev request and displaed them until the new data from current request resolved
    });
};

export default useTicketsData;