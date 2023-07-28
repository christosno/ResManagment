import { Dropdown, Avatar } from "react-daisyui";

const UserAvatar = () => {
    return (
        <Avatar src="https://yt3.googleusercontent.com/ytc/AOPolaSeT96FW4mh8AcTnhPwyBHdUTGC9tiDfx8zTX-X=s900-c-k-c0x00ffffff-no-rj" shape="circle" size="xs" />
    );
};


const UserDropDown = () => {
    return (
        <Dropdown horizontal="left" vertical="middle" hover="true">
            <Dropdown.Toggle color="ghost"><UserAvatar /></Dropdown.Toggle>
            < Dropdown.Menu className="w-52" >
                <Dropdown.Item>Item 1</Dropdown.Item>
                <Dropdown.Item>Item 2</Dropdown.Item>
            </Dropdown.Menu >
        </Dropdown >
    );
};

export default UserDropDown;