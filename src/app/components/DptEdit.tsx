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
import { LiaEdit } from "react-icons/lia";



export default function EditDepartmentBtn() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {/* Blue Add Department button */}
      {/* <Link href={`dashboard/book/${book.id}`}> */}
      <button 
          onClick={onOpen}
          className="inline-flex cursor-pointer text-sm items-center px-3 py-1.5 font-medium text-blue-700 bg-blue-50 border border-blue-200 rounded-md hover:bg-blue-100 hover:border-blue-300 outline-none  transition-all duration-150">
          <LiaEdit size={20} />
          Edit
      </button>
      {/* </Link> */}

      <Modal
        isOpen={isOpen}
        onOpenChange={(open) => !open && onClose()}
        placement="center"
        backdrop="blur"
        classNames={{ backdrop: "bg-black/30 backdrop-blur-sm" }}
      >
        <ModalContent className="bg-white rounded-lg p-6 grid gap-6 shadow-lg w-full max-w-md">
          <ModalHeader>
            <h2 className="text-lg font-bold text-[#111418]">Edit Department</h2>
          </ModalHeader>

          <ModalBody className="grid gap-4">
            <label className="flex flex-col gap-1">
              <span className="text-[#111418] font-medium">Department Name</span>
              <input
                type="text"
                placeholder="Enter department name"
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-base text-[#111418] focus:border-blue-500 focus:outline-none focus:ring-0"
              />
            </label>

            <label className="flex flex-col gap-1">
              <span className="text-[#111418] font-medium">Location</span>
              <input
                type="text"
                placeholder="Enter location"
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-base text-[#111418] focus:border-blue-500 focus:outline-none focus:ring-0"
              />
            </label>
          </ModalBody>

          <ModalFooter className="flex justify-end gap-2">
            <Button color="default" variant="light" onPress={onClose} className="text-[#617589]">
              Cancel
            </Button>
            <Button color="primary" onPress={onClose} className="bg-blue-500 text-white hover:bg-blue-600 rounded-md">
              Update Department
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
