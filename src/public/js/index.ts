import MicroModal from "micromodal";

MicroModal.init({
    onShow: (modal: any) => console.info(`${modal.id} is shown`),
    onClose: (modal: any) => console.info(`${modal.id} is hidden`),
    openTrigger: "data-custom-open",
    closeTrigger: "data-custom-close",
    disableScroll: true,
    disableFocus: false,
    awaitCloseAnimation: true,
    debugMode: true
});


const button = document.getElementById("button");
button.addEventListener("click", () => {
    MicroModal.show("modal-2", {});
});