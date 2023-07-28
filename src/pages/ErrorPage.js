
import { Alert } from "react-daisyui";


const ErrorPage = ({ message }) => {
    return (
        <>
            <Alert status="error">{message}</Alert>
        </>
    );
};

export default ErrorPage;
