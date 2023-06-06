const CustomButton = ({ buttonName, cssStyle }) => {
    return (
        <button
            type="button"
            className={`transition-all focus:outline-none font-semibold rounded-lg text-base px-6 text-center ${
                cssStyle && `${cssStyle}` 
            }`}
        >
            {buttonName}
        </button>
    );
};

export default CustomButton;
