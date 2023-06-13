import flag from "../../../assets/video/bangladesh.png";
const Form = () => {
  return (
    <div>
      <form>
        <h3 className="text-white text-center text-sm">
          SIGN UP FOR FREE. IT ONLY TAKES 2 MINUTES
        </h3>
        <div className="flex items-center justify-between w-full mb-6 mt-7">
          <div className="text-secondary bg-white border-r py-3 px-2 rounded-l-md flex w-24 items-center ">
            <img className="w-6" src={flag} alt="flag" />
            <p>+880</p>
          </div>
          <input
            className="w-full focus:outline-none py-3 rounded-r-md px-3"
            type="text"
            placeholder="Enter phone number"
          />
        </div>

        <button
          type="submit"
          className="text-white bg-primary w-full py-3 rounded-md"
        >
          Sign up now
        </button>

        <div className="flex items-center mt-10">
          <div className="border-b-2 w-[50%]"></div>
          <div className="text-white px-7">Or,</div>
          <div className="border-b-2 w-[50%]"></div>
        </div>

        <div className="mt-14">
          <h4 className="text-white text-center text-sm">
            TRACK MOVEMENT STATUS
          </h4>
          <div className="flex items-center justify-between w-full mt-7">
            <input
              className="w-full focus:outline-none py-3  rounded-r-none rounded-l-md px-3"
              type="text"
              placeholder="Enter parcel ID"
            />
            <button className="text-white bg-primary py-3 px-3 rounded-r-md">
              Track
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
