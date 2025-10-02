import type {FunctionComponent} from "react";
import {Hero} from "@/components/Hero.tsx";
import {Content} from "@/components/Content.tsx";
import { z } from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input.tsx";
import {Textarea} from "@/components/ui/textarea.tsx";
import {Button} from "@/components/ui/button.tsx";
import {useTranslation} from "react-i18next";
import {Page} from "@/components/layouts/Page.tsx";

const formSchema = z.object({
  firstName: z.string().trim()
    .min(1, { error: "public.Forms.Errors.Required.FirstName" })
    .max(50, { error: "public.Forms.Errors.Length.Max50" }),
  lastName: z.string().trim()
    .min(1, { error: "public.Forms.Errors.Required.LastName" })
    .max(50, { error: "public.Forms.Errors.Length.Max50" }),
  email: z.email({ error: "public.Forms.Errors.Required.Email"}).trim()
    .min(1, { error: "public.Forms.Errors.Required.Email" }),
  content: z.string().trim()
    .min(1, { error: "public.Forms.Errors.Required.Message" })
    .max(1000, { error: "public.Forms.Errors.Length.Max50" }),
});

export const Contact: FunctionComponent = () => {
  const {t} = useTranslation();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      content: "",
    },
  })
  
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    form.reset();
  }
  
  return (
    <Page title={t('public.Contact.Title')}>
     <Hero height="40vh" image="https://d2exd72xrrp1s7.cloudfront.net/www/guide/64047/1UijAT?width=3840&crop=false&q=60">
       <h1 className="text-white text-6xl font-bold">{t('public.Contact.Hero.Title')}</h1>
     </Hero>
     <Content maxWidth="max-w-3xl" className="py-12">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-2 items-start gap-x-6 gap-y-3">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="col-span-2 sm:col-span-1">
                <FormLabel>{t('public.Forms.Labels.FirstName')}*</FormLabel>
                <FormControl>
                  <Input placeholder={t('public.Forms.Placeholders.FirstName')} {...field} />
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
                <FormLabel>{t('public.Forms.Labels.LastName')}*</FormLabel>
                <FormControl>
                  <Input placeholder={t('public.Forms.Placeholders.LastName')} {...field} />
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
                <FormLabel>{t('public.Forms.Labels.Email')}*</FormLabel>
                <FormControl>
                  <Input placeholder={t('public.Forms.Placeholders.Email')} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel>{t('public.Forms.Labels.Message')}*</FormLabel>
                <FormControl>
                  <Textarea className="h-44" placeholder={t('public.Forms.Placeholders.Message')} {...field} />
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
