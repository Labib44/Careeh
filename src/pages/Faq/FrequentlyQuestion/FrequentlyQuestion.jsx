import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const questions = [
  {
    id: 1,
    title: "General",
    shortDes: "Your general queries",
  },
  {
    id: 2,
    title: "Payment/Rates",
    shortDes: "Queries regarding payment & delivery rates",
  },
  {
    id: 3,
    title: "Return/Damage/Issues",
    shortDes: "Info on issue resolution",
  },
  {
    id: 4,
    title: "Coverage area and delivery time",
    shortDes: "Info on coverage area & delivery time",
  },
  {
    id: 5,
    title: "API integration process",
    shortDes: "Information on API integration process",
  },
];

const answers = [
  {
    qID: 1,
    title: "Small business",
    questions: [
      {
        question: "What is Careeh Delivery?",
        answer:
          "Careeh Delivery is a logistics company that aims to aid Bangladesh’s expanding e-commerce sector by providing tech-first delivery support. With exclusive features and a talented workforce, Careeh Delivery gives the delivery service industry of Bangladesh a brand new pace. Careeh delivers for both businesses and individuals. You can use our services to deliver everything from products to your customer’s doorstep to important personal documents and parcels to your friends and family.",
        id: 1,
      },
      {
        question: "How do I contact you?",
        answer:
          "You can call us at 09678844448 or you can email us at info@careeh.com. Additionally you can also reach out to us over live chat from our app or from our web portal. You can also connect with us on Facebook.",
        id: 2,
      },
      {
        question: "How can a merchant track their parcel delivery?",
        answer:
          "You can track your parcel through our website. Simply enter your parcel ID on our website here to see the latest update on your package.Click this link to know the process in details.",
        id: 3,
      },
      {
        question: "How do I send a product/ courier via Careeh Delivery?",
        answer:
          "We do home delivery for products and parcels of multiple sizes and weights all over Bangladesh. To avail our services, please register with us on our website here, or download the Careeh app from Google Play Store. You can also contact us at 09678844448.Click this link to know about how to create a Careeh account. To learn how to send a parcel through Careeh, please visit this link.",
        id: 4,
      },
      {
        question:
          "I want to hold a parcel for more than 3 days before home delivery. Is it possible?",
        answer:
          "Currently we do not hold any parcel for more than 3 days once a parcel reaches its last mile hub. For more information call us at 09678844448.",
        id: 5,
      },
      {
        question: "Can you do product exchange from customers?",
        answer:
          "To see the video tutorial on how to exchange a parcel, please click this link. To read about the steps in details, visit link. For more information please contact us at 09678844448 or email at info@careeh.com.",
        id: 6,
      },
      {
        question:
          "Can you deliver to addresses inside Cantonment or other restricted areas?",
        answer:
          "Although Careeh provides doorstep home delivery service in Dhaka along with all other districts, if security in such areas prohibit outside entry, our delivery men will wait at the gate and you can come collect your package from there.",
        id: 7,
      },
      {
        question:
          "I do not have a Facebook page, can I register as a merchant?",
        answer: "Yes, you can. All you need is a registered phone number.",
        id: 8,
      },
      {
        question: "What kind of products does Careeh deliver?",
        answer:
          "We deliver all valid portable products. Careeh is a courier service and parcel delivery service that offers the flexibility merchants and customers need.",
        id: 9,
      },
      {
        title: "Enterprice",
        question:
          "Do you have any web version or mobile application for cargo requisition?",
        answer:
          "Currently we’re collecting requisitions over mail & hotline. However, we’re working on the web version. Besides, you’ll be able to book a cargo through Careeh android app very soon.",
        id: 10,
      },
      {
        question:
          "Currently What’s the procedure to book a cargo for my shipment?",
        answer:
          "Simply call us & let us know your requirements in detail. We’ll get back to you with the vehicle confirmation & pricing within the next 120 minutes. If you agree, we’ll simply deploy our cargo to report to your loading point within the next 60 minutes.For prefixed requirements, simply drop a mail to info@careeh.com & we’ll get back to you as early as possible.",
        id: 11,
      },
    ],
  },
  {
    qID: 2,
    title: "Small business",
    questions: [
      {
        question: "What is the delivery charge?",
        answer:
          "The regular delivery charge for parcel delivery (upto 1 kg) is as follows: Inside Dhaka - ৳69, Dhaka Suburb - ৳115 + 1% COD, Outside Dhaka- ৳150 + 1% COD Please note that charges vary depending on weight and location. For more details click here and refer to the price guide.",
        id: 1,
      },
      {
        question: "What is the payment cycle for merchants?",
        answer:
          "Our payment cycle is 5 days a week (Sunday to Thursday). Once a parcel is delivered, the payment will be sent to you on the next working day.",
        id: 2,
      },
      {
        question: "How can I update my payment information?",
        answer:
          "Log in to your account at Careeh.com.bd. Then go to the drop-down menu from your profile icon and select shop settings. From there, you can update your payment method and details accordingly. Click this link to know the step-by-step process.",
        id: 3,
      },
      {
        question: "How will I receive my merchant payment?",
        answer:
          "You will receive the payment for all parcel delivery done within a particular day either via your bank account or bKash account within the next working day.",
        id: 4,
      },
      {
        title: "Enterprice",
        question:
          "Currently In which format are you operating? Is it fixed rate or open rate policy?",
        answer:
          "We’re offering both fixed rate & open rate pricing to ensure convenience for our valued B2B enterprises.",
        id: 5,
      },
      {
        question:
          "How will you collect the payment after the shipment delivery is done?",
        answer:
          "we’re available to collect our payment on both on-spot (Cash) & credit. Separate invoices will be generated by our Finance team & the due will be collected within the credit period.",
        id: 6,
      },
    ],
  },
  {
    title: "Small business",
    qID: 3,
    questions: [
      {
        question: "I have an issue related to my delivery. What should I do?",
        answer:
          "Click this link for the tutorial on how to let us know about any issue you're facing regarding your parcel delivery. To read about the process, please visit this link. To let us know about any issue you're facing through the app, click here.",
        id: 1,
      },
      {
        question: "When should I inform you if an item is lost or damaged?",
        answer:
          "You must inform us regarding any lost or damaged items immediately upon discovery. It can be either during delivery or while returning a parcel. The maximum time we allow for raising an issue is within 3 days.To learn about how to let us know about this issue through the website, visit this link. To read about the process, click link. To let us know through the Careeh app, kindly watch this link.",
        id: 2,
      },
      {
        question:
          "What is the compensation/refund process for lost or damaged goods?",
        answer:
          "In case of lost and damaged parcels or courier, you must raise the issue with us immediately. Once we receive your case, we will thoroughly investigate the matter and follow up as soon as possible. This process will require a minimum of 5 working days.",
        id: 3,
      },
      {
        question:
          "What type of products are not covered by the compensation/ refund system?",
        answer:
          "Refund is not applicable if the product is damaged due to packaging inadequacies. If liquid items, such as ghee, honey, oil or any glass bottles are damaged, the refund system will not apply to them.In addition, for home delivery service, if the product being delivered is faulty to begin with, the customer has to check in front of the rider and return it. Complaints of any kind after successful home delivery or return are not acceptable.",
        id: 4,
      },
      {
        title: "Enterprice",
        question:
          "What’s the course of action from your organization if any of my products gets missing, damaged or stolen after handing over the products?",
        answer:
          "We’ll take full responsibility & ensure a viable solution as per our compensation policy.",
        id: 5,
      },
      {
        question:
          "How safe & secure is it for us to work with your organization?",
        answer:
          "Our enlisted trucks are verified with documents. We ensure safety but in case of any unexpected situation, we will provide all necessary information about the cargo & its vendor.",
        id: 6,
      },
    ],
  },
  {
    title: "Small bussiness",
    qID: 4,
    questions: [
      {
        question: "How much time is required to deliver a parcel?",
        answer:
          "Our delivery time frame after picking up a parcel is as follows: Inside Dhaka - Next day, Dhaka Suburb - 48 hours, Outside Dhaka - 72 Hours, Please note that delivery time may vary depending on external conditions or customer availability.",
        id: 1,
      },
      {
        question: "What is Careeh’s pickup time?",
        answer:
          "Our regular pickup time for home delivery service in Dhaka and all other districts is 3pm to 8pm.",
        id: 2,
      },
      {
        question: "Does Careeh provide parcel delivery in Dhaka only?",
        answer:
          "When we say Careeh provides home delivery service in Bangladesh, we mean that we deliver all across the country, to every doorstep. If the destination is part of the coverage area, we will promptly deliver it.",
        id: 3,
      },
      {
        question: "What is your coverage area?",
        answer:
          "We deliver your products in all of the 64 districts of Bangladesh. You can place an order by contacting your nearest Careeh Delivery hub. Click here to see details on all hubs.",
        id: 4,
      },
      {
        question: "What is the cut off time for requesting a pickup?",
        answer:
          "In order to make sure that your parcels are picked up successfully, you must input the details of the parcels in either our website or mobile app within 3pm. Once a request is placed, we will send our pickup agent to your doorstep the same day to pick up your parcels. Please note that you must place at least one request within 3pm for our agent to get notified and arrive at your doorstep for pickup.",
        id: 5,
      },
      {
        question: "Do you pick up parcels from outside Dhaka?",
        answer:
          "We are not a parcel delivery service in Dhaka only, our home delivery courier service in Bangladesh extends to all 64 districts. We pick up parcels from all over Bangladesh. To know more please call us at 09678844448.",
        id: 6,
      },
      {
        question:
          "Where can I find information about my nearest Careeh Delivery hub?",
        answer: "To find your nearest Careeh Delivery hub click here",
        id: 7,
      },
    ],
  },
  {
    qID: 5,
    questions: [
      {
        question: "How can I connect with Careeh using API?",
        answer:
          "Connecting to Careeh API is a very simple process. Simply contact your key account manager mentioning your interest in API integration. Your respective KAM will be placing your API integration request to our tech team. Your tech POC will receive the necessary testing documents for API integration. Once your team confirms the testing being successful, we will send you tokens to work live with Careeh!",
        id: 1,
      },
      {
        question: "What is the API integration process of Careeh?",
        answer:
          "Careeh provides 3 sets of Open APIs. These are for parcel creation and parcel details, to get delivery access to the latest areas of Careeh; and if a shop has multiple pickup locations, then to get those pickup locations during parcel creation. We provide a Sandbox Documentation & token for test purpose. Once the testing is done successfully and confirmed by the merchant, we provide the production or live token using which merchants can start giving us parcels through API.",
        id: 2,
      },
      {
        question: "How can I create parcels using API?",
        answer:
          "You need to integrate Careeh Open API to your website or app that you are using, for which you need to follow our API integration process as mentioned in the first question.",
        id: 3,
      },
      {
        question: "How can I receive live status update from Careeh API?",
        answer:
          "Careeh can send near to real-time status update to your system through Webhook Integration. For all of your parcels, status updates will be pushed to your callback API. To avail this feature, kindly contact your key account manager, mentioning your interest in Webhook Integration.",
        id: 4,
      },
      {
        question:
          "How to solve delivery_area_id validation error during API testing?",
        answer:
          "The Sandbox environment or test environment for our API is mocked, it is not connected to any data source, so it returns only one area. This is done intentionally so that you can also test the error response if the website or app is showing that the Area ID is invalid.",
        id: 5,
      },
    ],
  },
];

