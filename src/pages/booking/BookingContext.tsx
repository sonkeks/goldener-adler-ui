import {type BookingFormValues, initialBookingFormValues} from "@/assets/types";
import { createContext, useContext, useState, type ReactNode, useEffect } from "react";
import {isBookingFormValues} from "@/helpers/isBookingFormValues.ts";
import type { DateRange } from "react-day-picker";
import {useNavigate} from "react-router";
import {BOOKING_SESSION_STORAGE_KEY} from "@/assets/consts.ts";
import {isValidBookingForm} from "@/helpers/isValidBookingForm.ts";

type BookingContextType = {
  bookingFormValues: BookingFormValues;
  updateBookingFormValues: (bookingFormValues: BookingFormValues) => void;
  resetBookingFormValues: () => BookingFormValues;
  cancelBooking: () => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

function reconstructDateRange(dateRange?: DateRange): DateRange | undefined {
  return dateRange ? {
    from: dateRange.from ? new Date(dateRange.from) : undefined,
    to: dateRange.to ? new Date(dateRange.to) : undefined,
  } : undefined
}

function getBookingDetailsFromSessionStorage(previousState?: BookingFormValues): BookingFormValues {
  const storedValue = sessionStorage.getItem(BOOKING_SESSION_STORAGE_KEY);
  const fallBackValue = previousState ?? initialBookingFormValues;
  try {
    if (storedValue) {
      let parsedData = JSON.parse(storedValue);
      if (isBookingFormValues(parsedData)) {
        parsedData = {...parsedData, dateRange: reconstructDateRange(parsedData.dateRange)}
        return parsedData;
      }
    }
    //TODO info message to user
    return fallBackValue;
  } catch {
    sessionStorage.removeItem(BOOKING_SESSION_STORAGE_KEY);
    //TODO info message to user
    return fallBackValue;
  }
}

export function BookingProvider({ children }: { children: ReactNode }) {
  const [bookingFormValues, setBookingFormValues] = useState<BookingFormValues>(() => getBookingDetailsFromSessionStorage(initialBookingFormValues));
  const navigate = useNavigate();
  
  const updateBookingFormValues = (newBookingFormValues: BookingFormValues) => {
    try {
      const newSessionStorageValue = JSON.stringify(newBookingFormValues);
      
      if (!isBookingFormValues(JSON.parse(newSessionStorageValue))) {
        console.error("Booking Details are of wrong type");
        return;
      }
      
      sessionStorage.setItem(BOOKING_SESSION_STORAGE_KEY, newSessionStorageValue);
      setBookingFormValues(newBookingFormValues);
    } catch {
      console.error("Error with JSON Stringify/Parse on storing");
    }
  }
  
  useEffect(() => {
    if (isValidBookingForm(bookingFormValues)) {
      sessionStorage.setItem(BOOKING_SESSION_STORAGE_KEY, JSON.stringify(bookingFormValues));
    }
  }, [bookingFormValues]);
  
  const resetBookingFormValues = () => {
    setBookingFormValues(initialBookingFormValues);
    sessionStorage.removeItem(BOOKING_SESSION_STORAGE_KEY);
    return initialBookingFormValues;
  }
  
  const cancelBooking = () => {
    sessionStorage.removeItem(BOOKING_SESSION_STORAGE_KEY);
    navigate("/", {replace: true});
  }
  
  return (
    <BookingContext.Provider value={{ bookingFormValues, updateBookingFormValues, resetBookingFormValues, cancelBooking }}>
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error("useBooking must be used within BookingProvider");
  return ctx;
}
