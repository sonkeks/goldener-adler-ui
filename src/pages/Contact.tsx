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

const formSchema = z.object({
  firstName: z.string().trim()
    .min(1, { error: "Please provide your first name." })
    .max(50, { error: "Cannot exceed 50 characters." }),
  lastName: z.string().trim()
    .min(1, { error: "Please provide your last name." })
    .max(50, { error: "Cannot exceed 50 characters." }),
  email: z.email().trim()
    .min(1, { error: "Please provide a valid email address." }),
  content: z.string().trim()
    .min(1, { error: "Please provide a message." })
    .max(1000, { error: "Cannot exceed 50 characters." }),
});

export const Contact: FunctionComponent = () => {
  
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
    <div>
     <Hero height="40vh" image="https://d2exd72xrrp1s7.cloudfront.net/www/guide/64047/1UijAT?width=3840&crop=false&q=60">
       <h1 className="text-white text-6xl font-bold">So erreichen Sie uns</h1>
     </Hero>
     <Content maxWidth="max-w-3xl" className="py-12">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-2 items-start gap-x-6 gap-y-3">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="col-span-2 sm:col-span-1">
                <FormLabel>First Name*</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your First Name" {...field} />
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
                <FormLabel>Last Name*</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your Last Name" {...field} />
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
                  <Input placeholder="Enter your Email Address" {...field} />
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
                <FormLabel>Message*</FormLabel>
                <FormControl>
                  <Textarea className="h-44" placeholder="Enter your Message" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex gap-2 col-span-2 justify-end">
            <Button type="reset" onClick={() => form.reset()} variant="outline">Clear</Button>
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </Form>
     </Content>
    </div>
  )
}
