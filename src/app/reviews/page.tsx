import React from "react";
import SideBar from "../components/Sidebar";
import AddReviewModal from "../components/ReviewsAdd";
import { MdDeleteOutline } from "react-icons/md";
import EditReviewModal from "../components/ReviewsEdit";

const Reviews = () => {
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden"
    //   style={{
    //     // "--select-button-svg":
    //       "url('data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724px%27 height=%2724px%27 fill=%27rgb(97,117,137)%27 viewBox=%270 0 256 256%27%3e%3cpath d=%27M181.66,170.34a8,8,0,0,1,0,11.32l-48,48a8,8,0,0,1-11.32,0l-48-48a8,8,0,0,1,11.32-11.32L128,212.69l42.34-42.35A8,8,0,0,1,181.66,170.34Zm-96-84.68L128,43.31l42.34,42.35a8,8,0,0,0,11.32-11.32l-48-48a8,8,0,0,0-11.32,0l-48,48A8,8,0,0,0,85.66,85.66Z%27%3e%3c/path%3e%3c/svg%3e')",
    //     fontFamily: 'Inter, "Noto Sans", sans-serif',
    //   }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <div className="gap-1 px-6 flex flex-1 justify-center py-5">
          {/* Sidebar */}
          <SideBar/>

          {/* Main Content */}
          <div className="layout-content-container flex flex-col w-full flex-1">
            {/* Header with Add Review button */}
            <div className="flex flex-wrap justify-between items-center gap-3 p-4">
              <p className="text-[#111418] tracking-light text-[32px] font-bold leading-tight min-w-72">
                Performance Reviews
              </p>
              <AddReviewModal />
            </div>

            {/* Filters */}
            <span className="text-base ml-5 font-medium">Filtring By Rating</span>
            <div className="flex px-4 py-3">
              <div className="flex h-10 flex-1 items-center justify-center rounded-lg bg-[#f0f2f4] p-1">
                <label
                  className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 has-[:checked]:bg-white has-[:checked]:shadow-[0_0_4px_rgba(0,0,0,0.1)] has-[:checked]:text-[#111418] text-[#617589] text-sm font-medium leading-normal"
                >
                  <span className="truncate">1 ~ 2</span>
                  <input type="radio" name="abb7fa4c-45ee-467e-b591-e223a9c1e1bf" className="invisible w-0" value="Between 1 and 2" />
                </label>
                <label
                  className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 has-[:checked]:bg-white has-[:checked]:shadow-[0_0_4px_rgba(0,0,0,0.1)] has-[:checked]:text-[#111418] text-[#617589] text-sm font-medium leading-normal"
                >
                  <span className="truncate">2 ~ 3</span>
                  <input type="radio" name="abb7fa4c-45ee-467e-b591-e223a9c1e1bf" className="invisible w-0" value="Between 2 and 3" />
                </label>
                <label
                  className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 has-[:checked]:bg-white has-[:checked]:shadow-[0_0_4px_rgba(0,0,0,0.1)] has-[:checked]:text-[#111418] text-[#617589] text-sm font-medium leading-normal"
                >
                  <span className="truncate">3 ~ 4</span>
                  <input type="radio" name="abb7fa4c-45ee-467e-b591-e223a9c1e1bf" className="invisible w-0" value="Between 3 and 4"  />
                </label>
                <label
                  className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 has-[:checked]:bg-white has-[:checked]:shadow-[0_0_4px_rgba(0,0,0,0.1)] has-[:checked]:text-[#111418] text-[#617589] text-sm font-medium leading-normal"
                >
                  <span className="truncate">4 ~ 5</span>
                  <input type="radio" name="abb7fa4c-45ee-467e-b591-e223a9c1e1bf" className="invisible w-0" value="Between 4 and 5" />
                </label>
              </div>
              </div>

            {/* Table */}
            <div className="px-4 py-3 @container">
              <div className="flex overflow-hidden rounded-lg border border-[#dbe0e6] bg-white">
                <table className="flex-1">
                  <thead>
                    <tr className="bg-white">
                      <th className="px-4 py-3 text-left text-[#111418] w-[400px] text-sm font-medium leading-normal">
                        Employee
                      </th>
                      <th className="px-4 py-3 text-left text-[#111418] w-[400px] text-sm font-medium leading-normal">
                        Rating
                      </th>
                      <th className="px-4 py-3 text-left text-[#111418] w-[400px] text-sm font-medium leading-normal">
                        Review Date
                      </th>
                      <th className="px-4 py-3 text-left text-[#111418] w-[400px] text-sm font-medium leading-normal">
                        Notes
                      </th>
                      <th className="px-4 py-3 text-left text-[#111418] w-[400px] text-sm font-medium leading-normal">
                        Actions
                      </th>
                      <th className="px-4 py-3 text-left text-[#111418] w-60"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        name: "Ethan Harper",
                        rating: "4.5",
                        date: "2023-11-15",
                        notes: "Excellent performance this quarter.",
                      },
                      {
                        name: "Olivia Bennett",
                        rating: "3.8",
                        date: "2023-11-10",
                        notes:
                          "Consistent performer, needs improvement in teamwork.",
                      },
                      {
                        name: "Noah Carter",
                        rating: "4.2",
                        date: "2023-11-05",
                        notes: "Strong technical skills, good communication.",
                      },
                      {
                        name: "Ava Thompson",
                        rating: "3.5",
                        date: "2023-10-30",
                        notes: "Needs to improve time management.",
                      },
                      {
                        name: "Liam Foster",
                        rating: "4.0",
                        date: "2023-10-25",
                        notes: "Good problem-solving skills.",
                      },
                    ].map((row) => (
                      <tr key={row.name} className="border-t border-t-[#dbe0e6]">
                        <td className="h-[72px] px-4 py-2 w-[400px] text-[#111418] text-sm">
                          {row.name}
                        </td>
                        <td className="h-[72px] px-4 py-2 w-[400px] text-[#617589] text-sm">
                          {row.rating}
                        </td>
                        <td className="h-[72px] px-4 py-2 w-[400px] text-[#617589] text-sm">
                          {row.date}
                        </td>
                        <td className="h-[72px] px-4 py-2 w-[400px] text-[#617589] text-sm">
                          {row.notes}
                        </td>
                        <td className="h-[72px] px-4 py-2 w-60 text-[#617589] text-sm font-bold tracking-[0.015em]">
                        <div className="flex items-center gap-2">
                          <EditReviewModal/>
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
  )
};

export default Reviews;
