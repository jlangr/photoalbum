# Usage instructions

1. From the root of project, install Node dependencies:

 `npm install`

2. Start a local dev server:

  `npm start`

3. Open [http://localhost:3000](http://localhost:3000) in a browser.

# To run tests

  `npm test`

# Development notes

- Delivering only to folks at Lean TECHniques
- Building to requirements as stated unless otherwise specified
- No need for internationalization given our limited distribution. However: it's a pain and risky to retro-introduce localization, particularly in HTML. In any "real" app, no matter the size, I would externalize the embedded text.
- Style: No semicolons. Minimal braces.
- React Testing Library not my favorite thing. It emanates a number of warnings that I chose to ignore after a short timeboxed attempt to eliminate them.
- One of the tests (PhotosClient) is an "integration test" that acts as a contract test of sorts against the external service call. It is slow by definition. In a larger ("real") effort: it would be tagged so that it wouldn't run as part of the "fast" unit test suite.

Next sensible functionality would be to render the thumbnails (in a grid, probably), which when then clicked on would render the full image. Not asked for, not done.

## Resources used

- Occasional query to Google
- Rubber duck (I asked an old teammate Nick a question about Jest mocks and figured out the answer as a result of asking the question)

## Goals of solution

- Minimize over-engineering
- Minimize effort spent, so as to deliver MVP to customer sooner
- Ensure high confidence that the application works as expected, primarily through unit tests
- Ensure quality design to reduce cost of future change. Mostly this is small, well-named cohesive modules & functions

