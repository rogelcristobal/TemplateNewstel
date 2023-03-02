import React from "react";
import { FiLayout, FiBookOpen } from "react-icons/fi";
const App = () => {
  return (
    <div className="bg-[#1a1c1e] relative font-plus h-full flex text-neutral-100 w-full box-border p-0 m-0">
      {/* sidebar */}
      <div className="w-[19rem] bg-[#333335] z-50 sticky top-0 h-screen box-divider thin-right-divider flex-shrink-0 flex flex-col items-start justify-start  px-6">
        <div className="mt-8 text-lg font-medium   w-full  flex items-start gap-6 ">
          <div className="flex flex-col  w-60 h-full">
            <span>MyApplication </span>
          </div>
        </div>
        <div className=" h-fit w-full flex flex-col mt-28 py-2">
          <span className="text-[0.8rem] font-medium text-neutral-400  mb-3  w-fit">
            Menu
          </span>
          <span className="text-[0.875rem] bg-[#414141] cursor-pointer text-neutral-200 mb-2 font-medium rounded-md px-3 py-3 flex items-center justify-start gap-3">
            <FiLayout />
            Dashboard
          </span>
          <span className="text-[0.875rem] hover:bg-[#414141] font-medium rounded-md px-3 py-3 cursor-pointer text-neutral-400 hover:text-neutral-200 flex items-center justify-start gap-3">
            <FiBookOpen />
            My Notes
          </span>
        </div>
      </div>
      <div className="box-border h-full w-full box-divider  flex-1">
        {/* navbar sticky */}
        <div className="h-[4.5rem] box-border w-full fixed top-0 left-0 bg-[#1a1c1e]  flex items-center justify-end pr-16">
          <div className="rounded-full bg-[#323234]  h-9 w-9 flex-shrink-0 justify-center"></div>
        </div>
        {/* container */}
        <div className="px-12 pt-28 box-border h-[calc(100%-4.5rem)] w-full">
          {/* content */}
          <div className=" box-border h-full w-full">
            {/* title */}
            <div className="box-border max-w-xl mb-12 w-full">
              <span className="font-semibold text-2xl">My Notes</span>
            </div>
            {/* content page */}
            <div className="h-fit  w-fit grid  grid-cols-4	gap-4">
              {/* items */}
              <div className="h-36 cursor-pointer w-52 box-border hover:bg-[#323234] rounded-lg bg-[#2c2e2f]/70 flex flex-col items-center justify-end overflow-hidden">
                <div className="h-full  w-full flex items-center justify-center"></div>
                <div className="h-fit flex flex-col items-end justify-center w-full gap-1.5  py-2">
                  <span className="text-sm mx-6 block bo-border font-medium  text-right">
                    Sample Note1
                  </span>
                  <span className="text-xs mx-6 block bo-border font-medium text-neutral-500 text-right">
                    infomation
                  </span>
                </div>
              </div>
              <div className="h-36 cursor-pointer w-52 box-border hover:bg-[#323234] rounded-lg bg-[#2c2e2f]/70 flex flex-col items-center justify-end overflow-hidden">
                <div className="h-full  w-full flex items-center justify-center"></div>
                <div className="h-fit flex flex-col items-end justify-center w-full gap-1.5  py-2">
                  <span className="text-sm mx-6 block bo-border font-medium  text-right">
                    Sample Note1
                  </span>
                  <span className="text-xs mx-6 block bo-border font-medium text-neutral-500 text-right">
                    infomation
                  </span>
                </div>
              </div>
              <div className="h-36 cursor-pointer w-52 box-border hover:bg-[#323234] rounded-lg bg-[#2c2e2f]/70 flex flex-col items-center justify-end overflow-hidden">
                <div className="h-full  w-full flex items-center justify-center"></div>
                <div className="h-fit flex flex-col items-end justify-center w-full gap-1.5  py-2">
                  <span className="text-sm mx-6 block bo-border font-medium  text-right">
                    Sample Note1
                  </span>
                  <span className="text-xs mx-6 block bo-border font-medium text-neutral-500 text-right">
                    infomation
                  </span>
                </div>
              </div>
              <div className="h-36 cursor-pointer w-52 box-border hover:bg-[#323234] rounded-lg bg-[#2c2e2f]/70 flex flex-col items-center justify-end overflow-hidden">
                <div className="h-full  w-full flex items-center justify-center"></div>
                <div className="h-fit flex flex-col items-end justify-center w-full gap-1.5  py-2">
                  <span className="text-sm mx-6 block bo-border font-medium  text-right">
                    Sample Note1
                  </span>
                  <span className="text-xs mx-6 block bo-border font-medium text-neutral-500 text-right">
                    infomation
                  </span>
                </div>
              </div>
              
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
