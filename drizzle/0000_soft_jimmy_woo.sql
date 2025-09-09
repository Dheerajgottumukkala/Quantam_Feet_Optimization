CREATE TABLE `analytics_metrics` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`date` text NOT NULL,
	`quantum_savings` real,
	`classical_savings` real,
	`fuel_efficiency` real,
	`cost_savings` real,
	`distance_optimization` real,
	`capacity_utilization` real,
	`created_at` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `analytics_metrics_date_unique` ON `analytics_metrics` (`date`);--> statement-breakpoint
CREATE TABLE `performance_insights` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`insight_text` text NOT NULL,
	`insight_type` text NOT NULL,
	`is_pinned` integer DEFAULT false,
	`date_generated` text NOT NULL,
	`created_at` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `pickup_locations` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`route_id` integer,
	`address` text NOT NULL,
	`load_quantity` real NOT NULL,
	`crop_type` text NOT NULL,
	`priority` text DEFAULT 'medium' NOT NULL,
	`max_delivery_time` integer,
	`sequence_order` integer,
	`estimated_time` integer,
	`distance_from_previous` real,
	`created_at` text NOT NULL,
	FOREIGN KEY (`route_id`) REFERENCES `routes`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `route_trucks` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`route_id` integer,
	`truck_id` integer,
	`created_at` text NOT NULL,
	FOREIGN KEY (`route_id`) REFERENCES `routes`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`truck_id`) REFERENCES `trucks`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `routes` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`route_name` text NOT NULL,
	`total_distance` real,
	`total_time` integer,
	`total_load` real,
	`is_quantum_optimized` integer DEFAULT false,
	`savings_distance` real,
	`savings_time` integer,
	`status` text DEFAULT 'active' NOT NULL,
	`created_at` text NOT NULL,
	`updated_at` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `shipment_orders` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`truck_id` integer,
	`order_id` text NOT NULL,
	`pickup_point` text NOT NULL,
	`date` text NOT NULL,
	`status` text DEFAULT 'not_reached' NOT NULL,
	`created_at` text NOT NULL,
	`updated_at` text NOT NULL,
	FOREIGN KEY (`truck_id`) REFERENCES `trucks`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE UNIQUE INDEX `shipment_orders_order_id_unique` ON `shipment_orders` (`order_id`);--> statement-breakpoint
CREATE TABLE `trucks` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`truck_number` text NOT NULL,
	`image_url` text,
	`capacity` integer NOT NULL,
	`truck_type` text NOT NULL,
	`availability` text DEFAULT 'Available' NOT NULL,
	`created_at` text NOT NULL,
	`updated_at` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `trucks_truck_number_unique` ON `trucks` (`truck_number`);