"use client";

import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";

import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../components/ui/form";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";
import { FileUpload } from "../components/file-upload";
import { Separator } from "../components/ui/separator";

import { ModalProvider } from "@/lib/providers/modal-provider";
import { isAdminModal } from "@/lib/hooks/is-admin";
import { isAuthorized } from "@/lib/hooks/is-authorized";
import { ToasterProvider } from "@/lib/providers/toast-provider";

import toast from "react-hot-toast";

type FormValues = {
  title: string;
  description: string;
  imageUrl?: string;
};

const AdminPage = () => {
  const form = useForm<FormValues>({
    defaultValues: {
      title: "",
      description: "",
      imageUrl: ""
    }
  });

  const router = useRouter();

  const { isSubmitting, isValid } = form.formState;

  const setIsAdmin =  isAuthorized(state => state.setIsAdmin);
  const isAdmin =  isAuthorized(state => state.isAdmin);
  const setIsNotAdmin = isAuthorized(state => state.setIsNotAdmin);

  const onOpen =  isAdminModal(state => state.onOpen);
  const isOpen =  isAdminModal(state => state.isOpen);
  const onClose = isAdminModal(state => state.onClose);

  if(!isAdmin)
    onOpen();

  const onSubmit = async (values : FormValues) => {
    try {
      const response = await fetch("/api/announcements", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values)
      });

      if(!response.ok) {
        throw new Error("Failed to create announcement");
      }

      router.refresh();

      const data = await response.json();

      toast.success("Announcement created successfully!");

      console.log("Announcement created successfully:", data);
    }
    catch(error) {
      toast.error("Failed to create announcement. Please try again.");
      console.error("Failed to create announcement:", error);
    }
  };

  return (
    <>
      {!isOpen && <ToasterProvider />}
      <ModalProvider isOpen={isOpen} onClose={onClose} onOpen={onOpen} setIsAdmin={setIsAdmin} />
      <div className="h-full p-4 space-y-2 max-w-3xl mx-auto py-32">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 pb-10">
            <div className="space-y-2 w-full col-span-2">
              <div>
                <h3 className="text-lg font-medium">Admin Panel</h3>
              </div>
              <Separator className="bg-primary/10" />
            </div>
              <div>
                <div className="mt-6 border rounded-md p-4">
                  <div className="flex items-center justify-between">
                      Image
                  </div>
                  <div>
                      <FileUpload endpoint="image" onChange={(url) => form.setValue("imageUrl", url)} />
                  </div>
                </div>
              </div>
                <FormField
                  name="title"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem className="col-span-2 md:col-span-1">
                      <FormLabel>Title</FormLabel>
                        <FormControl>
                        <Input
                          disabled={isSubmitting}
                          placeholder="Title"
                          {...field}
                        />
                        </FormControl>
                      <FormDescription>
                        Provide a title for the announcement.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="description"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea
                          disabled={isSubmitting}
                          rows={7}
                          className="resize-none"
                          placeholder="Description"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Provide a description for the announcement.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              <div className="w-full flex justify-center">
                <Button size={"lg"} disabled={isSubmitting || !isValid} type="submit">
                    Create Announcement
                </Button>
              </div>
            </form>
          </Form>
      </div>
    </>
  );  
} 

export default AdminPage;