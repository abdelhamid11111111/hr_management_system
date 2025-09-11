'use client'
import React, { useState, useEffect } from "react";
import SideBar from "../components/Sidebar";
import AddDepartmentBtn from "../components/DptAdd";
import { MdDeleteOutline } from "react-icons/md";
import EditDepartmentBtn from "../components/DptEdit";



interface Departements{
  name: string;
  location: string;
  date: string
}


const Department = () => {

  const [departements, setDepartments] = useState<Departements[]>([])

    useEffect(() => {
      const fetchDpt = async () => {
        try{
        const res = await fetch('/api/department')
        const data = await res.json()
        setDepartments(data)
        }catch(error){
          console.error('error fetch data', error);
        }
      }
      fetchDpt()
    },[])

  return (
    <div className="relative flex min-h-screen flex-col bg-white overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="gap-1 px-6 flex flex-1 justify-center py-5">
          {/* Sidebar */}
          <SideBar />

          {/* Main Content */}
          <div className="layout-content-container flex flex-col w-full flex-1">
            {/* Header */}
            <div className="flex justify-between items-center p-4">
              <p className="text-[#111418] text-[32px] font-bold leading-tight">Departments</p>
              <AddDepartmentBtn /> 
            </div>

            {/* Table */}
            <div className="px-4 py-3 @container">
              <div className="flex overflow-hidden rounded-lg border border-[#dbe0e6] bg-white">
                <table className="flex-1">
                  <thead>
                    <tr className="bg-white">
                      <th className="px-4 py-3 text-left text-[#111418] w-[400px] text-sm font-medium leading-normal">
                        Department Name
                      </th>
                      <th className="px-4 py-3 text-left text-[#111418] w-[400px] text-sm font-medium leading-normal">
                        Location
                      </th>
                      <th className="px-4 py-3 text-left text-[#111418] w-[400px] text-sm font-medium leading-normal">
                        Creation Date
                      </th>
                      <th className="px-4 py-3 text-left text-[#111418] w-60 text-sm font-medium leading-normal">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {departements.map((dept, index) => (
                      <tr key={index} className="border-t border-t-[#dbe0e6]">
                        <td className="h-[72px] px-4 py-2 w-[400px] text-[#111418] text-sm font-normal">
                          {dept.name}
                        </td>
                        <td className="h-[72px] px-4 py-2 w-[400px] text-[#617589] text-sm font-normal">
                          {dept.location}
                        </td>
                        <td className="h-[72px] px-4 py-2 w-[400px] text-[#617589] text-sm font-normal">
                          {dept.date}
                        </td>
                        <td className="h-[72px] px-4 py-2 w-60 text-[#617589] text-sm font-bold flex gap-2">
                        <div className="flex items-center gap-2">
                          <EditDepartmentBtn/>
                            <button 
                              // onClick={() => handleDelete(book.id)}
                              className="inline-flex cursor-pointer items-center text-sm px-3 py-1.5 font-medium text-red-700 bg-red-50 border border-red-200 rounded-md hover:bg-red-100 hover:border-red-300 outline-none  transition-all duration-150">
                                <MdDeleteOutline size={20} />
                                Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default Department;
