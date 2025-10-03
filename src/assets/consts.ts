import type {BookingOption} from "@/assets/types.ts";

export const DEFAULT_TITLE = "Pension Goldener Adler";

export const TRANSPARENT_ROUTES = ['/', '/rooms', '/contact', '/torgelow'];

export const ISO_DATE_REGEX = /^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(\.\d+)?(([+-]\d\d:\d\d)|Z)?$/i;

export const EMPTY_STRING = "";

export const BOOKING_OPTIONS: BookingOption[] = [
  {
    id: "bike",
    label: "public.Forms.Labels.Bike",
  },
  {
    id: "motorcycle",
    label: "public.Forms.Labels.Motorcycle",
  },
  {
    id: "boat",
    label: "public.Forms.Labels.Boat",
  },
  {
    id: "pet",
    label: "public.Forms.Labels.Pet",
  },
] as const
