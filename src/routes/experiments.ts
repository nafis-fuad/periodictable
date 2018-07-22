import { Request, Response } from "express";
import * as Pt from "periodic-table";

// create an array with uniquegroupblocks
const allEelements: object[] = Pt.all();
const allGroupBlocks: string[] = [];
let uniqueGroupBlocks: string[];
const unique = (value: string, index: number, self: any[]) => {
    return self.indexOf(value) === index;
};
allEelements.forEach((element: any) => {
    allGroupBlocks.push(element.groupBlock);
});
uniqueGroupBlocks = allGroupBlocks.filter(unique);


// create required colors object
const arrayOfColors = ["red", "green", "blue", "white", "black", "purple", "cyan", "rebeccapurple", "pink", "brown", "darkgreen"];
const requiredColors: any = {};
uniqueGroupBlocks.forEach((element: any, index: any) => {
    requiredColors[element] = arrayOfColors[index];
});

/**
 * GET /
 * Home PAGE.
 */
export let index = (req: Request, res: Response) => {
    res.render("experiment", {
        title: "Home",
        elements: Pt.all(),
        requiredColors,
    });
};
