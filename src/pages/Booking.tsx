import { Content } from "@/components/Content";
import {type FunctionComponent} from "react";
import {Calendar} from "@/components/ui/calendar.tsx";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form.tsx";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {de} from "date-fns/locale";
import {Input} from "@/components/ui/input.tsx";

const dateRangeSchema = z.object({
  from: z.date({ error: "Start date is required" })
    .min(new Date(new Date().setHours(0, 0, 0, 0)), { error: "Check-In date cannot be in the past."}),
  to: z.date({ error: "End date is required" })
    .min(new Date(new Date().setHours(0, 0, 0, 0)), { error: "Check-Out date cannot be in the past."}),
}).refine(
  (data) => data.from <= data.to,
  { error: "Start date must be before end date", path: ["to"] }
)

const formSchema = z.object({
  dateRange: dateRangeSchema,
  numberOfVisitors: z.number()
        .min(1, { message: "Must have at least one visitor." })
        .max(8, { message: "You cannot book for more than eight people." }),
  firstName: z.string()
    .min(1, { message: "Please provide your first name." }),
  lastName: z.string()
    .min(1, { message: "Please provide your last name." }),
  
})

// Type for the form values after Zod transformation
type FormValues = z.infer<typeof formSchema>;

export const Booking: FunctionComponent = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      dateRange: undefined,
      numberOfVisitors: 1,
    },
  })
  
  const onSubmit = (values: FormValues) => {
    console.log(values);
    form.reset();
  }
  
  return (
    <>
      <Content maxWidth="max-w-3xl" className="mt-24">
        <h1 className="text-center text-4xl font-semibold pb-5">Aufenthalt Buchen</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-2">
            <FormField
              control={form.control}
              name="dateRange"
              render={({ field }) => (
                <FormItem className="col-span-2 justify-self-center">
                  <FormControl>
                    {/* TODO: Handle Locale Change */}
                    <Calendar
                      locale={de}
                      mode="range"
                      numberOfMonths={2}
                      selected={field.value}
                      onSelect={(value) => {
                        field.onChange(value);
                      }}
                      disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="numberOfVisitors"
              render={({ field }) => (
                <FormItem className="col-span-2 w-full md:w-96 md:justify-self-center">
                  <FormLabel>Anzahl Besucher*innen</FormLabel>
                  <FormControl>
                    <Input type="number" min={1} max={8} value={field.value} onChange={(e) => {
                      if(isNaN(e.target.valueAsNumber)) {
                        return;
                      }
                      field.onChange(e.target.valueAsNumber)}
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
        
        
      </Content>
    </>
  )
}
