import { Request, Response } from "express";

/**
 * GET /
 * HOME PAGE
 */
export let index = (req: Request, res: Response) => {
    res.render("index", {
        title: "Home"
    });
};
