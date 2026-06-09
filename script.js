const pages = ["intro", "any", "med", "school", "worth"];

document.addEventListener("keydown", (event) => {
    const current = window.location.pathname.split("/").pop();
    const index = pages.indexOf(current);

    if (index === -1) return;

    if (event.key === "ArrowLeft" && index > 0) {
        window.location.href = `./${pages[index - 1]}`;
    }

    if (event.key === "ArrowRight" && index < pages.length - 1) {
        window.location.href = `./${pages[index + 1]}`;
    }
});