"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var pt = __importStar(require("periodic-table"));
var allEelements = pt.all();
var allGroupBlocks = [];
var uniqueGroupBlocks;
var unique = function (value, index, self) {
    return self.indexOf(value) === index;
};
allEelements.forEach(function (element) {
    allGroupBlocks.push(element.groupBlock);
});
uniqueGroupBlocks = allGroupBlocks.filter(unique);
var arrayOfColors = ["red", "green", "blue", "white", "black", "purple", "cyan", "rebeccapurple", "pink", "brown", "darkgreen"];
var requiredColors = {};
uniqueGroupBlocks.forEach(function (element, index) {
    requiredColors[element] = arrayOfColors[index];
});
exports.index = function (req, res) {
    res.render("index", {
        title: "Home",
        elements: pt.all(),
        requiredColors: requiredColors,
    });
};
//# sourceMappingURL=index.js.map