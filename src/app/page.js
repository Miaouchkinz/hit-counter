import Censored from '../components/Censored/Censored';
import HitCounter from '../components/HitCounter/HitCounter';
import React from 'react';

/**
 * SERVER-SIDE COMPONENT SANDBOX
 *
 * NOTES:
 * Our top-level Home component is a Server Component, and it "owns" both the Censored and HitCounter components.
 * This is the relationship that matters!
 *
 * When the server renders this component, it comes up with immutable output for each of the Server Components.
 * HitCounter produces a number (eg. 42), and that number is immutable:
 * <HitCounter> will always produce 42, no matter what other changes happen on the client.
 *
 * That value, 42, is then passed through children to Censored.
 * Censored is a Client Component, and so it'll re-render whenever its state changes.
 * But the children prop never changes: it's always 42.
 *
 * In React, the "owner" is the component that renders a particular element. It decides what props to pass.
 * And when the owner component re-renders, those props might've changed, and so the “ownee” component needs to re-render as well.
 */

function Home() {
  return (
    <main>
      <h1>Welcome!</h1>
      <p>
        You are visitor number{' '}
        <Censored>
          <HitCounter />
        </Censored>
        .
      </p>
    </main>
  );
}

export default Home;
