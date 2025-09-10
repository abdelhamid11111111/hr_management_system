'use client';
import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@heroui/react";

export default function AddReviewModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {/* Trigger button */}
      <button
        onClick={onOpen}
        className="flex items-center gap-2 cursor-pointer justify-center rounded-lg h-10 px-4 bg-blue-500 text-white text-base font-medium hover:bg-blue-600 transition-colors"
      >
        + Add Review
      </button>

      {/* Modal */}
      <Modal
        isOpen={isOpen}
        onOpenChange={(open) => !open && onClose()}
        placement="center"
        backdrop="blur"
        classNames={{ backdrop: "bg-white/30 backdrop-blur-sm" }}
      >
        
        <ModalContent className="bg-white rounded-lg p-6 grid gap-6 shadow-lg w-full max-w-2xl">
          <ModalHeader>
            <h2 className="text-lg font-bold text-[#111418]">Add New Review</h2>
          </ModalHeader>
          <ModalBody>
            <form className="grid gap-4">
              {/* Employee */}
              <div className="flex flex-col gap-1">
                <label className="text-[#111418] font-medium text-base">Employee</label>
                <select className="w-full rounded-md border border-gray-300 px-3 py-2 text-base text-[#111418] focus:border-blue-500 focus:outline-none bg-white shadow-sm">
                  <option value="">Select Employee</option>
                  <option value="Ethan">Ethan Harper</option>
                  <option value="Olivia">Olivia Bennett</option>
                </select>
              </div>

              {/* Rating */}
              <div className="flex flex-col gap-1">
                <label className="text-[#111418] font-medium text-base">Rating</label>
                <input
                  type="number"
                  placeholder="Enter Rating"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-base text-[#111418] focus:border-blue-500 focus:outline-none"
                />
              </div>

              {/* Review Date */}
              <div className="flex flex-col gap-1">
                <label className="text-[#111418] font-medium text-base">Review Date</label>
                <input
                  type="date"
                  defaultValue={new Date().toISOString().split("T")[0]}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-base text-[#111418] focus:border-blue-500 focus:outline-none"
                />
              </div>

              {/* Notes */}
              <div className="flex flex-col gap-1">
                <label className="text-[#111418] font-medium text-base">Notes</label>
                <textarea
                  placeholder="Enter notes"
                  className="w-full h-28 rounded-md border border-gray-300 px-3 py-2 text-base text-[#111418] focus:border-blue-500 focus:outline-none resize-none"
                />
              </div>
            </form>
          </ModalBody>
          <ModalFooter className="flex gap-2 justify-end">
            <Button variant="light" onPress={onClose} className="text-[#617589]">
              Cancel
            </Button>
            <Button onPress={onClose} className="bg-blue-500 rounded-md text-white hover:bg-blue-600">
              Add Review
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
