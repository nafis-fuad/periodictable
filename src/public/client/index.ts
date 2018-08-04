import "../css/main.css";
import M from "materialize-css";

// import MicroModal from "micromodal";


// MicroModal.init({
//     onShow: (modal: any) => console.info(`${modal.id} is shown`),
//     onClose: (modal: any) => console.info(`${modal.id} is hidden`),
//     openTrigger: "data-custom-open",
//     closeTrigger: "data-custom-close",
//     disableScroll: false,
//     disableFocus: false,
//     awaitCloseAnimation: true,
//     debugMode: true
// });

// Helper functions
function get(elem: string) {
    return document.querySelectorAll(elem);
}

document.addEventListener("DOMContentLoaded", () => {
    M.Sidenav.init(get(".sidenav"));
});