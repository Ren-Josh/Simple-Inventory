'use server'

import fs from 'fs'
import path from 'path'

export async function DelItem(id: string) {
    const filePath = path.join(process.cwd(), 'src', 'app', 'data', 'inventory.json');
    const fileData = fs.readFileSync(filePath, 'utf-8');

    const items = JSON.parse(fileData);

    const updateItems = items.filter((item: any) => item.id !== id)

    fs.writeFileSync(filePath, JSON.stringify(updateItems, null, 4));
}