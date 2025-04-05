export const cloudinaryConfig = {
  cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'dmutvtegz',
  apiKey: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  apiSecret: process.env.CLOUDINARY_API_SECRET,
};

export const getCloudinaryUrl = (publicId: string, options: { [key: string]: any } = {}) => {
  const cloudName = cloudinaryConfig.cloudName;
  if (!cloudName) {
    console.error('Cloudinary cloud name is not defined in environment variables');
    return '';
  }
  
  const transformations = Object.entries(options)
    .map(([key, value]) => `${key}_${value}`)
    .join(',');
  
  const transformationString = transformations ? `${transformations}/` : '';
  
  return `https://res.cloudinary.com/${cloudName}/image/upload/${transformationString}${publicId}`;
};

export const getCloudinaryImageUrl = (publicId: string, format: string = 'png', options: { [key: string]: any } = {}) => {
  const cloudName = cloudinaryConfig.cloudName;
  if (!cloudName) {
    console.error('Cloudinary cloud name is not defined in environment variables');
    return '';
  }
  
  const transformations = Object.entries(options)
    .map(([key, value]) => `${key}_${value}`)
    .join(',');
  
  const transformationString = transformations ? `${transformations}/` : '';
  
  const hasExtension = /\.(jpg|jpeg|png|gif|webp|avif|svg)$/i.test(publicId);
  const formattedPublicId = hasExtension ? publicId : `${publicId}.${format}`;
  
  return `https://res.cloudinary.com/${cloudName}/image/upload/${transformationString}${formattedPublicId}`;
}; 
