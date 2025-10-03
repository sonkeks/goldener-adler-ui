import {type BookingFormValues, initialBookingFormValues} from "@/assets/types";
import { createContext, useContext, useState, type ReactNode, useEffect } from "react";
import {isBookingFormValues} from "@/helpers/isBookingFormValues.ts";
import type { DateRange } from "react-day-picker";

const SESSION_STORAGE_KEY = 'bookingDetails';

type BookingContextType = {
  bookingFormValues: BookingFormValues;
  updateBookingFormValues: (bookingFormValues: BookingFormValues) => void;
  resetBookingFormValues: () => BookingFormValues;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

function reconstructDateRange(dateRange?: DateRange): DateRange | undefined {
  return dateRange ? {
    from: dateRange.from ? new Date(dateRange.from) : undefined,
    to: dateRange.to ? new Date(dateRange.to) : undefined,
  } : undefined
}

function getBookingDetailsFromSessionStorage(previousState?: BookingFormValues): BookingFormValues {
  const storedValue = sessionStorage.getItem(SESSION_STORAGE_KEY);
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
    sessionStorage.removeItem(SESSION_STORAGE_KEY);
    //TODO info message to user
    return fallBackValue;
  }
}

export function BookingProvider({ children }: { children: ReactNode }) {
  const [bookingFormValues, setBookingFormValues] = useState<BookingFormValues>(() => getBookingDetailsFromSessionStorage(initialBookingFormValues));
  
  const updateBookingFormValues = (newBookingFormValues: BookingFormValues) => {
    try {
      const newSessionStorageValue = JSON.stringify(newBookingFormValues);
      
      if (!isBookingFormValues(JSON.parse(newSessionStorageValue))) {
        console.error("Booking Details are of wrong type");
        return;
      }
      
      sessionStorage.setItem(SESSION_STORAGE_KEY, newSessionStorageValue);
      setBookingFormValues(newBookingFormValues);
    } catch {
      console.error("Error with JSON Stringify/Parse on storing");
    }
  }
  
  useEffect(() => {
    sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(bookingFormValues));
  }, [bookingFormValues]);
  
  const resetBookingFormValues = () => {
    updateBookingFormValues(initialBookingFormValues);
    return initialBookingFormValues;
  }
  
  return (
    <BookingContext.Provider value={{ bookingFormValues: bookingFormValues, updateBookingFormValues: updateBookingFormValues, resetBookingFormValues: resetBookingFormValues }}>
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error("useBooking must be used within BookingProvider");
  return ctx;
}
