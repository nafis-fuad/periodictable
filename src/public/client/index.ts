import "../css/main.css";
import M from "materialize-css";

// Helper functions
function get(elem: string) {
    return document.querySelectorAll(elem);
}

document.addEventListener("DOMContentLoaded", () => {
    M.Sidenav.init(get(".sidenav"));
    M.Modal.init(get(".modal"));
    M.Tooltip.init(get(".tooltipped"));
});