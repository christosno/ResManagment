import Container from "../UI/Container";
import SelectInput from "../components/SelectInput";
import TextareaInput from "../components/TextareaInput";

import { Button } from "react-daisyui";

const CreateTicket = () => {
    return (
        <Container>
            <h1 className="mb-4 text-2xl normal-case" color="ghost">Create a new Ticket</h1>
            <SelectInput />
            <TextareaInput />
            <Button>Create</Button>
        </Container>
    );
};

export default CreateTicket;
