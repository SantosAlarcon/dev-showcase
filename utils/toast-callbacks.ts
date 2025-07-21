import toast from "react-hot-toast";
import { ActionState } from "./with-callbacks";

type CreateToastCallbacksOptions = { loadingMessage?: string };

export const createToastCallbacks = (options: CreateToastCallbacksOptions) => {
    return {
        onStart: () => {
            // return toast.loading(options.loadingMessage);
        },
        onEnd: (reference: string) => {
            toast.dismiss(reference);
        },
        onSuccess: (result: ActionState) => {
            if (result?.message) {
                toast.success(result.message);
            }
        },
        onError: (result: ActionState) => {
            if (result?.message) {
                toast.error(result.message);
            }
        },
    };
};
