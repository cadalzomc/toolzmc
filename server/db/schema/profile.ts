import { pgTable, varchar, timestamp, uuid, pgEnum } from "drizzle-orm/pg-core";

export const EProfileRole = pgEnum("profile_role", ["admin", "user", "guest"]);

export const profiles = pgTable("profiles", {
  id: uuid("id").primaryKey().notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  name: varchar("name", { length: 255 }),
  role: EProfileRole("role").default("guest").notNull(),
  created_at: timestamp("created_at").defaultNow().notNull(),
});
