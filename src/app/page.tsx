import SideBar from "./components/Sidebar";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { IoIosAdd } from "react-icons/io";
import AddBtn from "./components/EmployeeAdd";
import { LiaEdit } from "react-icons/lia";
import { MdDeleteOutline } from "react-icons/md";
import EditEmployeeBtn from "./components/EmployeeEdit";

const Dashboard = () => {
  return (
    <div className="relative flex size-full min-h-screen w-full flex-col bg-white group/design-root overflow-x-hidden font-sans">
      <div className="layout-container flex h-full w-full grow flex-col">
        <div className="gap-1 px-6 flex flex-1 justify-center w-full py-5">
          <SideBar/>
          
          <div className="layout-content-container flex flex-col w-full flex-1">
            {/* Header Section */}
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="text-[#111418] tracking-light text-[32px] font-bold leading-tight min-w-72">
                Employees
              </p>
              <AddBtn/>

            </div>

            {/* Search Section */}
            <div className="px-4 py-3">
              <label className="flex flex-col min-w-40 h-12 w-full">
                <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                  <div className="text-[#617589] flex border-none bg-[#f0f2f4] items-center justify-center pl-4 rounded-l-lg border-r-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
                    </svg>
                  </div>
                  <input
                    placeholder="Search employees"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111418] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f4] focus:border-none h-full placeholder:text-[#617589] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                  />
                </div>
              </label>
            </div>

            {/* Table Section */}
            <h3 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
              All Employees
            </h3>
            
            <div className="px-4 py-3 @container">
              <div className="flex overflow-hidden rounded-lg border border-[#dbe0e6] bg-white">
                <table className="flex-1">
                  <thead>
                    <tr className="bg-white">
                      <th className="table-c3d280db-feb9-48b9-b23f-c5a750000196-column-56 px-4 py-3 text-left text-[#111418] w-14 text-sm font-medium leading-normal">
                        Picture
                      </th>
                      <th className="table-c3d280db-feb9-48b9-b23f-c5a750000196-column-176 px-4 py-3 text-left text-[#111418] w-[400px] text-sm font-medium leading-normal">
                        Name
                      </th>
                      <th className="table-c3d280db-feb9-48b9-b23f-c5a750000196-column-296 px-4 py-3 text-left text-[#111418] w-[400px] text-sm font-medium leading-normal">
                        Department
                      </th>
                      <th className="table-c3d280db-feb9-48b9-b23f-c5a750000196-column-416 px-4 py-3 text-left text-[#111418] w-[400px] text-sm font-medium leading-normal">
                        Salary
                      </th>
                      <th className="table-c3d280db-feb9-48b9-b23f-c5a750000196-column-536 px-4 py-3 text-left text-[#111418] w-[400px] text-sm font-medium leading-normal">
                        Phone
                      </th>
                      <th className="table-c3d280db-feb9-48b9-b23f-c5a750000196-column-656 px-4 py-3 text-left text-[#111418] w-[400px] text-sm font-medium leading-normal">
                        Email
                      </th>
                      <th className="table-c3d280db-feb9-48b9-b23f-c5a750000196-column-776 px-4 py-3 text-left text-[#111418] w-60 text-sm font-medium leading-normal">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  
                  <tbody>
                    {/* Employee 1 */}
                    <tr className="border-t border-t-[#dbe0e6]">
                      <td className="table-c3d280db-feb9-48b9-b23f-c5a750000196-column-56 h-[72px] px-4 py-2 w-14 text-sm font-normal leading-normal">
                        <div
                          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10"
                          style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAqwCJYikRva-lSP3dsfl0vtSOyX62fAorsqXqZLuKcx_2F-PhnvzjAHyUAre8BPIWV_ZnbaXcsDZV4451OvVat43u2RPbY23oL6hUcnSIp0PoF65gxsnYHAB3WdH4jsXUklah5TR2xlV5Qi7XO9_fwV33caNKeqNvLdQXPETtrSj8Ncwod7iuARtzEnYnT4KBgsoI8vSBbsor3-mhdh4i73DMqw5vr-GQ_4A2cduHMmb1vNe4LAYCDw_xBIl8MqNsObvyB3zD69vyW")'}}
                        />
                      </td>
                      <td className="table-c3d280db-feb9-48b9-b23f-c5a750000196-column-176 h-[72px] px-4 py-2 w-[400px] text-[#111418] text-sm font-normal leading-normal">
                        Sophia Clark
                      </td>
                      <td className="table-c3d280db-feb9-48b9-b23f-c5a750000196-column-296 h-[72px] px-4 py-2 w-[400px] text-[#617589] text-sm font-normal leading-normal">
                        Marketing
                      </td>
                      <td className="table-c3d280db-feb9-48b9-b23f-c5a750000196-column-416 h-[72px] px-4 py-2 w-[400px] text-[#617589] text-sm font-normal leading-normal">
                        $65,000
                      </td>
                      <td className="table-c3d280db-feb9-48b9-b23f-c5a750000196-column-536 h-[72px] px-4 py-2 w-[400px] text-[#617589] text-sm font-normal leading-normal">
                        (555) 123-4567
                      </td>
                      <td className="table-c3d280db-feb9-48b9-b23f-c5a750000196-column-656 h-[72px] px-4 py-2 w-[400px] text-[#617589] text-sm font-normal leading-normal">
                        sophia.clark@example.com
                      </td>
                      <td className="h-[72px] px-4 py-2 w-60 text-sm font-bold leading-normal tracking-[0.015em]">
                        <div className="flex items-center gap-2">
                            <EditEmployeeBtn/>
                            <button 
                              // onClick={() => handleDelete(book.id)}
                              className="inline-flex cursor-pointer items-center text-sm px-3 py-1.5 font-medium text-red-700 bg-red-50 border border-red-200 rounded-md hover:bg-red-100 hover:border-red-300 outline-none  transition-all duration-150">
                                <MdDeleteOutline size={20} />
                                Delete
                            </button>
                          </div>
                      </td>
                    </tr>

                    {/* Employee 2 */}
                    <tr className="border-t border-t-[#dbe0e6]">
                      <td className="table-c3d280db-feb9-48b9-b23f-c5a750000196-column-56 h-[72px] px-4 py-2 w-14 text-sm font-normal leading-normal">
                        <div
                          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10"
                          style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCLHPrADl-y3qaJFCqXZSvK_EptR16D6PVe3MoMzW4TmaNOr4Skho8eeepGLmotRjmW4PoApqDFsmKCWL4KrmfiIbVLj4G6L4Zgkc3b_Fvtq8G_8LCtbfehNuZjT2HHSfPofx-TZLqsAMbmsp9Uwda627o_pCkBcc8WNoRQffDwQimy6MAJh49fhwJ9G_6jpqic_B018bWxPwGAPmTeoummWgmnid3qaYBxrS8aN-84C1Yca5PdLkCZx9aKGPIZ2hCThqhubdEtFrbb")'}}
                        />
                      </td>
                      <td className="table-c3d280db-feb9-48b9-b23f-c5a750000196-column-176 h-[72px] px-4 py-2 w-[400px] text-[#111418] text-sm font-normal leading-normal">
                        Ethan Bennett
                      </td>
                      <td className="table-c3d280db-feb9-48b9-b23f-c5a750000196-column-296 h-[72px] px-4 py-2 w-[400px] text-[#617589] text-sm font-normal leading-normal">
                        Sales
                      </td>
                      <td className="table-c3d280db-feb9-48b9-b23f-c5a750000196-column-416 h-[72px] px-4 py-2 w-[400px] text-[#617589] text-sm font-normal leading-normal">
                        $70,000
                      </td>
                      <td className="table-c3d280db-feb9-48b9-b23f-c5a750000196-column-536 h-[72px] px-4 py-2 w-[400px] text-[#617589] text-sm font-normal leading-normal">
                        (555) 987-6543
                      </td>
                      <td className="table-c3d280db-feb9-48b9-b23f-c5a750000196-column-656 h-[72px] px-4 py-2 w-[400px] text-[#617589] text-sm font-normal leading-normal">
                        ethan.bennett@example.com
                      </td>
                      <td className="table-c3d280db-feb9-48b9-b23f-c5a750000196-column-776 h-[72px] px-4 py-2 w-60 text-[#617589] text-sm font-bold leading-normal tracking-[0.015em]">
                        Edit | Delete
                      </td>
                    </tr>

                    {/* Employee 3 */}
                    <tr className="border-t border-t-[#dbe0e6]">
                      <td className="table-c3d280db-feb9-48b9-b23f-c5a750000196-column-56 h-[72px] px-4 py-2 w-14 text-sm font-normal leading-normal">
                        <div
                          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10"
                          style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD0JO7ITBju2CKw0-94ag7QQ-wqo8MH2k_xVaUbdu1TPdabNTQB1XteZLbM3-XvNtt1rWQzyfjEny3m7XmAtpkDhvDq8QgtYQ0RTOjLA2E3ItFo_h6lV_0mgPbl5OD2dDzPDCcE4CQYqqZO2BzTalcyj_9RMYRUW7IJcvDZThXLojDvWvlmsZyzhpjbwwjNAbQZJtsi5C7bOw3t0L4YkAHga6Oe3gEzyNljFmFSuthW-4mWe_7jS77A4uoKqLsplcjGjeKnPS_CUatz")'}}
                        />
                      </td>
                      <td className="table-c3d280db-feb9-48b9-b23f-c5a750000196-column-176 h-[72px] px-4 py-2 w-[400px] text-[#111418] text-sm font-normal leading-normal">
                        Olivia Hayes
                      </td>
                      <td className="table-c3d280db-feb9-48b9-b23f-c5a750000196-column-296 h-[72px] px-4 py-2 w-[400px] text-[#617589] text-sm font-normal leading-normal">
                        HR
                      </td>
                      <td className="table-c3d280db-feb9-48b9-b23f-c5a750000196-column-416 h-[72px] px-4 py-2 w-[400px] text-[#617589] text-sm font-normal leading-normal">
                        $60,000
                      </td>
                      <td className="table-c3d280db-feb9-48b9-b23f-c5a750000196-column-536 h-[72px] px-4 py-2 w-[400px] text-[#617589] text-sm font-normal leading-normal">
                        (555) 246-8013
                      </td>
                      <td className="table-c3d280db-feb9-48b9-b23f-c5a750000196-column-656 h-[72px] px-4 py-2 w-[400px] text-[#617589] text-sm font-normal leading-normal">
                        olivia.hayes@example.com
                      </td>
                      <td className="h-[72px] px-4 py-2 w-60 text-sm font-bold leading-normal tracking-[0.015em]">
                        <div className="flex items-center gap-2">
                          {/* <Link href={`dashboard/book/${book.id}`}> */}
                            <button 
                              className="inline-flex cursor-pointer text-sm items-center px-3 py-1.5 font-medium text-blue-700 bg-blue-50 border border-blue-200 rounded-md hover:bg-blue-100 hover:border-blue-300 outline-none  transition-all duration-150">
                              <LiaEdit size={20} />
                              Edit
                            </button>
                          {/* </Link> */}
                            <button 
                              // onClick={() => handleDelete(book.id)}
                              className="inline-flex cursor-pointer items-center text-sm px-3 py-1.5 font-medium text-red-700 bg-red-50 border border-red-200 rounded-md hover:bg-red-100 hover:border-red-300 outline-none  transition-all duration-150">
                                <MdDeleteOutline size={20} />
                                Delete
                            </button>
                          </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <style>
                {`@container(max-width:56px){.table-c3d280db-feb9-48b9-b23f-c5a750000196-column-56{display: none;}}
                @container(max-width:176px){.table-c3d280db-feb9-48b9-b23f-c5a750000196-column-176{display: none;}}
                @container(max-width:296px){.table-c3d280db-feb9-48b9-b23f-c5a750000196-column-296{display: none;}}
                @container(max-width:416px){.table-c3d280db-feb9-48b9-b23f-c5a750000196-column-416{display: none;}}
                @container(max-width:536px){.table-c3d280db-feb9-48b9-b23f-c5a750000196-column-536{display: none;}}
                @container(max-width:656px){.table-c3d280db-feb9-48b9-b23f-c5a750000196-column-656{display: none;}}
                @container(max-width:776px){.table-c3d280db-feb9-48b9-b23f-c5a750000196-column-776{display: none;}}`}
              </style>
            </div>

            {/* Pagination Section */}
            {/* <div className="flex items-center justify-center p-4">
              <a href="#" className="flex size-10 items-center justify-center">
                <div className="text-[#111418]" data-icon="CaretLeft" data-size="18px" data-weight="regular">
                  <FaArrowLeft size={10}/>
                </div>
              </a>
              <a className="text-sm font-bold leading-normal tracking-[0.015em] flex size-10 items-center justify-center text-[#111418] rounded-full bg-[#f0f2f4]" href="#">
                1
              </a>
              <a className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#111418] rounded-full" href="#">
                2
              </a>
              <a className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#111418] rounded-full" href="#">
                3
              </a>
              <a className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#111418] rounded-full" href="#">
                4
              </a>
              <a className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#111418] rounded-full" href="#">
                5
              </a>
              <a href="#" className="flex size-10 items-center justify-center">
                <div className="text-[#111418]" data-icon="CaretLeft" data-size="18px" data-weight="regular">
                  <FaArrowRight size={10}/>
                </div>
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;