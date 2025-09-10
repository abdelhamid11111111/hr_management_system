import React from "react";
import SideBar from "../components/Sidebar";

export default function Reports() {
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden"
      // style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <div className="gap-1 px-6 flex flex-1 justify-center py-5">
          {/* Sidebar */}
          <SideBar/>

          {/* Main Content */}
          <div className="layout-content-container flex flex-col w-full flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="text-[#111418] tracking-light text-[32px] font-bold leading-tight min-w-72">
                Dashboard
              </p>
            </div>

            <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Overview
            </h2>

            {/* Stats */}
            <div className="flex flex-wrap gap-4 p-4">
              <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-lg p-6 border border-[#dbe0e6]">
                <p className="text-[#111418] text-base font-medium leading-normal">
                  Total Employees
                </p>
                <p className="text-[#111418] tracking-light text-2xl font-bold leading-tight">
                  250
               </p>
              </div>

              <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-lg p-6 border border-[#dbe0e6]">
                <p className="text-[#111418] text-base font-medium leading-normal">
                  Average Salary
                </p>
                <p className="text-[#111418] tracking-light text-2xl font-bold leading-tight">
                  $75,000
                </p>
              </div>

              <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-lg p-6 border border-[#dbe0e6]">
                <p className="text-[#111418] text-base font-medium leading-normal">
                  Highest Salary
                </p>
                <p className="text-[#111418] tracking-light text-2xl font-bold leading-tight">
                  $150,000
                </p>
              </div>

              <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-lg p-6 border border-[#dbe0e6]">
                <p className="text-[#111418] text-base font-medium leading-normal">
                  Lowest Salary
                </p>
                <p className="text-[#111418] tracking-light text-2xl font-bold leading-tight">
                 $40,000
                </p>
              </div>

              <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-lg p-6 border border-[#dbe0e6]">
                <p className="text-[#111418] text-base font-medium leading-normal">
                  Average Performance Rating
                </p>
                <p className="text-[#111418] tracking-light text-2xl font-bold leading-tight">
                 4.2
                </p>
              </div>
            </div>

            <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Analytics
            </h2>

            <div className="flex flex-wrap gap-4 px-4 py-6">
              {/* Employees per Department */}
              <div className="flex min-w-72 flex-1 flex-col gap-2 rounded-lg border border-[#dbe0e6] p-6">
                <p className="text-[#111418] text-base font-medium leading-normal">
                  Employees per Department
                </p>
              <div className="grid min-h-[180px] gap-x-4 gap-y-6 grid-cols-[auto_1fr] items-center py-3">
                <p className="text-[#617589] text-[13px] font-bold leading-normal tracking-[0.015em]">
                  Engineering
                </p>
                <div className="h-full flex-1">
                  <div
                    className="border-[#617589] bg-[#f0f2f4] border-r-2 h-full"
                    style={{ width: "40%" }}
                  ></div>
                </div>

                <p className="text-[#617589] text-[13px] font-bold leading-normal tracking-[0.015em]">
                  Marketing
                </p>
                <div className="h-full flex-1">
                  <div
                    className="border-[#617589] bg-[#f0f2f4] border-r-2 h-full"
                    style={{ width: "90%" }}
                  ></div>
                </div>

                <p className="text-[#617589] text-[13px] font-bold leading-normal tracking-[0.015em]">
                  Sales
                </p>
                <div className="h-full flex-1">
                  <div
                    className="border-[#617589] bg-[#f0f2f4] border-r-2 h-full"
                    style={{ width: "90%" }}
                  ></div>
                </div>

                <p className="text-[#617589] text-[13px] font-bold leading-normal tracking-[0.015em]">
                  HR
                </p>
                <div className="h-full flex-1">
                  <div
                    className="border-[#617589] bg-[#f0f2f4] border-r-2 h-full"
                    style={{ width: "60%" }}
                  ></div>
                </div>

                <p className="text-[#617589] text-[13px] font-bold leading-normal tracking-[0.015em]">
                 Finance
                </p>
                <div className="h-full flex-1">
                  <div
                    className="border-[#617589] bg-[#f0f2f4] border-r-2 h-full"
                    style={{ width: "100%" }}
                  ></div>
                </div>
              </div>

              </div>

              {/* Salary Distribution */}
              <div className="flex min-w-72 flex-1 flex-col gap-2 rounded-lg border border-[#dbe0e6] p-6">
                <p className="text-[#111418] text-base font-medium leading-normal">
                  Salary Distribution
                </p>
                <div className="grid min-h-[180px] grid-flow-col gap-6 grid-rows-[1fr_auto] items-end justify-items-center px-3">
                  <div
                    className="border-[#617589] bg-[#f0f2f4] border-t-2 w-full"
                    style={{ height: "20%" }}
                  ></div>
                  <p className="text-[#617589] text-[13px] font-bold leading-normal tracking-[0.015em]">
                    $40k-$60k
                  </p>

                  <div
                    className="border-[#617589] bg-[#f0f2f4] border-t-2 w-full"
                    style={{ height: "60%" }}
                  ></div>
                  <p className="text-[#617589] text-[13px] font-bold leading-normal tracking-[0.015em]">
                    $60k-$80k
                  </p>

                  <div
                    className="border-[#617589] bg-[#f0f2f4] border-t-2 w-full"
                    style={{ height: "50%" }}
                  ></div>
                  <p className="text-[#617589] text-[13px] font-bold leading-normal tracking-[0.015em]">
                    $80k-$100k
                  </p>

                  <div
                    className="border-[#617589] bg-[#f0f2f4] border-t-2 w-full"
                    style={{ height: "50%" }}
                  ></div>
                  <p className="text-[#617589] text-[13px] font-bold leading-normal tracking-[0.015em]">
                    $100k+
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
}
