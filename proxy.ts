import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

//const IsProtectedRoute = createRouteMatcher(["/user-profile"]);
const IsPublicRoute = createRouteMatcher(["/","/sign-in(.*)","/sign-up(.*)"]);
const IsAdminRoute = createRouteMatcher(["/admin(.*)"]);

export default clerkMiddleware( async (auth, req) => {
    const {userId, redirectToSignIn} = await auth();
    // if(!userId && !IsPublicRoute(req)){
    //     // Add custom logic to run before redirecting
    //     return redirectToSignIn();
    // }
    if(IsAdminRoute(req) && (await auth()).sessionClaims?.metadata?.role !== "admin"){
        const url = new URL("/", req.url);
        return NextResponse.redirect(url);
    }
    if(!IsPublicRoute(req)) await auth.protect();
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};