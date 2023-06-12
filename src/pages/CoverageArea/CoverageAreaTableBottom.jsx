import { Link } from "react-router-dom";

const CoverageAreaTableBottom = () => {
    return (
        <nav className="flex items-center justify-end pt-4">
            <ul className="inline-flex items-center">
                <li>
                    <Link
                        to="/coverage-area"
                        className="block px-3 mt-[1px] py-2 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg hover:bg-gray-100 hover:text-primary "
                    >
                        <span className="sr-only">Previous</span>
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </Link>
                </li>
                <li>
                    <Link
                        to="/coverage-area"
                        className="px-2 py-1 text-sm leading-tight text-gray-500 bg-white   hover:text-primary"
                    >
                        1
                    </Link>
                </li>
                <li>
                    <Link
                        to="/coverage-area"
                        aria-current="page"
                        className="z-10 px-1 text-sm leading-tight text-black border border-primary  hover:bg-primary/10 hover:text-primary"
                    >
                        2
                    </Link>
                </li>
                <li>
                    <Link
                        to="/coverage-area"
                        className="px-2 py-1 text-sm leading-tight text-gray-500 bg-white   hover:text-primary"
                    >
                        3
                    </Link>
                </li>
                <li>
                    <Link
                        to="/coverage-area"
                        className="px-2 py-1 leading-tight text-gray-500 bg-white   hover:text-primary"
                    >
                        ...
                    </Link>
                </li>
                <li>
                    <Link
                        to="/coverage-area"
                        className="px-2 py-1 text-sm leading-tight text-gray-500 bg-white   hover:text-primary"
                    >
                        100
                    </Link>
                </li>
                <li>
                    <Link
                        to="/coverage-area"
                        className="block px-3 py-2 leading-tight text-gray-500 bg-white  rounded-r-lg hover:bg-gray-100 hover:text-primary"
                    >
                        <span className="sr-only">Next</span>
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default CoverageAreaTableBottom;
