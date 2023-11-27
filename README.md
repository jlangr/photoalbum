# Usage instructions

1. From the root of project, install Node dependencies:

 `npm install`

2. Start a local dev server:

  `npm start`

3. Open [http://localhost:3000](http://localhost:3000) in a browser.

# To run tests

  `npm test`

# Development notes

- Delivering to one person, Emma Langston
- Building to requirements as stated unless otherwise specified
- No need for internationalization. However: it's a pain to retro-introduce variables(?) for embedded text, particularly in HTML, so that is introduced here

Next sensible functionality would be to render the thumbnails, which when then clicked on would render the full image. Not asked for.
This would also be best rendered in a grid. Also not asked for, so right now it's rendered as a simple unnumbered list.

## Resources used

- Occasional query to Google
- Rubber duck

## Goals of solution

- Minimize over-engineering
- Minimize effort spent, so as to deliver MVP to customer sooner
- Ensure high confidence that application works as expected, primarily through unit tests
- Ensure high quality design to reduce cost of future change

