import "../css/main.css";
import MicroModal from "micromodal";

MicroModal.init({
    onShow: (modal: any) => console.info(`${modal.id} is shown`),
    onClose: (modal: any) => console.info(`${modal.id} is hidden`),
    openTrigger: "data-custom-open",
    closeTrigger: "data-custom-close",
    disableScroll: false,
    disableFocus: false,
    awaitCloseAnimation: true,
    debugMode: true
});