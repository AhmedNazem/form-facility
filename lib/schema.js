import { z } from "zod"

// Define the schema for the form
export const facilityFormSchema = z.object({
  have_special_discount_to_companies: z.boolean().default(false),
  competitive_advantages: z.array(z.number()).default([]),
  client_types: z.array(z.number()).default([]),
  extra_services: z.array(z.number()).default([]),
  language_supports: z.array(z.number()).default([]),
  cultural_shows: z.array(z.number()).default([]),
  payment_categories: z.array(z.number()).default([]),
  accepted_payments: z.array(z.number()).default([]),
  category: z.number().optional(),
  location: z.object({
    country: z.string().min(1, { message: "Country is required" }),
    city: z.string().min(1, { message: "City is required" }),
    district: z.string().min(1, { message: "District is required" }),
    street: z.string().min(1, { message: "Street is required" }),
    google_map_url: z.string().url({ message: "Please enter a valid URL" }).optional().or(z.literal("")),
    nearest_landmark: z.string().optional(),
    longitude: z.number(),
    latitude: z.number(),
  }),
  operational_details: z.object({
    is_always_open: z.boolean().default(true),
    reservation_types: z.array(z.number()).default([]),
    working_hour: z
      .array(
        z.object({
          day_of_week: z.number().min(0).max(6),
          start_time: z.string(),
          end_time: z.string(),
        }),
      )
      .default([]),
    seasonal_working_hour_change: z.string().optional(),
    cancellation_policy: z.string().optional(),
  }),
  capacity_and_capabilities: z.object({
    number_of_rooms: z.number().min(0),
    number_of_seats: z.number().min(0),
    number_of_guests: z.number().min(0),
    room_options: z.array(z.number()).default([]),
    room_equipments: z.array(z.number()).default([]),
  }),
  social_media_accounts: z.object({
    website: z.string().url({ message: "Please enter a valid URL" }).optional().or(z.literal("")),
    facebook: z.string().url({ message: "Please enter a valid URL" }).optional().or(z.literal("")),
    instagram: z.string().url({ message: "Please enter a valid URL" }).optional().or(z.literal("")),
    youtube: z.string().url({ message: "Please enter a valid URL" }).optional().or(z.literal("")),
    tiktok: z.string().url({ message: "Please enter a valid URL" }).optional().or(z.literal("")),
    snapchat: z.string().url({ message: "Please enter a valid URL" }).optional().or(z.literal("")),
  }),
  online_fingerprints: z
    .array(
      z.object({
        name: z.string().optional(),
        description: z.string().optional(),
        url: z.string().url({ message: "Please enter a valid URL" }).optional().or(z.literal("")),
      }),
    )
    .default([]),
  video: z.string().url({ message: "Please enter a valid URL" }).optional().or(z.literal("")),
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone_number: z.string().min(5, { message: "Please enter a valid phone number" }),
})

