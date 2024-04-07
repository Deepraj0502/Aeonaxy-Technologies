import React, { useState } from "react";

export default function MainPage() {
  const [selection, setSelection] = useState("delete");
  return (
    <>
      <div
        className="fixed flex items-center justify-end w-[110%] md:w-[102%] h-[20vh] cursor-pointer"
        style={{ zIndex: "99" }}
      >
        <div
          className="p-4 rounded-lg rotate-[270deg] bg-white"
          style={{ boxShadow: "0px -3px 9px 0px darkgray" }}
        >
          Feedback
        </div>
      </div>

      <div
        className="fixed flex items-center justify-end w-[98%] h-[80vh]"
        style={{ zIndex: "99" }}
      >
        <button
          type="button"
          className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-[#353f4e] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 z-99 opacity-100"
        >
          <span>Getting started</span>
          <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
            3
          </div>
        </button>
      </div>
      <div className="p-4 max-w-[1280px] m-auto">
        <div className="flex w-full justify-center">
          <div
            className="flex items-center p-2 mb-4 text-sm bg-green-600 text-white rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800 fixed mt-[-60px]"
            style={{ zIndex: "99" }}
            role="alert"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span className="sr-only">Info</span>
            <div className="ml-2 mr-1">Your settings have been saved!</div>
          </div>
        </div>

        <p className="font-normal text-xl mt-0 md:mt-5">
          Organization Settings
        </p>
        <div className="flex mt-10 gap-32 flex-col md:flex-row z-80 relative">
          <div
            className="flex flex-wrap gap-4 w-full md:w-[10%] h-20"
            style={{ zIndex: "999" }}
          >
            <p
              className={
                selection === "shared"
                  ? "text-sm cursor-pointer font-bold"
                  : "text-sm cursor-pointer"
              }
              onClick={() => setSelection("shared")}
            >
              Shared event types
            </p>
            <p
              className={
                selection === "single"
                  ? "text-sm cursor-pointer font-bold"
                  : "text-sm cursor-pointer"
              }
              onClick={() => setSelection("single")}
            >
              Single sign-on
            </p>
            <p
              className={
                selection === "work"
                  ? "text-sm cursor-pointer font-bold"
                  : "text-sm cursor-pointer"
              }
              onClick={() => setSelection("work")}
            >
              Workflows
            </p>
            <p
              className={
                selection === "delete"
                  ? "text-sm cursor-pointer font-bold"
                  : "text-sm cursor-pointer"
              }
              onClick={() => setSelection("delete")}
            >
              Data deletion
            </p>
          </div>
          <div className="w-full md:w-[80%] mt-[-6rem] md:mt-0">
            <p className="font-bold text-lg">
              Delete information from your organization
            </p>
            <p className="text-sm mt-2">
              When anyone in your organization schedules an event with an
              invitee, information about the event and everyone part of it is
              saved in Calendly. If you need to delete this information from
              Calendly and its vendors for compliance reasons, you can do so
              without contacting support.
            </p>
            <p className="p-3 bg-[#fef2f4] font-bold mt-4 rounded-lg">
              Once you delete information, you won't be able to recover it
            </p>
            <p className="text-sm mt-4">
              Invitee data will be deleted{" "}
              <span className="font-bold">7 days</span> from the date you make
              the request.
            </p>
            <hr className="mt-8" />
            <h1 className="font-bold mt-8">
              Delete information for specific invitees
            </h1>
            <p className="text-sm mt-2">
              Enter an invitee's email to delete all of their personally
              identifiable information from your organization and integrations,
              During the data deletion process, Calendly removes the deleted
              invitee from their spot on group events and cancels both pending
              and upcoming events with them.
            </p>
            <textarea
              id="message"
              rows={4}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-4 bg-white"
              defaultValue={""}
            />
            <button
              type="button"
              className="rounded-3xl bg-red-700 p-2 pl-4 pr-4 mt-4 text-white font-bold"
            >
              Delete
            </button>
            <hr className="mt-8" />
            <h1 className="font-bold mt-8">
              Delete information within a period of time
            </h1>
            <p className="text-sm mt-2">
              Choose a date range to delete all information from scheduled
              events within that period of time
            </p>
            <div className="flex gap-5">
              <div date-rangepicker="" className="flex items-center mt-4">
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                    </svg>
                  </div>
                  <input
                    name="start"
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 bg-white"
                    placeholder="Select date start"
                  />
                </div>
                <span className="mx-4 text-gray-500">to</span>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                    </svg>
                  </div>
                  <input
                    name="end"
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 bg-white"
                    placeholder="Select date end"
                  />
                </div>
              </div>
              <button
                type="button"
                className="rounded-3xl bg-red-700 p-2 pl-4 pr-4 mt-4 text-white font-bold"
              >
                Delete
              </button>
            </div>
            <hr className="mt-8" />
            <h1 className="font-bold mt-8">Data deletion history</h1>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-black">
                      <div className="flex items-center">
                        Request Date
                        <svg
                          className="w-2.5 h-2.5 ms-2.5 rotate-180"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 10 6"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="m1 1 4 4 4-4"
                          />
                        </svg>
                      </div>
                    </th>
                    <th scope="col" className="px-6 py-3 text-black">
                      <div className="flex items-center">
                        Requested by
                        <a href="#">
                          <svg
                            className="w-3 h-3 ms-1.5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                          </svg>
                        </a>
                      </div>
                    </th>
                    <th scope="col" className="px-6 py-3 text-black">
                      <div className="flex items-center">
                        Status
                        <a href="#">
                          <svg
                            className="w-3 h-3 ms-1.5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                          </svg>
                        </a>
                      </div>
                    </th>
                  </tr>
                </thead>
              </table>
            </div>
            <hr className="mt-8" />
            <h1 className="font-bold mt-8">Data your account</h1>
            <p className="text-sm mt-2 mb-5">
              You can delete your account in your{" "}
              <a href="#" className="text-blue-700">
                account settings.
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
