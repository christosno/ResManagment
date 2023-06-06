const Container = ({ children }) => {
    return (
        <div className="flex-col w-auto mx-auto md:mx-8 lg:mx-16 flex-nowrap overflow-x-auto p-8 bg-neutral rounded-2xl">
            <div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
                <div className="form-control w-full max-w-xs">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Container;