/*
  Warnings:

  - You are about to alter the column `profilePic` on the `employee` table. The data in that column could be lost. The data in that column will be cast from `LongBlob` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `employee` MODIFY `profilePic` VARCHAR(191) NULL;
