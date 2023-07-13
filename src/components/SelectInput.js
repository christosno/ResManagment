
import { Select } from "react-daisyui";

const SelectInput = ({ setValue, value }) => {

    return (
        <div className="flex-col w-full component-preview py-4 items-center justify-items-start gap-2 font-sans">
            <label className="label">
                <span className="label-text">Product</span>
            </label>
            <Select
                className="w-full"
                value={value}
                onChange={(event) => setValue(event.target.value)}
            >
                <Select.Option value={'default'} disabled>
                    Pick a Product
                </Select.Option>
                <Select.Option value={'iPhone'}>iPhone</Select.Option>
                <Select.Option value={'MacBookPro'}>MacBookPro</Select.Option>
                <Select.Option value={'iMac'}>iMac</Select.Option>
                <Select.Option value={'iPad'}>iPad</Select.Option>
            </Select>
        </div>
    );
};

export default SelectInput;