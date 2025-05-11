'use server'

import fs from 'fs'
import path from 'path'

import items from '@/app/data/inventory.json'

export async function addItem(data: { id: string, name: string, quantity: number, price: number }) {
    const filePath = path.join(process.cwd(), 'src', 'app', 'data', 'inventory.json');

    try {
        let fileData = '[]';

        if (fs.existsSync(filePath)) {
            fileData = fs.readFileSync(filePath, 'utf-8').trim() || '[]';
        }

        const item = JSON.parse(fileData);
        item.push(data);
        fs.writeFileSync(filePath, JSON.stringify(item, null, 4))
        return (true)
    } catch (error) {
        console.error('Error writing to inventory:', error);
        throw new Error('Failed to add item');
    }
}