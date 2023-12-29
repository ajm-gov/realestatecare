import { Camera, CameraResultType, CameraSource } from "@capacitor/camera";

export const openCamera = async (): Promise<string> => {
    try {
        const image = await Camera.getPhoto({
            quality: 90,
            allowEditing: false,
            resultType: CameraResultType.DataUrl,
            source: CameraSource.Camera,
        });
    
        return image.dataUrl || '';
    } catch (error) {
        console.error('Error capturing image from camera', error);
        throw error; 
    }

};

export const openGallery = async (): Promise<string> => {
    try {
        const image = await Camera.getPhoto({
          quality: 90,
          allowEditing: false,
          resultType: CameraResultType.DataUrl,
          source: CameraSource.Photos,
        });
    
        return image.dataUrl || ''; // Ensure a non-null string value
      } catch (error) {
        console.error('Error capturing image from gallery', error);
        throw error; // Rethrow the error or handle it appropriately
      }
}