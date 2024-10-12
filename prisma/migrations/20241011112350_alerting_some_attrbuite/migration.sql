/*
  Warnings:

  - You are about to drop the column `line_one` on the `addressess` table. All the data in the column will be lost.
  - You are about to drop the column `line_tow` on the `addressess` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `addressess` table. All the data in the column will be lost.
  - Added the required column `lineOne` to the `addressess` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `addressess` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `addressess` DROP FOREIGN KEY `addressess_user_id_fkey`;

-- AlterTable
ALTER TABLE `addressess` DROP COLUMN `line_one`,
    DROP COLUMN `line_tow`,
    DROP COLUMN `user_id`,
    ADD COLUMN `lineOne` VARCHAR(191) NOT NULL,
    ADD COLUMN `lineTow` VARCHAR(191) NULL,
    ADD COLUMN `userId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `addressess` ADD CONSTRAINT `addressess_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
