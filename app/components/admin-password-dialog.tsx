"use client"

import { useForm } from 'react-hook-form';

import toast, { Toaster } from 'react-hot-toast';

import { useRouter } from 'next/navigation';

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Modal } from './ui/modal';

interface AdminPasswordModalProps {
    isOpen: boolean;
    onClose: () => void;
    onOpen: () => void;
    setIsAdmin: () => void;
}

type FormValues = {
    password: string;
};

export const AdminPasswordModal = ({ isOpen, onClose, onOpen, setIsAdmin }: AdminPasswordModalProps) => {
    const form = useForm<FormValues>({
        defaultValues: {
            password: ""
        }
    })

    const router = useRouter();

    const onSubmit = async (values: FormValues) => {
        if(values.password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
            setIsAdmin();
            onClose();
        }
        else {
            toast.error(`Wrong Password`);
        }
    }

    return (
        <>
        <Modal
            title="Admin Page"
            description="Enter the admin password for access to the admin page"
            isOpen={isOpen}
            onClose={onClose}
            className='bg-white w-[40%] max-sm:w-[80%]'
        >
            <Toaster toastOptions={{ style: { zIndex: 9999 } }} position='bottom-left' />
            <div>
                <div className='py-2 pb-4 space-y-4'>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className='text-black'>Password</FormLabel>
                                        <FormControl>
                                            <Input className='text-black' type='password' placeholder='Enter Password' {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className='flex items-center justify-end w-full pt-6 space-x-2'>
                                <Button variant="outline" onClick={() => {
                                    onClose();
                                    router.push("/");
                                }}>
                                    Go Back
                                </Button>
                                <Button type='submit'>
                                    Continue
                                </Button>
                            </div>
                        </form>
                    </Form>
                </div>
            </div>
        </Modal>
        </>
    )
}