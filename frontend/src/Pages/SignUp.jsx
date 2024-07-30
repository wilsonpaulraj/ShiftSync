import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

const SignUp = () => {
  return (
    <div className="flex h-screen w-screen max-w-full justify-center">
      <div className="flex h-screen w-2/5 flex-col justify-center bg-slate-100 px-20">
        <div>
          <h1 className="mb-2 text-7xl font-bold text-slate-400">Welcome</h1>
          <h1 className="mx-2 text-4xl font-bold text-slate-400">
            to <span className="text-blue-800">Shift</span>
            <span className="italic text-blue-400">Sync</span>
            <span className="text-blue-400">!</span>
          </h1>
        </div>
        <div className="flex w-full justify-center">
          <img
            style={{ height: "30rem", width: "30rem" }}
            className=""
            src="/signup-image-2.png"
            alt="Reload"
          />
        </div>
      </div>
      <div className="flex w-3/5 flex-col bg-white">
        <div className="flex justify-end p-10 text-2xl">
          Already have an account?
          <Link className="ml-2 font-medium text-blue-800" to="/login">
            Login
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center py-5">
          <div className="flex flex-col">
            <h1 className="mb-5 text-3xl font-bold text-slate-600">
              How will you be using ShiftSync ?
            </h1>

            <div className="flex flex-col">
              <div className="my-5 flex w-144 justify-between rounded-xl bg-slate-300 p-10">
                <div className="mr-10 flex w-2/3 flex-col justify-between">
                  <h1 className="mb-5 text-3xl font-bold text-dark-text">
                    Do you own or manage a business ?
                  </h1>
                  <span className="text-xl font-medium text-blue-900 underline">
                    <Link to="/signup/owner-signup">
                      Create your own Team
                      <FontAwesomeIcon
                        className="ml-5"
                        icon={faArrowRightLong}
                        size="xl"
                        color="#193441"
                      />
                    </Link>
                  </span>
                </div>
                <div className="h-44 w-44">
                  <img
                    className="rounded-full"
                    src="/manager-image.jpg"
                    alt="Manager image"
                  />
                </div>
              </div>
              <div className="my-5 flex w-144 rounded-xl bg-slate-300 p-10">
                <div className="mr-10 flex w-2/3 flex-col justify-between">
                  <h1 className="mb-5 text-3xl font-bold text-dark-text">
                    Are you an Employee joining a team
                  </h1>
                  <span className="text-xl font-medium text-blue-900 underline">
                    <Link to="/signup/employee-signup">
                      Join an existing Team
                      <FontAwesomeIcon
                        className="ml-5"
                        icon={faArrowRightLong}
                        size="xl"
                        color="#193441"
                      />
                    </Link>
                  </span>
                </div>
                <div className="h-44 w-44">
                  <img
                    className="rounded-full"
                    src="/employee-image.jpg"
                    alt="Manager image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
