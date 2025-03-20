import { useCallback } from "react";
import { toast } from "react-toastify";

export const useToast = () => {
    const showToast = useCallback((message, status = "success") => {
        const config = {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        };

        if (status === "success") {
            toast.success(message, config);
        } else {
            toast.error(message, config);
        }
    }, []);

    return { showToast };
};
export default useToast;