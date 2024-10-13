import { integer, json, pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const CarListing = pgTable("carListing", {
  id: serial("id").primaryKey(),
  listingTitle: varchar("listingTitle").notNull(),
  tagline: varchar("tagline"),
  originalPrice: varchar("originalPrice"),
  sellingPrice: varchar("sellingPrice").notNull(),
  category: varchar("category").notNull(),
  condition: varchar("condition").notNull(),
  type: varchar("type").notNull(),
  make: varchar("make").notNull(),
  year: varchar("year").notNull(),
  drivetype: varchar("drivetype").notNull(),
  transmission: varchar("transmission"),
  fuelType: varchar("fuelType").notNull(),
  mileage: varchar("mileage").notNull(),
  engineSize: varchar("engineSize"),
  cylinder: varchar("cylinder"),
  color: varchar("color").notNull(),
  door: varchar("door").notNull(),
  vin: varchar("vin"),
  offerType: varchar("offerType"),
  listingDescription: varchar("listingDescription").notNull(),
  features: json("features"),
  createdBy: varchar("createdBy").notNull(),
  userName: varchar("userName").notNull().default("Bilal Faiz"),
  userImage: varchar("userImageUrl").default('https://media.licdn.com/dms/image/v2/D5603AQFA8L-PVrwlaw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1724642815277?e=1733961600&v=beta&t=lqNzjGBs9l-U5fwbBSoGSnspvV1TYOTLphcAx3OrwVY'),
  postedOn: varchar("postedOn")
})

export const CarImages = pgTable("carImages", {
  id: serial("id").primaryKey(),
  imageUrl: varchar("imageUrl").notNull(),
  carListingId: integer("carListingId").notNull().references(() => CarListing.id)
})