import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

const SignUp = () => {
  return (
    <div className="flex h-screen w-screen max-w-full justify-center">
      <div className="flex h-screen w-2/5 flex-col justify-center bg-slate-100 pt-16">
        <img
          className="h-full w-full"
          src="/signup-image-1.svg"
          alt="If this image doesn't load, then you're gay"
        />
      </div>
      <div className="flex w-3/5 flex-col gap-3 bg-white">
        <div className="flex justify-end px-10 py-5 text-xl">
          Already have an account?
          <Link className="ml-2 font-medium text-blue-800" to="/login">
            Login
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center py-5">
          <div className="flex flex-col gap-5">
            <h1 className="text-3xl font-semibold text-gray-600">
              How will you be using ShiftSync ?
            </h1>

            <div className="flex flex-col gap-1">
              <div className="hover:scale-103 flex w-144 justify-between rounded-xl bg-slate-100 p-8 transition duration-500 ease-in-out hover:shadow-lg">
                <div className="mr-10 flex w-2/3 flex-col justify-between">
                  <h1 className="mb-5 text-3xl font-bold text-light-text">
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
              <div className="my-5 flex w-144 rounded-xl bg-slate-100 p-8 transition duration-500 ease-in-out hover:shadow-lg">
                <div className="mr-10 flex w-2/3 flex-col justify-between">
                  <h1 className="mb-5 text-3xl font-bold text-light-text">
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
