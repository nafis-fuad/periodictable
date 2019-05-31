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
const arrayOfColors = [
  "#FAAF92",
  "#D4C7BE",
  "#AA6288",
  "#8abf7c;",
  "#89B4C4",
  "#F1D3A1",
  "#74ccb2",
  "#FDBC5E",
  "#553973",
  "#E04386",
  "#F7801A"
];
const requiredColors: any = {};
uniqueGroupBlocks.forEach((element: any, index: any) => {
  requiredColors[element] = arrayOfColors[index];
});

/**
 * GET /
 * PERIODIC TABLE PAGE.
 */
export let index = (req: Request, res: Response) => {
  res.render("index", {
    title: "Periodic Table",
    elements: Pt.all(),
    requiredColors
  });
};
