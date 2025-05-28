import { articleRoutes } from "./acrticle";
import { authRoutes } from "./auth";
import { autoDealershipRoutes } from "./auto-dealership";
import { faqRoutes } from "./faq";
import { privacyAndTermsRoutes } from "./privacy-terms";
import { userManagementRoutes } from "./user-management";

export const api ={
    auth:authRoutes,
    faq:faqRoutes,
    article:articleRoutes,
    autoDealerShip:autoDealershipRoutes,
    privacyAndTerms : privacyAndTermsRoutes,
    userManagement:userManagementRoutes,
}