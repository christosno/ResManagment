import Container from "../UI/Container";
import { Alert } from "react-daisyui";


const ErrorPage = ({ message }) => {
    return (
        <Container>
            <Alert status="error">{message}</Alert>
        </Container>
    );
};

export default ErrorPage;
