

const TrackCard = ({trackData}) => {
    const { title, logo, discription } = trackData;
    return (
        <div className=" rounded-md outline outline-1 outline-gray-300">

            <img src={logo} className="m-5" alt="" />

            <div className="m-5">
                <h1 className=" text-gray-800 text-xl font-semibold">{title}</h1>
                <p className=" text-gray-600 pt-3 pr-3">{discription}</p>
            </div>
        </div>
    );
};

export default TrackCard;