/*
  Warnings:

  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "name",
ADD COLUMN     "first_name" TEXT,
ADD COLUMN     "last_name" TEXT,
ALTER COLUMN "id" DROP DEFAULT;
DROP SEQUENCE "User_id_seq";
