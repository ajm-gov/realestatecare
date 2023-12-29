import { Camera, CameraResultType, CameraSource } from "@capacitor/camera";

export const openCamera = async () => {
    const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Camera,
    });

    return image.dataUrl;
};

export const openGallery = async () => {
    const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Photos,
    });

    return image.dataUrl;
}