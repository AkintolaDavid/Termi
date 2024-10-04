// Profile.js
import React, { useState } from "react";
import Header from "./Header";

import { useToast } from "./ToastContext";
export default function Profile() {
  const addToast = useToast();
  const [profile, setprofile] = useState(true);
  const [security, setsecurity] = useState(false);

  const handleToggleprofile = () => {
    setprofile(true);
    // Ensure at least one section is shown by toggling weight if necessary
    setsecurity(false);
  };

  const handleTogglesecurity = () => {
    setsecurity(true);
    // Ensure at least one section is shown by toggling blood pressure if necessary
    setprofile(false);
  };
  const handleupdatesecurity = () => {
    addToast("  Security updated successfully!", "success");
  };
  const handleupdateprofile = () => {
    addToast("  Profile updated successfully!", "success");
  };
  return (
    <>
      <Header />
      <div className="w-full h-[calc(100vh-94px)] flex justify-center  bg-[#f8fafc]">
        <div className="w-[95%] h-[92.5%] mt-[2.5%] bg-white flex flex-col pl-6 pt-5 gap-5">
          <div className="flex flex-col">
            <span className="text-[20px] font-semibold">
              Account Information
            </span>
            <span className="text-[14px] text-[#929EAE]">
              Update your account information
            </span>
          </div>
          <div className="h-[35px] flex w-[250px] rounded-md border-[1px]">
            <button
              onClick={handleToggleprofile}
              className={`flex items-center justify-center px-4 rounded-[4px] py-2 border-[#EEEEEE] w-[50%] ${
                profile ? "bg-[#3B5BDB] text-white" : "bg-white text-[#9B9B9B]"
              }`}
            >
              My profile
            </button>
            <button
              onClick={handleTogglesecurity}
              className={`flex items-center justify-center px-4 rounded-[4px]  py-2  border-[#EEEEEE] w-[50%] ${
                security ? "bg-[#3B5BDB] text-white" : "bg-white text-[#9B9B9B]"
              }`}
            >
              Security
            </button>
          </div>{" "}
          {profile && (
            <>
              <form className="w-[700px]">
                <div>
                  <span className="font-medium text-[18px] flex mb-5">
                    Personal Information
                  </span>
                </div>
                <div className="flex justify-between w-[100%] gap-1 mt-[15px]">
                  <div className="flex flex-col gap-1 ">
                    <label className="text-[14px] font-medium text-[#1B212D]">
                      Your firstname
                    </label>
                    <input
                      className="h-[37px] text-[#78778B] w-[340px] pl-3 rounded-[6px] text-[14px] border-[1px] border-[#E4E6EA]"
                      placeholder="Ayodele"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-[14px] font-medium text-[#1B212D]">
                      Your lastname
                    </label>
                    <input
                      className="h-[37px] text-[#78778B] w-[340px] pl-3 rounded-[6px] text-[14px] border-[1px] border-[#E4E6EA]"
                      placeholder="Frank"
                    />
                  </div>
                </div>

                <div className="flex justify-between w-[100%] gap-1 mt-[15px]">
                  <div className="flex flex-col gap-1 ">
                    <label className="text-[14px] font-medium text-[#1B212D]">
                      Date of birth
                    </label>
                    <input
                      type="date"
                      className="h-[37px] text-[#78778B] w-[340px] pl-3 pr-3 rounded-[6px] text-[14px] border-[1px] border-[#E4E6EA]"
                      placeholder="27/09/1998"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-[14px] font-medium text-[#1B212D]">
                      Mobile Number
                    </label>
                    <input
                      className="h-[37px] text-[#78778B] w-[340px] pl-3 rounded-[6px] text-[14px] border-[1px] border-[#E4E6EA]"
                      placeholder="+123 456 7890"
                    />
                  </div>
                </div>

                <div className="flex justify-between w-[100%] gap-1 mt-[15px]">
                  <div className="flex flex-col gap-1 ">
                    <label className="text-[14px] font-medium text-[#1B212D]">
                      Email
                    </label>
                    <input
                      className="h-[37px] text-[#78778B] w-[340px] pl-3 rounded-[6px] text-[14px] border-[1px] border-[#E4E6EA]"
                      placeholder="hellouihut@gmail.com"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-[14px] font-medium text-[#1B212D]">
                      Country
                    </label>
                    <input
                      className="h-[37px] text-[#78778B] w-[340px] pl-3 rounded-[6px] text-[14px] border-[1px] border-[#E4E6EA]"
                      placeholder="Nigeria"
                    />
                  </div>
                </div>

                <div className="flex justify-between w-[100%] gap-1 mt-[15px]">
                  <div className="flex flex-col gap-1 ">
                    <label className="text-[14px] font-medium text-[#1B212D]">
                      State
                    </label>
                    <input
                      className="h-[37px] text-[#78778B] w-[340px] pl-3 rounded-[6px] text-[14px] border-[1px] border-[#E4E6EA]"
                      placeholder="Lagos"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-[14px] font-medium text-[#1B212D]">
                      Location
                    </label>
                    <input
                      className="h-[37px] text-[#78778B] w-[340px] pl-3 rounded-[6px] text-[14px] border-[1px] border-[#E4E6EA]"
                      placeholder="Ikeja"
                    />
                  </div>
                </div>
                <button
                  onClick={handleupdateprofile}
                  className="bg-[#4263EB] text-white w-[700px] text-[16px] mt-6 h-[37px] rounded-[10px]"
                >
                  Update
                </button>
              </form>
            </>
          )}
          {security && (
            <>
              <form className="w-[700px]">
                <div>
                  <span className="font-medium text-[18px] flex mb-5">
                    Settings
                  </span>
                </div>

                <div className="flex justify-between w-[100%] gap-1 mt-[20px]">
                  <div className="flex flex-col gap-1">
                    <label className="text-[14px] font-medium text-[#1B212D]">
                      Existing Password
                    </label>
                    <input
                      className="h-[37px] text-[#78778B] w-[700px] pl-3 rounded-[6px] text-[14px] border-[1px] border-[#E4E6EA]"
                      placeholder="old password"
                    />
                  </div>
                </div>

                <div className="flex justify-between w-[100%] gap-1 mt-[20px]">
                  <div className="flex flex-col gap-1">
                    <label className="text-[14px] font-medium text-[#1B212D]">
                      New Password
                    </label>
                    <input
                      className="h-[37px] text-[#78778B] w-[700px] pl-3 rounded-[6px] text-[14px] border-[1px] border-[#E4E6EA]"
                      placeholder="new password"
                    />
                  </div>
                </div>

                <div className="flex justify-between w-[100%] gap-1 mt-[20px]">
                  <div className="flex flex-col gap-1">
                    <label className="text-[14px] font-medium text-[#1B212D]">
                      Repeat New Password
                    </label>
                    <input
                      className="h-[37px] text-[#78778B] w-[700px] pl-3 rounded-[6px] text-[14px] border-[1px] border-[#E4E6EA]"
                      placeholder="********"
                    />
                  </div>
                </div>
                <button
                  onClick={handleupdatesecurity}
                  className="bg-[#4263EB] text-white w-[700px] text-[16px] mt-8 h-[37px] rounded-[10px]"
                >
                  Update
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  );
}
