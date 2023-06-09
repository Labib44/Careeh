

const MediaCard = ({ medData }) => {
    const { logo, discription, date } = medData;
    return (
        <div className=" rounded-md outline outline-2 outline-gray-200">

            <div className="px-5 pt-5">
                <img src={logo} className="w-[350px] h-[60px]" alt="" />
            </div>

            <div className="mx-5 mb-5">
                <h1 className=" text-secondary text-xl">{date}</h1>
                <p className=" text-secondary font-bold text-2xl pt-3 pr-3">{discription}</p>
            </div>
        </div>
    );
};

export default MediaCard;