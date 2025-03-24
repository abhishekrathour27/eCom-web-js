export function showToast(operation, id) {
    const toast = document.createElement("div");
    toast.classList.add(
        "absolute", "right-5", "bg-gray-900", "text-white", "px-4", "py-2",
        "rounded-lg", "shadow-lg", "text-sm", "font-medium", "transition",
        "transform", "translate-y-10", "opacity-0"
    );

    // Set the text content of the toast
    toast.textContent = operation === "add"
        ? `Product with ID ${id} has been added.`
        : `Product with ID ${id} has been removed.`;

    document.body.appendChild(toast);

    // Position the toast dynamically based on scroll
    const scrollY = window.scrollY; 
    toast.style.top = `${scrollY + 20}px`; // 20px from the top after scroll

    // Animate toast appearance
    setTimeout(() => {
        toast.classList.replace("translate-y-10", "translate-y-0");
        toast.classList.replace("opacity-0", "opacity-100");
    }, 100);

    // Automatically remove the toast after a few seconds
    setTimeout(() => {
        toast.classList.replace("opacity-100", "opacity-0");
        toast.classList.replace("translate-y-0", "translate-y-10");
        setTimeout(() => {
            toast.remove();
        }, 500);
    }, 2000);
}
