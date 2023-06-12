const CustomButton = ({ buttonName, cssStyle }) => {
    return (
        <button
            type="button"
            className={`transition-all focus:outline-none font-semibold rounded text-base text-center ${
                cssStyle && `${cssStyle}` 
            }`}
        >
            {buttonName}
        </button>
    );
};

export default CustomButton;
