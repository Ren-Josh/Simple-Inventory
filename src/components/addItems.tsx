'use client';

import { addItem } from '../app/inventoryHandler/inventory';

import { useForm } from 'react-hook-form'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

import { toast } from 'sonner'

export default function AddItems() {

    const form = useForm({
        defaultValues: {
            id: '',
            name: '',
            quantity: '',
            price: ''
        }
    });

    const onSubmit = async (data: any) => {
        data.id = crypto.randomUUID();
        addItem(data)
        toast("Inventory Update", {
            description: `Item ${data.name} has been added to the inventory`
        })

        form.reset()
    }

    return (<div>
        <Form {...form} >
            <form className="flex flex-col items-center justify-center p-5 gap-5" onSubmit={form.handleSubmit(onSubmit)} >
                <div className="w-full flex flex-col md:flex-row items-center justify-center gap-5" >
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="justify-center" > Item Name </FormLabel>
                                < FormControl className='text-center'>
                                    <Input placeholder='e.g., Coke' {...field} required />
                                </FormControl>
                                < FormMessage />
                            </FormItem>
                        )
                        }
                    />

                    < FormField
                        control={form.control}
                        name="quantity"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="justify-center" > Quantity </FormLabel>
                                < FormControl className="md:w-30 text-center" >
                                    <Input type='number' placeholder='e.g., 1' min='1' {...field} required />
                                </FormControl>
                            </FormItem>
                        )}
                    />

                    < FormField
                        control={form.control}
                        name="price"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="justify-center" > Price </FormLabel>
                                < FormControl className="md:w-30 text-center" >
                                    <Input type='number' placeholder='e.g., 25' min='1' {...field} required />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                </div>
                <Button type='submit'>Add</Button>
            </form>
        </Form>
    </div >
    );
}