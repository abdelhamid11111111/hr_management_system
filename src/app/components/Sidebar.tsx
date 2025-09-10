'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { GoHome } from "react-icons/go";
import { RiBuilding2Line } from "react-icons/ri";
import { PiPresentationChart } from "react-icons/pi";
import { MdOutlineStickyNote2 } from "react-icons/md";
import { usePathname } from 'next/navigation';

const SideBar = () => {

  const pathname = usePathname()

  const pages = [
    {
      title: 'Dashboard',
      icon: GoHome,
      path: '/'
    },
    {
      title: 'Reviews',
      icon: MdOutlineStickyNote2,
      path: '/reviews'
    },
    {
      title: 'Departments',
      icon: RiBuilding2Line,
      path: '/departments'
    },
    {
      title: 'Reports',
      icon: PiPresentationChart,
      path: '/reports'
    },
  ]

    const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(path);
  };


  return (
    <div className="layout-content-container flex flex-col w-80">
      <div className="flex h-full min-h-[700px] flex-col justify-between bg-white p-4">
        <div className="flex flex-col gap-4">
          <div className="flex gap-3">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
              style={{
                backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBgzkNZg8XnTjgbs2Nksb66Ryd3-mKWTXBNuELOzHUZgeWUuFI2AWXhPW3oo8zMqs69gx9BlQz3ed40bxDxA7xt90lPU_Oyu5gklDq7f0vS3K4xDtI21zEiZj9W8hz4X5zqWq_w6erPiNjh8JM7OmyS257gOOz7PqzkDB1dWzTb85h3ufoTAoOi3yV5g6EGvFkTogu5o9sKfDEHD3IN-h65dmK3TrHp7lzyhWb5GTm31i58kzCphR-3PhCOEAlUsITom3KzY-erN2JV")'
              }}
            ></div>
            <h1 className="text-[#111418] text-base justify-center flex font-medium leading-normal">
              Acme Co
            </h1>
          </div>
          
          <div className="flex flex-col gap-2">
            {
              pages.map(({path, icon: Icon, title}) => (
              <Link 
                key={path} 
                href={path}>
              <div className={`flex items-center gap-3 px-3 py-2 ${
                isActive(path)
                  ? 'bg-[#f0f2f4] rounded-lg'
                  : 'text-[#111418]'
                }`}>
                <div className="" data-icon="House" data-size="24px" data-weight="regular">
                  <Icon size={30} />
                </div>
                <p className=" text-sm font-medium leading-normal">{title}</p>
              </div>
              </Link>
              ))
            }

            
            {/* <Link href={'/reviews'}>
              <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-[#f0f2f4]">
                <div className="text-[#111418]" data-icon="Users" data-size="24px" data-weight="fill">
                  <MdOutlineStickyNote2 size={30} />
                </div>
                <p className="text-[#111418] text-sm font-medium leading-normal">Reviews</p>
              </div>
            </Link> */}
            
            {/* <Link href={'/departments'}>
              <div className="flex items-center gap-3 px-3 py-2">
                <div className="text-[#111418]" data-icon="Buildings" data-size="24px" data-weight="regular">
                  <RiBuilding2Line size={30} />
                </div>
                <p className="text-[#111418] text-sm font-medium leading-normal">Departments</p>
              </div>
            </Link> */}
            
            {/* <Link href={'/reports'}>
              <div className="flex items-center gap-3 px-3 py-2">
                <div className="text-[#111418]" data-icon="PresentationChart" data-size="24px" data-weight="regular">
                  <PiPresentationChart size={30} />
                </div>
                <p className="text-[#111418] text-sm font-medium leading-normal">Reports</p>
              </div>
            </Link> */}
          </div>
        </div>
        
        </div>
      </div>
  );
};

export default SideBar;