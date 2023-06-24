import contact from "../../../assets/enterprise/01.jpeg";

const Contact = () => {
  return (
    <div className="container mx-auto mt-20">
      <div className="grid grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-5 ">
        <div className=" mt-5 col-span-2">
          <h1 className="text-5xl md:text-3xl sm:text-2xl font-bold p-5">
            Get in touch for instant price estimate
          </h1>

          <form
            action=""
            className=" mt-10 md:mt-0 sm:mt-5 p-5 md:p-0 md:px-5 "
          >
            <div className="flex sm:flex-wrap w-full gap-8">
              <div className=" h-14 w-full  ">
                <label className="">Name</label>
                <input
                  id="firstname"
                  type="text"
                  placeholder="Enter customer name"
                  className="w-full h-full outline-none rounded-md border border-gray-200 p-4 my-4 "
                />
              </div>
              <div className="h-14 w-full sm:mt-5">
                <label className="">Email</label>
                <input
                  id="lastname"
                  type="email"
                  placeholder="Enter email"
                  className="w-full h-full outline-none rounded-md border border-gray-200 p-4 my-4"
                />
              </div>
            </div>
            <div className="flex sm:flex-wrap w-full gap-8 mt-12">
              <div className=" h-14 w-full  ">
                <label className="">Phone Number</label>
                <input
                  id="firstname"
                  type="number"
                  placeholder="Enter phone number"
                  className="w-full h-full outline-none rounded-md border border-gray-200 p-4 my-4 "
                />
              </div>
              <div className="h-14 w-full sm:mt-5">
                <label className="">Company Name</label>
                <input
                  id="lastname"
                  type="text"
                  placeholder="Enter phone number"
                  className="w-full h-full outline-none rounded-md border border-gray-200 p-4 my-4"
                />
              </div>
            </div>

            <div className=" w-full mt-12">
              <label className="block mb-2">Requirement</label>
              <textarea
                id="message"
                rows="4"
                className="block p-2.5 w-full h-24 text-sm text-gray-900 rounded-lg border border-gray-300  "
                placeholder="Write your requirement here"
              ></textarea>
            </div>

            <button
              type="button"
              className="px-8 py-3 font-semibold rounded bg-primary mt-5 text-xl hover:bg-red-500 text-white"
            >
              Submit
            </button>
          </form>
        </div>

        <div className="p-5 sm:hidden">
          <img src={contact} className="w-full " alt="" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
