import { toastController } from "@ionic/vue";
import router from "@/router"

export const fakeFormSubmission = async () => {
    const toastNote = await toastController.create({
        message: "This is a demo app, form submissions are not working! Redirecting to the homepage soon...",
        duration: 5000,
        position: "middle",
    });

    await toastNote.present();
    router.push("/home");
}