export const cloudinaryConfig = {
  cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || '',
  apiKey: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  apiSecret: process.env.CLOUDINARY_API_SECRET,
};

export const getCloudinaryUrl = (publicId: string) => {
  if (!cloudinaryConfig.cloudName) {
    console.error('Cloudinary cloud name is not defined in environment variables');
    return '';
  }
  return `https://res.cloudinary.com/${cloudinaryConfig.cloudName}/image/upload/${publicId}`;
};

export const getCloudinaryImageUrl = (publicId: string, format: string = 'png') => {
  if (!cloudinaryConfig.cloudName) {
    console.error('Cloudinary cloud name is not defined in environment variables');
    return '';
  }
  return `https://res.cloudinary.com/${cloudinaryConfig.cloudName}/image/upload/${publicId}.${format}`;
}; 
