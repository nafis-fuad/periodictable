"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Pt = __importStar(require("periodic-table"));
// create an array with uniquegroupblocks
const allEelements = Pt.all();
const allGroupBlocks = [];
let uniqueGroupBlocks;
const unique = (value, index, self) => {
    return self.indexOf(value) === index;
};
allEelements.forEach((element) => {
    allGroupBlocks.push(element.groupBlock);
});
uniqueGroupBlocks = allGroupBlocks.filter(unique);
// create required colors object
const arrayOfColors = ["red", "green", "blue", "white", "black", "purple", "cyan", "rebeccapurple", "pink", "brown", "darkgreen"];
const requiredColors = {};
uniqueGroupBlocks.forEach((element, index) => {
    requiredColors[element] = arrayOfColors[index];
});
/**
 * GET /
 * Home PAGE.
 */
exports.index = (req, res) => {
    res.render("index", {
        title: "Home",
        elements: Pt.all(),
        requiredColors,
    });
};
//# sourceMappingURL=index.js.map