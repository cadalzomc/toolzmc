CREATE TYPE "public"."profile_role" AS ENUM('admin', 'user', 'guest');--> statement-breakpoint
CREATE TABLE "users" (
	"id" uuid PRIMARY KEY NOT NULL,
	"email" varchar(255) NOT NULL,
	"name" varchar(255),
	"role" "profile_role" DEFAULT 'guest' NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
