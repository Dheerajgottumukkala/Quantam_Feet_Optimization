import { sqliteTable, integer, text, real } from 'drizzle-orm/sqlite-core';

export const trucks = sqliteTable('trucks', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  truckNumber: text('truck_number').notNull().unique(),
  imageUrl: text('image_url'),
  capacity: integer('capacity').notNull(),
  truckType: text('truck_type').notNull(), // "Standard", "Electric", "Heavy Duty"
  availability: text('availability').notNull().default('Available'), // "Available", "Not Available"
  createdAt: text('created_at').notNull(),
  updatedAt: text('updated_at').notNull(),
});

export const shipmentOrders = sqliteTable('shipment_orders', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  truckId: integer('truck_id').references(() => trucks.id),
  orderId: text('order_id').notNull().unique(),
  pickupPoint: text('pickup_point').notNull(),
  date: text('date').notNull(),
  status: text('status').notNull().default('not_reached'), // "reached", "not_reached"
  createdAt: text('created_at').notNull(),
  updatedAt: text('updated_at').notNull(),
});

export const routes = sqliteTable('routes', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  routeName: text('route_name').notNull(),
  totalDistance: real('total_distance'),
  totalTime: integer('total_time'),
  totalLoad: real('total_load'),
  isQuantumOptimized: integer('is_quantum_optimized', { mode: 'boolean' }).default(false),
  savingsDistance: real('savings_distance'),
  savingsTime: integer('savings_time'),
  status: text('status').notNull().default('active'), // "active", "completed", "cancelled"
  createdAt: text('created_at').notNull(),
  updatedAt: text('updated_at').notNull(),
});

export const routeTrucks = sqliteTable('route_trucks', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  routeId: integer('route_id').references(() => routes.id),
  truckId: integer('truck_id').references(() => trucks.id),
  createdAt: text('created_at').notNull(),
});

export const pickupLocations = sqliteTable('pickup_locations', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  routeId: integer('route_id').references(() => routes.id),
  address: text('address').notNull(),
  loadQuantity: real('load_quantity').notNull(),
  cropType: text('crop_type').notNull(),
  priority: text('priority').notNull().default('medium'), // "low", "medium", "high"
  maxDeliveryTime: integer('max_delivery_time'),
  sequenceOrder: integer('sequence_order'),
  estimatedTime: integer('estimated_time'),
  distanceFromPrevious: real('distance_from_previous'),
  createdAt: text('created_at').notNull(),
});

export const analyticsMetrics = sqliteTable('analytics_metrics', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  date: text('date').notNull().unique(),
  quantumSavings: real('quantum_savings'),
  classicalSavings: real('classical_savings'),
  fuelEfficiency: real('fuel_efficiency'),
  costSavings: real('cost_savings'),
  distanceOptimization: real('distance_optimization'),
  capacityUtilization: real('capacity_utilization'),
  createdAt: text('created_at').notNull(),
});

export const performanceInsights = sqliteTable('performance_insights', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  insightText: text('insight_text').notNull(),
  insightType: text('insight_type').notNull(), // "fuel", "route", "cost", "efficiency"
  isPinned: integer('is_pinned', { mode: 'boolean' }).default(false),
  dateGenerated: text('date_generated').notNull(),
  createdAt: text('created_at').notNull(),
});


// Auth tables for better-auth
export const user = sqliteTable("user", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  emailVerified: integer("email_verified", { mode: "boolean" })
    .$defaultFn(() => false)
    .notNull(),
  image: text("image"),
  createdAt: integer("created_at", { mode: "timestamp" })
    .$defaultFn(() => new Date())
    .notNull(),
  updatedAt: integer("updated_at", { mode: "timestamp" })
    .$defaultFn(() => new Date())
    .notNull(),
});

export const session = sqliteTable("session", {
  id: text("id").primaryKey(),
  expiresAt: integer("expires_at", { mode: "timestamp" }).notNull(),
  token: text("token").notNull().unique(),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull(),
  updatedAt: integer("updated_at", { mode: "timestamp" }).notNull(),
  ipAddress: text("ip_address"),
  userAgent: text("user_agent"),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
});

export const account = sqliteTable("account", {
  id: text("id").primaryKey(),
  accountId: text("account_id").notNull(),
  providerId: text("provider_id").notNull(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  accessToken: text("access_token"),
  refreshToken: text("refresh_token"),
  idToken: text("id_token"),
  accessTokenExpiresAt: integer("access_token_expires_at", {
    mode: "timestamp",
  }),
  refreshTokenExpiresAt: integer("refresh_token_expires_at", {
    mode: "timestamp",
  }),
  scope: text("scope"),
  password: text("password"),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull(),
  updatedAt: integer("updated_at", { mode: "timestamp" }).notNull(),
});

export const verification = sqliteTable("verification", {
  id: text("id").primaryKey(),
  identifier: text("identifier").notNull(),
  value: text("value").notNull(),
  expiresAt: integer("expires_at", { mode: "timestamp" }).notNull(),
  createdAt: integer("created_at", { mode: "timestamp" }).$defaultFn(
    () => new Date(),
  ),
  updatedAt: integer("updated_at", { mode: "timestamp" }).$defaultFn(
    () => new Date(),
  ),
});