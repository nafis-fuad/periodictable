import { Request, Response } from "express";

/**
 * GET /
 * ABOUT PAGE
 */
export let about = (req: Request, res: Response) => {
    res.render("about", {
        title: "About"
    });
};
