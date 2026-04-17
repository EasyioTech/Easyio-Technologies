'use server';

import { writeFile } from 'fs/promises';
import { join } from 'path';

export async function uploadFile(formData: FormData) {
  const file = formData.get('file') as File;
  if (!file) {
    return { success: false, error: 'No file uploaded' };
  }

  try {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const ext = file.name.split('.').pop();
    const fileName = `${crypto.randomUUID()}.${ext}`;
    const uploadPath = join(process.cwd(), 'public/uploads', fileName);

    await writeFile(uploadPath, buffer);
    
    return { 
      success: true, 
      url: `/uploads/${fileName}` 
    };
  } catch (error) {
    console.error('Upload Error:', error);
    return { success: false, error: 'Failed to upload file' };
  }
}
