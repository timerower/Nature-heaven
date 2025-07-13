document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("loginModal");
    const openLogin = document.getElementById("openLogin");
    const closeModal = document.querySelector(".close");

    openLogin.addEventListener("click", () => {
        modal.style.display = "flex";
    });

    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});
