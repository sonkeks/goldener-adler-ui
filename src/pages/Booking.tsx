import { Content } from "@/components/Content";
import {type FunctionComponent} from "react";
import {Calendar} from "@/components/ui/calendar.tsx";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form.tsx";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select.tsx";
import {Checkbox} from "@/components/ui/checkbox.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Textarea} from "@/components/ui/textarea.tsx";
import {Button} from "@/components/ui/button.tsx";
import {getCurrentLocale} from "@/helpers/i18n-locale.ts";
import {useTranslation} from "react-i18next";
import {Page} from "@/components/layouts/Page.tsx";

const dateRangeSchema = z.object({
  from: z.date({ error: "Start date is required" })
    .min(new Date(new Date().setHours(0, 0, 0, 0)), { error: "Check-In date cannot be in the past."}),
  to: z.date({ error: "End date is required" })
    .min(new Date(new Date().setHours(0, 0, 0, 0)), { error: "Check-Out date cannot be in the past."}),
}, { error: "Please provide a Date Range" }).refine(
  (data) => data.from <= data.to,
  { error: "Start date must be before end date", path: ["to"] }
)

const formSchema = z.object({
  dateRange: dateRangeSchema,
  firstName: z.string()
    .min(1, { message: "Please provide your first name." }),
  lastName: z.string()
    .min(1, { message: "Please provide your last name." }),
  singleBedRooms: z.number().max(3).optional(),
  doubleBedRooms: z.string().optional(),
  apartmentGuests: z.number().max(3).optional(),
  extras: z.array(z.string()),
  email: z.email(),
  phone: z.string()
    .regex(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/, "Invalid phone number")
    .or(z.string(""))
    .optional(),
  message: z.string().optional(),
}).refine(
  (data) =>
    (data.singleBedRooms && data.singleBedRooms > 0) ||
    (data.doubleBedRooms && data.doubleBedRooms !== "Keine Auswahl") ||
    (data.apartmentGuests && data.apartmentGuests > 0),
  {
    error: "Please select at least one room.",
    path: ["apartmentGuests"],
  }
);

// Type for the form values after Zod transformation
type FormValues = z.infer<typeof formSchema>;

const options = [
  {
    id: "bike",
    label: "Fahrrad",
  },
  {
    id: "motorcycle",
    label: "Motorrad",
  },
  {
    id: "boat",
    label: "Padelboot",
  },
  {
    id: "pet",
    label: "Haustier",
  },
] as const

export const Booking: FunctionComponent = () => {
  const { t } = useTranslation();
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      dateRange: undefined,
      singleBedRooms: 0,
      doubleBedRooms: "Keine Auswahl",
      apartmentGuests: 0,
      extras: [],
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
  })
  
  const onSubmit = (values: FormValues) => {
    // TODO: Send Mail with Cloudflare Worker & Resend
    console.log(values);
    form.reset();
  }
  
  return (
    <Page title={t('public.Booking.Title')}>
      <Content maxWidth="max-w-[33rem]" className="mt-24">
        <h1 className="text-center text-4xl font-semibold">Aufenthalt Buchen</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-2 gap-x-4 my-6">
            <FormField
              control={form.control}
              name="dateRange"
              render={({ field }) => (
                <FormItem className="col-span-2 justify-self-center">
                  <FormControl>
                    {/* TODO: Handle Locale Change */}
                    <Calendar
                      locale={getCurrentLocale()}
                      mode="range"
                      showOutsideDays={false}
                      numberOfMonths={2}
                      selected={field.value || {}}
                      onSelect={(value) => {
                        field.onChange(value ? value : form.formState.defaultValues?.dateRange);
                      }}
                      disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <h3 className="text-xl font-semibold my-4">Zimmerauswahl</h3>
            <FormField
              control={form.control}
              name="singleBedRooms"
              render={({ field }) => (
                <FormItem className="col-span-2 w-full">
                  <FormLabel>Einzelzimmer</FormLabel>
                  <Select onValueChange={(e) => field.onChange(Number(e))} defaultValue={field.value?.toString()}>
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="0">Keine Auswahl</SelectItem>
                      <SelectItem value="1">1 Zimmer</SelectItem>
                      <SelectItem value="2">2 Zimmer (je 1 Person)</SelectItem>
                      <SelectItem value="3">3 Zimmer (je 1 Person)</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="doubleBedRooms"
              render={({ field }) => (
                <FormItem className="col-span-2 w-full">
                  <FormLabel>Doppelzimmer</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Keine Auswahl">Keine Auswahl</SelectItem>
                      <SelectItem value="1 Zimmer">1 Zimmer (2 Personen)</SelectItem>
                      <SelectItem value="2 Zimmer">1 Zimmer + Aufbettung</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="apartmentGuests"
              render={({ field }) => (
                <FormItem className="col-span-2 w-full">
                  <FormLabel>Ferienwohnung</FormLabel>
                  <Select onValueChange={(e) => field.onChange(Number(e))} defaultValue={field.value?.toString()}>
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="0">Keine Auswahl</SelectItem>
                      <SelectItem value="1">1 Person</SelectItem>
                      <SelectItem value="2">2 Personen</SelectItem>
                      <SelectItem value="3">3 Personen</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <h3 className="text-xl font-semibold mb-4">Weitere Angaben</h3>
            {options.map((option) => (
              <FormField
                key={option.id}
                control={form.control}
                name="extras"
                render={({ field }) => (
                  <FormItem
                    key={option.id}
                    className="col-span-2 flex flex-row items-center gap-3 my-1"
                  >
                    <FormControl>
                      <Checkbox
                        checked={field.value?.includes(option.id)}
                        onCheckedChange={(checked) => {
                          return checked
                            ? field.onChange([...field.value, option.id])
                            : field.onChange(
                              field.value?.filter(
                                (value) => value !== option.id
                              )
                            )
                        }}
                      />
                    </FormControl>
                    <FormLabel className="text-sm font-normal">
                      {option.label}
                    </FormLabel>
                  </FormItem>
                )}
                 />
            ))}
            <h3 className="col-span-2 text-xl font-semibold mt-8 mb-4">Kontaktangaben</h3>
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem className="col-span-2 sm:col-span-1">
                  <FormLabel>Vorname*</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your first name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem className="col-span-2 sm:col-span-1">
                  <FormLabel>Nachname*</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your last name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel>Email*</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="Enter your Email Address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel>Telefonnummer (optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your Phone Number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel>Nachricht (optional)</FormLabel>
                  <FormControl>
                    <Textarea className="h-32" placeholder="Enter your Message" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex gap-2 col-span-2 justify-end">
              <Button type="reset" onClick={() => form.reset()} variant="outline">Zurücksetzen</Button>
              <Button type="submit">Senden</Button>
            </div>
          </form>
        </Form>
      </Content>
    </Page>
  )
}
