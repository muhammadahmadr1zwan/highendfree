import { v2 as cloudinary } from 'cloudinary';

const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
const apiKey = process.env.CLOUDINARY_API_KEY;
const apiSecret = process.env.CLOUDINARY_API_SECRET;

if (cloudName && apiKey && apiSecret) {
  cloudinary.config({ cloud_name: cloudName, api_key: apiKey, api_secret: apiSecret });
}

export async function uploadImage(buffer: Buffer): Promise<{ url: string }> {
  if (!cloudName || !apiKey || !apiSecret) {
    // Fallback: return a data URL if Cloudinary is not configured
    const base64 = buffer.toString('base64');
    return { url: `data:image/png;base64,${base64}` };
  }
  const res: any = await new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream({ folder: 'reviews' }, (error, result) => {
      if (error) return reject(error);
      resolve(result);
    });
    stream.end(buffer);
  });
  return { url: res.secure_url as string };
}
