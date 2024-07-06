import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isPublicRoute = createRouteMatcher (['/sign-in', './sign-up'])

export default clerkMiddleware((auth, req) => {
  // Restrict admin route to users with specific role
  if (isPublicRoute(req)) auth().protect({ role: 'org:admin' });

});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};