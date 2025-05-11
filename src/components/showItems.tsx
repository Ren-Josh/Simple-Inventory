'use client'

import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog'
import { toast } from 'sonner'

import items from '@/app/data/inventory.json'
import AddUI from '@/components/addProductUI'
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";

import { DelItem } from '@/app/inventoryHandler/removeItem'

export default function ShowInventory() {
    return (<div className='w-full flex justify-center my-5 p-10 md:p-0'>
        <div>
            <div className='flex justify-end my-5'>
                <AddUI />
            </div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[200px]">Name</TableHead>
                        <TableHead>Quantity</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead className="w-[100px] text-center">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {items.map((item) => (
                        <TableRow key={item.id}>
                            <TableCell>{item.name}</TableCell>
                            <TableCell className='w-[100px]'>{item.quantity}</TableCell>
                            <TableCell className='w-[80px]'>₱ {item.price}</TableCell>
                            <TableCell className="flex justify-center">
                                <AlertDialog>
                                    <AlertDialogTrigger asChild>
                                        <Button variant="ghost" className='hover:bg-zinc-300/50'><MdDelete /></Button>
                                    </AlertDialogTrigger>
                                    <AlertDialogContent>
                                        <AlertDialogHeader>
                                            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                            <AlertDialogDescription>
                                                This action cannot be undone. This will permanently delete the item.
                                            </AlertDialogDescription>
                                        </AlertDialogHeader>
                                        <AlertDialogFooter>
                                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                                            <AlertDialogAction onClick={() => {
                                                toast("Inventory Update", {
                                                    description: `Item ${item.name} has been removed from the inventory`
                                                });
                                                DelItem(item.id)
                                            }}>
                                                Continue
                                            </AlertDialogAction>
                                        </AlertDialogFooter>
                                    </AlertDialogContent>
                                </AlertDialog>
                                <Button variant={'ghost'} className='hover:bg-zinc-300/50'><MdEdit /></Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    </div >);
}