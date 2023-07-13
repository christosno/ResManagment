import { useState } from "react";
import Container from "../UI/Container";
import SelectInput from "../components/SelectInput";
import TextareaInput from "../components/TextareaInput";
import useCreateTicket from "../hooks/useCreateTicket";

import { Button } from "react-daisyui";
import ErrorPage from "./ErrorPage";

const CreateTicket = () => {

    const [product, setProduct] = useState('default');
    const [description, setDescription] = useState("");

    const { mutate: createTicket, isLoading, isError, error } = useCreateTicket();

    const clickHandler = () => {

        console.log("Selected Item", product);
        console.log("Description", description);
        const body = {
            product,
            description
        };
        createTicket(body);
        setDescription("");
        setProduct("default");
    };

    if (isError) {
        return <ErrorPage message={error.message} />;
    }

    return (
        <Container>
            <h1 className="mb-4 text-2xl normal-case" color="ghost">Create a new Ticket</h1>
            <SelectInput value={product} setValue={setProduct} />
            <TextareaInput value={description} setValue={setDescription} />
            <Button disabled={product === "default" || isLoading} onClick={clickHandler}>Create</Button>
        </Container>
    );
};

export default CreateTicket;
