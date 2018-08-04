import * as shell from "shelljs";

// shell.cp("-R", "src/public/js", "dist/public/");
shell.cp("-R", "src/public/lib", "dist/public/lib");
shell.cp("-R", "src/public/fonts", "dist/public/");
shell.cp("-R", "src/public/images", "dist/public/");
