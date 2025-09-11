'use client';
import React, { useState, useEffect } from 'react';
import { LiaEdit } from "react-icons/lia";
import Image from 'next/image';
import { useParams } from 'next/navigation';



interface Department{
  id: number;
  name: string;
}

interface Employee{
  id?: number;
  name: string;
  phone: string;
  email: string;
  profilePic: string;
  salary: string;
  department: string
}

export default function EditEmployeeBtn({ id }: { id: number }) {
  
  const [form, setForm] = useState<Employee>({
    name: '',
    department: '',
    phone: '',
    salary: '',
    email: '',
    profilePic: ''
  });
  const [isOpen, setIsOpen] = useState(false);
  
  const [departments, setDepartments] = useState<Department[]>([])

    useEffect(() => {
      if (!id) return;
      const fetchDate = async () => {
        try{
          const res = await fetch(`/api/employee/${id}`)
          if(!res.ok){
            throw new Error('Failed to fetch employee');
          }
          const data = await res.json()
          setForm({
            name: data.name || '',
            department: data.department || '',
            phone: data.phone || '',
            salary: data.salary || '',
            email: data.email || '',
            profilePic: data.profilePic || ''
          })
        } catch(error){
          console.error('server error', error);
        }
      }
      fetchDate()
    },[id])
  
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

    const handlePic = async (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setForm((prev) => ({
            ...prev,
            profilePic: reader.result as string,
          }));
        };
        reader.readAsDataURL(file);
      }
    }

    // const handleUpdate = async () => {

    // }


  return (
    <>
      {/* Edit Employee button */}
      <button 
        onClick={() => setIsOpen(true)}
        className="inline-flex cursor-pointer text-sm items-center px-3 py-1.5 font-medium text-blue-700 bg-blue-50 border border-blue-200 rounded-md hover:bg-blue-100 hover:border-blue-300 outline-none transition-all duration-150"
      >
        <LiaEdit size={20} />
        Edit
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
          <div className="bg-white rounded-lg p-6 shadow-lg w-full max-w-3xl">
            {/* Header */}
            <div className="mb-4">
              <h2 className="text-lg font-bold text-[#111418]">Edit Employee</h2>
            </div>

            {/* Body */}
            <form className="grid grid-cols-2 gap-6">
              {/* Profile picture upload */}
              <div className="col-span-2 flex flex-col items-center">
                <label className="w-24 h-24 rounded-full border border-dashed border-gray-300 flex items-center justify-center cursor-pointer overflow-hidden">
                  {form.profilePic ? (
                    <Image
                      width={96} // or whatever size you want
                      height={96}
                      src={form.profilePic}
                      alt="Profile Preview"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-gray-400 text-3xl">+</span>
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handlePic}
                  />
                </label>
                <button className="text-gray-500 text-base mt-2">Update profile picture</button>
              </div>

              {/* Full Name */}
              <div className="flex flex-col gap-1">
                <label className="text-[#111418] font-medium text-base">Full Name</label>
                <input
                  value={form.name}
                  onChange={(e) => setForm({...form, name: e.target.value})}
                  type="text"
                  placeholder="Enter employee name"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-base text-[#111418] focus:border-blue-500 focus:ring-0 focus:outline-none"
                />
              </div>

              {/* Department */}
              <div className="flex flex-col gap-1">
                <label className="text-[#111418] font-medium text-base">Department</label>
                <select
                  value={form.department}
                  onChange={(e) => setForm({...form, department: e.target.value})}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-base text-[#111418] focus:border-blue-500 focus:ring-0 focus:outline-none bg-white shadow-sm"
                >
                  <option value="">Select department</option>
                  {departments.map((dept) => (
                    <option key={dept.id} value={dept.id}>{dept.name}</option>
                  ))}
                </select>
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-1">
                <label className="text-[#111418] font-medium text-base">Phone</label>
                <input
                  value={form.phone}
                  onChange={(e) => setForm({...form, phone: e.target.value})}
                  type="tel"
                  placeholder="Enter phone number"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-base text-[#111418] focus:border-blue-500 focus:ring-0 focus:outline-none"
                />
              </div>

              {/* Salary */}
              <div className="flex flex-col gap-1">
                <label className="text-[#111418] font-medium text-base">Salary</label>
                <input
                  value={form.salary}
                  onChange={(e) => setForm({...form, salary: e.target.value})}
                  type="number"
                  placeholder="Enter salary"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-base text-[#111418] focus:border-blue-500 focus:ring-0 focus:outline-none"
                />
              </div>

              {/* Email (full width) */}
              <div className="flex flex-col gap-1 col-span-2">
                <label className="text-[#111418] font-medium text-base">Email</label>
                <input
                  value={form.email}
                  onChange={(e) => setForm({...form, email: e.target.value})}
                  type="email"
                  placeholder="Enter email address"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-base text-[#111418] focus:border-blue-500 focus:ring-0 focus:outline-none"
                />
              </div>
            </form>

            {/* Footer */}
            <div className="flex gap-2 justify-end mt-6">
              <button
                onClick={() => setIsOpen(false)}
                className="text-[#617589] bg-gray-100 px-4 py-2 rounded-md hover:bg-gray-200 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="bg-blue-500 rounded-md text-white px-4 py-2 hover:bg-blue-600 transition-colors"
              >
                Update Employee
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
