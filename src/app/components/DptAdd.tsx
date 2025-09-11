'use client';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { IoIosAdd } from "react-icons/io";

export default function AddDepartmentBtn() {

  const [form, setForm] = useState({
    name: '',
    location: ''
  })
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState<string | null>(null)


    const handleAddDepartment = async (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()
      try{
        const res = await fetch('/api/department', {
          method: 'POST',
          headers: {'Content-Type' : 'application/json'},
          body: JSON.stringify({form})
      })
        if (!res.ok) {
          const errorData = await res.json();
          throw new Error(errorData.error || 'Failed to add book');
        } else{
          toast.success('Department Successfully Added')
          setIsOpen(false);
          setForm({
              name: '',
              location: ''
            });
          setError(null);
        }
        
      } catch(error){
        console.error('server error:', error);
        setError(error instanceof Error ? error.message : 'Failed to add departement')
      }
    }


  return (
    <>
      {/* Blue Add Department button */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 justify-center rounded-lg h-10 px-4 bg-blue-500 text-white text-base font-medium hover:bg-blue-600 transition-colors"
      >
        <IoIosAdd size={20} />
        <span>Add Department</span>
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
          <div className="bg-white rounded-lg p-6 shadow-lg w-full max-w-md">
            {/* Header */}
            <div className="mb-4">
              <h2 className="text-lg font-bold text-[#111418]">Add Department</h2>
            </div>

            {/* Error message */}
            {error && (
              <div className="col-span-2 mb-4 p-3 bg-red-100 text-red-700 rounded-md border border-red-300">
                      {error}
              </div>
            )}

            {/* Body */}
            <div className="grid gap-4">
              <label className="flex flex-col gap-1">
                <span className="text-[#111418] font-medium">Department Name</span>
                <input
                  value={form.name}
                  onChange={(e) => setForm({...form, name: e.target.value})}
                  type="text"
                  placeholder="Enter department name"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-base text-[#111418] focus:border-blue-500 focus:outline-none focus:ring-0"
                />
              </label>

              <label className="flex flex-col gap-1">
                <span className="text-[#111418] font-medium">Location</span>
                <input
                  value={form.location}
                  onChange={(e) => setForm({...form, location: e.target.value})}
                  type="text"
                  placeholder="Enter location"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-base text-[#111418] focus:border-blue-500 focus:outline-none focus:ring-0"
                />
              </label>
            </div>

            {/* Footer */}
            <div className="flex justify-end gap-2 mt-6">
              <button
                onClick={() => setIsOpen(false)}
                className="text-[#617589] bg-gray-100 px-4 py-2 rounded-md hover:bg-gray-200 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleAddDepartment}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
              >
                Add Department
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
