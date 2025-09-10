import React from "react";
import Link from "next/link";
import SideBar from "./components/Sidebar";

export default function NotFound() {
  return (
    <div
      className="relative flex  min-h-screen flex-col bg-white group/design-root overflow-x-hidden"
      style={{ fontFamily: `Inter, "Noto Sans", sans-serif` }}
    >
      <div className="layout-container flex h-[50px] grow flex-col">
        <div className="gap-1 px-6 flex flex-1 justify-center py-5">
          {/* Sidebar */}
          <SideBar/>

          {/* Main Content */}
          <div className="layout-content-container justify-centenr items-center flex flex-col max-w-[960px] flex-1">
            <h2 className="text-[#111418] text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">
              This Page Not Found
            </h2>
            <p className="text-[#111418] text-base font-normal leading-normal pb-3 pt-1 px-4 text-center">
              The page you are looking for does not exist. Please check the URL
              or return to the dashboard.
            </p>
            <div className="flex w-[300px] justify-center items-center h-[300px] bg-white @container p-4">
              <div className="w-full gap-1 overflow-hidden bg-white @[480px]:gap-2 aspect-[3/2] rounded-lg flex">
                <div
                  className="w-full bg-center bg-no-repeat bg-cover aspect-auto rounded-none flex-1"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAD-JA_AO47iEPkBuUn6_YKIEhUrIb3PedzsAxdi_4wjLNAlhDhkd7EKp2GTPgKkIry9JcuhQi7_pky3lTZUURStpfxCZfnlfUCjw1zlF-1WBeRYqdCLT_-MEyX-iF3fhlMhS0BSBm-vGAEklT7UEa6DcYlbXczk5YsC_276P4TYgqB-TynF8eyj-HD5MbVvA0mpGRCoKa47S6kQ3f2oW9iNGdyvkEShEJ94v342iufDhQYQJulz1N0yQ-TU8a8MbN9bG2pMTkNf_mP')",
                  }}
                ></div>
              </div>
            </div>
            <div className="flex px-4 py-3 justify-center">
                <Link href={'/'}>
                    <button className="flex cursor-pointer min-w-[84px] max-w-[480px] items-center justify-center rounded-lg h-10 px-4 bg-[#1172d4] text-white text-sm font-bold tracking-[0.015em]">
                        <span className="truncate">Go to Dashboard</span>
                    </button>
                </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
