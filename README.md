## Getting Started

```bash
npm run dev
```

## Whats Done and What to Do?

Whats done:

- Authentication has been setup with custom credentials (linked to mongoDB)
- I have moved current price to app/api so it can be used as API (use as ref for others)
- The LargestChange component (document icon) allows you to "buy stock" (fully functioning)
- Auto directed to / (signup) if you have an existing session you are directed to /dashboard
- The model for User is in app/(models)/User.js

TODO:

- Need to rename components, I wrote this stuff but im still confused
- Create API routes for all other lambda's (use current price as example)
- I think we need CI/CD? If we deploy to vercel I think its auto handled
- Redesign LoginForm and RegisterForm (both were copied from example on github)
- Make more visually appealing (just ideas are good)

## To consider

Waiting for opinions:

- Should we use prisma? Works with mongoDB
- Should we use custom credentials or google auth? Its troublesome to integrate both
