import React from "react";
import { FiMoreHorizontal, FiMenu } from "react-icons/fi";
const App = () => {
  return (
    <div className="h-full min-h-screen bg-[#181820] text-gray-50 box-border m-0 p-0 font-plus flex  items-start justify-center">
      {/* nav */}
      <div className="fixed top-0 h-14  z-30 w-full  b"></div>
      {/* sidebar */}
      <div className="thin-box-divider z-30 sticky top-[3.5rem] bg-[#21212b] text-gray-50 flex flex-col items-center py-4 justify-start w-[4.8rem] h-screen flex-shrink-0">
        <div className="rounded-full hover:bg-[#414052] duration-300 transition-all ease-in-out cursor-pointer p-2.5 box-border">

          <FiMenu className="text-lg"></FiMenu>
        </div>
      </div>
      <div className="w-full box-border h-full max-w-4xl mx-auto flex-1 px-12">

        <div className="lg:mt-20">
          <span className="lg:text-3xl font-semibold">Welcome, User</span>
        </div>
        <div className="mt-32">
          <span className="font-medium text-xl ">My notes</span>
          <div className="mt-6 flex items-center justify-between">
            <span className=" capitalize text-sm  text-gray-500 relative "> categories </span>
            <div className="h-full cursor-pointer text-2xl text-gray-500 hover:text-gray-50">
              <FiMoreHorizontal />
            </div>
          </div>
        </div>
        {/* content */}
        <div className="mt-6 grid grid-flow-col grid-cols-3 gap-3 w-fit">
          {Array.from({ length: 3 }, (item, id) => (
            <div
              key={id}
              className=" h-40 w-56 rounded-xl bg-[#21212b]/70 hover:bg-[#21212b] flex cursor-pointer flex-col items-center justify-end overflow-hidden"
            >
              <div className="h-12 w-full  py-1 px-5">
                <span className="text-sm capitalize font-medium block">
                  item{id}
                </span>
              </div>
            </div>
          ))}
          {/* <div className=" h-40 w-56 rounded-xl border-[2px] border-solid border-slate-800/70"></div> */}
        </div>
      </div>
    </div>
  );
};

export default App;