const FrequentlyQuestion = () => {
  const [questionID, setQuestionID] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState(null);

  const handleOpen = (id) => {
    setIsOpen((previous) => !previous && !isOpen);
    setId(id);
  };

  return (
    <div className="container mx-auto my-20">
      <div className="grid grid-cols-12 sm:grid-cols-1 gap-10">
        <div className="col-span-5">
          {questions.map((question) => {
            return (
              <div
                className={`${
                  question.id === questionID
                    ? "border-l-8 border-primary"
                    : "text-slate-400"
                } py-3 my-3 cursor-pointer`}
                onClick={() => setQuestionID(question.id)}
                key={question.id}
              >
                <div className="pl-5">
                  <h2 className="text-2xl">{question.title}</h2>
                  <span>{question.shortDes}</span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="col-span-7">
          {answers.map((answer) => {
            return (
              <div
                className={`${answer.qID === questionID ? "block" : "hidden"}`}
                key={answer.qID}
              >
                <h2 className="text-3xl font-bold">{answer.title}</h2>
                {answer.questions.map((question) => {
                  return (
                    <div className="border-b" key={question.id}>
                      <h2 className="text-3xl font-bold my-5">
                        {question.title}
                      </h2>
                      <div
                        onClick={() => handleOpen(question.id)}
                        className="flex items-center gap-3 cursor-pointer transition-all duration-75"
                      >
                        {isOpen && question.id === id ? (
                          <FaMinus className="w-7 h-7 p-2 rounded-full text-slate-100 bg-primary my-4" />
                        ) : (
                          <FaPlus className="w-7 h-7 p-2 rounded-full text-slate-100 bg-primary my-4" />
                        )}
                        <h3 className="font-bold">{question.question}</h3>
                      </div>
                      <div
                        className={`${
                          isOpen && question.id === id ? "block" : "hidden"
                        }`}
                      >
                        <p className="text-justify pb-5">{question.answer}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FrequentlyQuestion;
