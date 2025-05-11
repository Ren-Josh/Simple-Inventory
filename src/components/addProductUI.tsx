'use client'

import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'

import AddItems from '@/components/addItems'

export default function AddUI() {
    return (<div>
        <Dialog>
            <DialogTrigger asChild>
                <Button className='bg-green-500/80 text-zinc-800 hover:bg-emerald-400 hover:text-white cursor-pointer'>Add Item</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader className='max-w-full justify-center md:justify-left'>
                    <DialogTitle className='max-w-xs md:max-w-full'>Add Item</DialogTitle>
                    <DialogDescription className='max-w-xs md:max-w-full'>Add item here. Click save when you're done.</DialogDescription>
                </DialogHeader>
                <AddItems />
            </DialogContent>
        </Dialog>
    </div>

    );
}