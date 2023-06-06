import { useState } from "react";
import { Textarea } from "react-daisyui";

const TextareaInput = () => {
    return (
        <div className="flex w-full component-preview py-4 items-center justify-items-start gap-2 font-sans">
            <div className="form-control w-full">
                <label className="label">
                    <span className="label-text">Description</span>
                </label>
                <Textarea />
            </div>
        </div>
    );
};


export default TextareaInput;