import { Content } from "@/components/Content";
import {type FunctionComponent, useRef} from "react";
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
import {Trans, useTranslation} from "react-i18next";
import {Page} from "@/components/layouts/Page.tsx";
import type {TranslationKeys} from "@/i18n.ts";
import {createBookingSchema} from "@/helpers/createBookingSchema.ts";

const options: {id: string, label: TranslationKeys}[] = [
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

export const Booking: FunctionComponent = () => {
  const { t } = useTranslation();
  const formSchema = createBookingSchema();
  type FormValues = z.infer<typeof formSchema>;
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      dateRange: undefined,
      rooms: {
        singleBedRooms: 0,
        doubleBedRooms: "none",
        apartmentGuests: 0,
      },
      extras: [],
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
  })
  
  const fieldRefs = useRef<Record<string, HTMLElement | null>>({});
  
  const onError = (errors: typeof form.formState.errors) => {
    const firstErrorKey = Object.keys(errors)[0];
    const firstErrorField = fieldRefs.current[firstErrorKey];
    if (firstErrorField) {
      firstErrorField.scrollIntoView({behavior: "smooth", block: "center"});
      firstErrorField.focus({preventScroll: true});
    }
  }
  
  const onSubmit = (values: FormValues) => {
    // TODO: Send Mail with Cloudflare Worker & Resend
    console.log(values);
    form.reset();
  }
  
  return (
    <Page title={t('public.Booking.Title')}>
      <Content maxWidth="max-w-[33rem]" className="mt-24">
        <h1 className="text-center text-4xl font-semibold">{t('public.Booking.Title')}</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit, onError)} className="grid items-start grid-cols-2 gap-x-4 my-6">
            <FormField
              control={form.control}
              name="dateRange"
              render={({ field }) => (
                <FormItem className="col-span-2 justify-self-center">
                  <FormControl>
                    <div ref={(element) => {
                      field.ref(element);
                      fieldRefs.current["dateRange"] = element;
                    }}>
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
                    </div>
                  </FormControl>
                  <FormMessage className="text-center" />
                </FormItem>
              )}
            />
            <h3 className="text-xl font-semibold my-4 col-span-2">{t('public.Booking.Headings.RoomSelection')}</h3>
            {form.formState.errors.rooms?.message && (
              <p className="text-sm text-red-500 mb-4 col-span-2"><Trans i18nKey={form.formState.errors.rooms.message as never}/></p>
            )}
            <FormField
              control={form.control}
              name="rooms.singleBedRooms"
              render={({ field }) => (
                <FormItem className="col-span-2 w-full mb-5">
                  <FormLabel>{t('public.Rooms.General.SingleBedroom', {count: 2})}</FormLabel>
                  <Select onValueChange={(e) => {
                    field.onChange(Number(e));
                    form.trigger(["rooms"]);
                  }} value={field.value?.toString()}>
                    <FormControl>
                      <SelectTrigger className="w-full" ref={(element) => {
                        field.ref(element);
                        fieldRefs.current["rooms"] = element;
                      }}>
                        <SelectValue />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="0">{t('public.Booking.Options.NoSelection')}</SelectItem>
                      <SelectItem value="1">1 {t('public.Booking.Options.Rooms', {count: 1})}</SelectItem>
                      <SelectItem value="2">2 {t('public.Booking.Options.Rooms', {count: 2})}</SelectItem>
                      <SelectItem value="3">3 {t('public.Booking.Options.Rooms', {count: 3})}</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="rooms.doubleBedRooms"
              render={({ field }) => (
                <FormItem className="col-span-2 w-full mb-5">
                  <FormLabel>{t('public.Rooms.General.DoubleBedroom', {count: 2})}</FormLabel>
                  <Select onValueChange={(e) => {
                    field.onChange(e);
                    form.trigger(["rooms"]);
                  }} value={field.value}>
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="none">{t('public.Booking.Options.NoSelection')}</SelectItem>
                      <SelectItem value="1">{`1 ${t('public.Booking.Options.Rooms', {count: 1})} (2 ${t('public.Booking.Options.People', {count: 2})})`}</SelectItem>
                      <SelectItem value="1+">{`1 ${t('public.Booking.Options.Rooms', {count: 1})} + ${t('public.Booking.Options.AdditionalBed')}`}</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="rooms.apartmentGuests"
              render={({ field }) => (
                <FormItem className="col-span-2 w-full mb-5">
                  <FormLabel>{t('public.General.Apartment')}</FormLabel>
                  <Select onValueChange={(e) => {
                    field.onChange(Number(e));
                    form.trigger(["rooms"]);
                  }} value={field.value?.toString()}>
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="0">{t('public.Booking.Options.NoSelection')}</SelectItem>
                      <SelectItem value="1">1 {t('public.Booking.Options.People', {count: 1})}</SelectItem>
                      <SelectItem value="2">2 {t('public.Booking.Options.People', {count: 2})}</SelectItem>
                      <SelectItem value="3">3 {t('public.Booking.Options.People', {count: 3})}</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
            <h3 className="text-xl font-semibold mb-4">{t('public.Booking.Headings.AdditionalDetails')}</h3>
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
                      {t(option.label)}
                    </FormLabel>
                  </FormItem>
                )}
                 />
            ))}
            <h3 className="col-span-2 text-xl font-semibold mt-8 mb-4">{t('public.Booking.Headings.ContactDetails')}</h3>
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem className="col-span-2 sm:col-span-1 mb-5">
                  <FormLabel>{t('public.Forms.Labels.FirstName')}*</FormLabel>
                  <FormControl>
                    <Input placeholder={t('public.Forms.Placeholders.FirstName')} {...field} ref={(element) => {
                      field.ref(element);
                      fieldRefs.current["firstName"] = element;
                    }} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem className="col-span-2 sm:col-span-1 mb-5">
                  <FormLabel>{t('public.Forms.Labels.LastName')}*</FormLabel>
                  <FormControl>
                    <Input placeholder={t('public.Forms.Placeholders.LastName')} {...field} ref={(element) => {
                      field.ref(element);
                      fieldRefs.current["lastName"] = element;
                    }}/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="col-span-2 mb-5">
                  <FormLabel>{t('public.Forms.Labels.Email')}*</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder={t('public.Forms.Placeholders.Email')} {...field} ref={(element) => {
                      field.ref(element);
                      fieldRefs.current["email"] = element;
                    }}/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="col-span-2 mb-5">
                  <FormLabel>{`${t('public.Forms.Labels.Phone')} (${t('public.Forms.Labels.Optional')})`}</FormLabel>
                  <FormControl>
                    <Input placeholder={t('public.Forms.Placeholders.Phone')} {...field} ref={(element) => {
                      field.ref(element);
                      fieldRefs.current["phone"] = element;
                    }}/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="col-span-2 mb-5">
                  <FormLabel>{`${t('public.Forms.Labels.Message')} (${t('public.Forms.Labels.Optional')})`}</FormLabel>
                  <FormControl>
                    <Textarea className="h-32" placeholder={t('public.Forms.Placeholders.Message')} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex gap-2 col-span-2 justify-end">
              <Button type="reset" onClick={() => form.reset()} variant="outline">{t('public.Buttons.Clear')}</Button>
              <Button type="submit">{t('public.Buttons.Submit')}</Button>
            </div>
          </form>
        </Form>
      </Content>
    </Page>
  )
}
