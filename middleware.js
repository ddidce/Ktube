import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = 'KTube';   
    res.locals.routes = routes;
    next();
}