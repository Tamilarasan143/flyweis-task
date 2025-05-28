import { articleRoutes } from "./acrticle";
import { authRoutes } from "./auth";
import { autoDealershipRoutes } from "./auto-dealership";
import { faqRoutes } from "./faq";

export const api ={
    auth:authRoutes,
    faq:faqRoutes,
    article:articleRoutes,
    autoDealerShip:autoDealershipRoutes
}