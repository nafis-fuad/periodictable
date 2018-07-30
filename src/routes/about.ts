import { Request, Response } from "express";

/**
 * GET /about
 * ABOUT PAGE
 */
export let about = (req: Request, res: Response) => {
    res.render("about", {
        title: "About"
    });
};
