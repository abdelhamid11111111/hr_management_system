'use client';
import React from 'react';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@heroui/react";
import { IoIosAdd } from "react-icons/io";



export default function AddEmployeeBtn() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const departments = ["Engineering", "Marketing", "Sales", "HR"];

  return (
    <>
      {/* Blue Add Employee button */}
      <button
        onClick={onOpen}
        className="flex items-center gap-2 cursor-pointer justify-center rounded-lg h-10 px-4 bg-blue-500 text-white text-base font-medium hover:bg-blue-600 transition-colors"
      >
        <IoIosAdd size={20} />
        <span>Add Employee</span>
      </button>

      <Modal
        isOpen={isOpen}
        onOpenChange={(open) => !open && onClose()}
        placement="center"
        backdrop="blur"
        classNames={{ backdrop: "bg-white/30 backdrop-blur-sm" }}
      >
        <ModalContent className="bg-white rounded-lg p-6 grid gap-6 shadow-lg w-full max-w-3xl">
          <ModalHeader>
            <h2 className="text-lg font-bold text-[#111418]">Add New Employee</h2>
          </ModalHeader>

          <ModalBody>
            <form className="grid grid-cols-2 gap-6">
              {/* Profile picture upload */}
              <div className="col-span-2 flex flex-col items-center">
                <label className="w-24 h-24 rounded-full border border-dashed border-gray-300 flex items-center justify-center cursor-pointer overflow-hidden">
                  <span className="text-gray-400 text-3xl">+</span>
                  <input type="file" accept="image/*" className="hidden" />
                </label>
                <p className="text-gray-500 text-base mt-2">Upload profile picture</p>
              </div>

              {/* Full Name */}
              <div className="flex flex-col gap-1">
                <label className="text-[#111418] font-medium text-base">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter employee name"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-base text-[#111418] focus:border-blue-500 focus:ring-0 focus:outline-none"
                />
              </div>

              {/* Department */}
              <div className="flex flex-col gap-1">
                <label className="text-[#111418] font-medium text-base">Department</label>
                <select
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-base text-[#111418] focus:border-blue-500 focus:ring-0 focus:outline-none bg-white shadow-sm"
                >
                  <option value="">Select department</option>
                  {departments.map((dept) => (
                    <option key={dept} value={dept}>{dept}</option>
                  ))}
                </select>
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-1">
                <label className="text-[#111418] font-medium text-base">Phone</label>
                <input
                  type="tel"
                  placeholder="Enter phone number"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-base text-[#111418] focus:border-blue-500 focus:ring-0 focus:outline-none"
                />
              </div>

              {/* Salary */}
              <div className="flex flex-col gap-1">
                <label className="text-[#111418] font-medium text-base">Salary</label>
                <input
                  type="number"
                  placeholder="Enter salary"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-base text-[#111418] focus:border-blue-500 focus:ring-0 focus:outline-none"
                />
              </div>

              {/* Email (full width) */}
              <div className="flex flex-col gap-1 col-span-2">
                <label className="text-[#111418] font-medium text-base">Email</label>
                <input
                  type="email"
                  placeholder="Enter email address"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-base text-[#111418] focus:border-blue-500 focus:ring-0 focus:outline-none"
                />
              </div>
            </form>
          </ModalBody>

          <ModalFooter className="flex gap-2 justify-end">
            <Button color="default" variant="light" onPress={onClose} className="text-[#617589]">
              Cancel
            </Button>
            <Button color="primary" onPress={onClose} className="bg-blue-500 rounded-md text-white hover:bg-blue-600">
              Add Employee
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
