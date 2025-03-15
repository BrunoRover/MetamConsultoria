import { useCallback } from "react";

function useNavigation() {
    const scrollToElement = useCallback((id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }, []);

    const openLink = useCallback((url) => {
        window.open(url, "_blank");
    }, []);

    const openWhatsApp = useCallback((phoneNumber, message) => {
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    }, []);

    return { scrollToElement, openLink, openWhatsApp };
}

export default useNavigation;
