-- AlterTable
ALTER TABLE `products` MODIFY `description` TEXT NOT NULL;

-- CreateTable
CREATE TABLE `addressess` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `line_one` VARCHAR(191) NOT NULL,
    `line_tow` VARCHAR(191) NULL,
    `city` VARCHAR(191) NOT NULL,
    `country` VARCHAR(191) NOT NULL,
    `pincode` VARCHAR(191) NOT NULL,
    `user_id` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `addressess` ADD CONSTRAINT `addressess_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
