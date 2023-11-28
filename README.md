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
- Building to requirements as stated
- No need for internationalization given our limited distribution. However: it's a pain and risky to retro-introduce localization, particularly in HTML. In any real app, no matter the size, I would externalize the embedded text.
- Some warnings remain from the use of React Testing Library, regarding "argument types do not match parameters." Should be fixed, according to https://youtrack.jetbrains.com/issue/WEB-46479/False-positive-warning-Argument-types-do-not-match-parameters-in-ReactDOM.render, but it still showw in my (latest possible) version of WebStorm.
- One of the tests (PhotosClient) is an "integration test" that acts as a contract test of sorts against the external service call. It is slow by definition. In a larger (real) effort: it would be tagged so that it wouldn't run as part of the "fast" unit test suite.
- RetrievedPhotos could be extracted as a top-level component with some benefit (e.g. tests would come along with it). Chose to defer for now.
- Web service URL should be externalized. Not done.
- Style: No semicolons. Minimal braces.
- Aria declarations are likely incomplete.

Next sensible functionality would be to render the thumbnails (in a grid, probably), which when clicked on would render a full image. Not asked for, not done.

## Resources used

- Occasional query to Google
- Rubber duck (I asked an old teammate Nick a question about Jest mocks and figured out the answer as a result of asking the question)
- Nick provided a quick review and pointed out a couple small things that I fixed, e.g. an opportunity to declare `isAlbumNumberEmpty` as a const value and not a function
- I asked ChatGPT to generate some bits of CSS

## Goals of solution

- Minimize over-engineering; straight up React works well for this
- Minimize effort spent, so as to deliver MVP to customer sooner
- Ensure high confidence that the application works as expected, primarily through unit tests
- Ensure quality design to reduce cost of future change. Mostly this is small, well-named cohesive modules & functions

