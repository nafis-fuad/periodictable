import { Request, Response } from "express";

/**
 * GET /
 * Home PAGE.
 */
export let index = (req: Request, res: Response) => {
    res.render("index", {
        title: "Home"
    });
};
