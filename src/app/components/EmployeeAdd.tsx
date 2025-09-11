'use client';
import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { IoIosAdd } from "react-icons/io";
import Image from 'next/image';
import { Employee, EmployeeForm, Department } from '../../types/employee';

interface AddEmployeeBtnProps {
  onEmployeeAdded?: (newEmp: Employee) => void;
}

export default function AddEmployeeBtn({ onEmployeeAdded }: AddEmployeeBtnProps) {
  const [form, setForm] = useState<EmployeeForm>({
    name: '',
    department: 0,
    phone: '',
    salary: 0, 
    email: '',
    profilePic: null
  });
  const [error, setError] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [departments, setDepartments] = useState<Department[]>([]);

  useEffect(() => {
    const fetchDpt = async () => {
      try {
        const res = await fetch('/api/department');
        const data = await res.json();
        setDepartments(data);
      } catch (error) {
        console.error('error fetch data', error);
      }
    };
    fetchDpt();
  }, []);

  const handleAddEmployee = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/employee', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form) // ✅ send raw form, not {form}
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || 'Failed to add employee');
      } else {
        const newEmployee = await res.json();
        toast.success('Employee Successfully Added');
        setIsOpen(false);
        setForm({
          name: '',
          department: 0,
          phone: '',
          salary: 0,
          email: '',
          profilePic: null
        });
        setError(null);
        if (onEmployeeAdded) onEmployeeAdded(newEmployee);
      }
    } catch (error) {
      console.error('server error:', error);
      setError(error instanceof Error ? error.message : 'Failed to add employee');
    }
  };

  return (
    <>
      {/* Blue Add Employee button */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 justify-center rounded-lg h-10 px-4 bg-blue-500 text-white text-base font-medium hover:bg-blue-600 transition-colors"
      >
        <IoIosAdd size={20} />
        <span>Add Employee</span>
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
          <Toaster position="top-center" />
          <div className="bg-white rounded-lg p-6 shadow-lg w-full max-w-3xl">
            {/* Header */}
            <div className="mb-4">
              <h2 className="text-lg font-bold text-[#111418]">Add New Employee</h2>
            </div>

            {/* Error message */}
            {error && (
              <div className="col-span-2 mb-4 p-3 bg-red-100 text-red-700 rounded-md border border-red-300">
                {error}
              </div>
            )}

            {/* Body */}
            <form className="grid grid-cols-2 gap-6">
              {/* Profile picture upload with preview */}
              <div className="col-span-2 flex flex-col items-center">
                <label className="w-24 h-24 rounded-full border border-dashed border-gray-300 flex items-center justify-center cursor-pointer overflow-hidden">
                  {form.profilePic ? (
                    <Image
                      width={96}
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
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (!file) return;
                      const reader = new FileReader();
                      reader.onloadend = () => {
                        setForm({ ...form, profilePic: reader.result as string });
                      };
                      reader.readAsDataURL(file);
                    }}
                  />
                </label>
                <p className="text-gray-500 text-base mt-2">Upload profile picture</p>
              </div>

              {/* Full Name */}
              <div className="flex flex-col gap-1">
                <label className="text-[#111418] font-medium text-base">Full Name</label>
                <input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
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
                  onChange={(e) => setForm({...form, department: parseInt(e.target.value, 10)})}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-base text-[#111418] focus:border-blue-500 focus:ring-0 focus:outline-none bg-white shadow-sm"
                >
                  <option value="">Select department</option>
                  {departments.map((dept) => (
                    <option key={dept.id} value={dept.id}>
                      {dept.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-1">
                <label className="text-[#111418] font-medium text-base">Phone</label>
                <input
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
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
                  onChange={(e) => setForm({...form, salary: parseInt(e.target.value, 10)})} // ✅ Number()
                  type="number"
                  placeholder="Enter salary"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-base text-[#111418] focus:border-blue-500 focus:ring-0 focus:outline-none"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1 col-span-2">
                <label className="text-[#111418] font-medium text-base">Email</label>
                <input
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
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
                onClick={handleAddEmployee}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
              >
                Add Employee
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
