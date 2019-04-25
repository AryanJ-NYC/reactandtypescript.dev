import React, { useState } from 'react';
import SEO from '../components/seo';

const IndexPage = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    const emails = [{ email }];
    const response = await fetch('/.netlify/functions/submitEmailAddress', {
      body: JSON.stringify(emails),
      method: 'post',
    });

    const body = await response.json();
    if (!body.error_count) {
      setEmail('');
    }
  };

  return (
    <>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Coming soon: React and TypeScript documentation!</p>
      <form method="post" onSubmit={handleSubmit}>
        <label>
          Want an email when it's ready? Join my mailing list!
          <br />
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="email"
            required
          />
          <button type="submit">Submit</button>
        </label>
      </form>
      <p>
        Visit the{' '}
        <a
          href="https://github.com/AryanJ-NYC/reactandtypescript.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub repository
        </a>{' '}
        to contribute!
      </p>
      <p>
        If you're looking for immediate React and TypeScript help, please visit{' '}
        <a
          href="https://twitter.com/swyx"
          target="_blank"
          rel="noopener noreferrer"
        >
          @swyx
        </a>
        's{' '}
        <a
          href="https://github.com/sw-yx/react-typescript-cheatsheet"
          target="_blank"
          rel="noopener noreferrer"
        >
          React TypeScript cheatsheet.
        </a>
      </p>
      <p>
        Lastly, tweet me at{' '}
        <a
          href="https://twitter.com/AryanJabbari"
          target="_blank"
          rel="noopener noreferrer"
        >
          @AryanJabbari
        </a>
        . Words of encouragement are always welcome!
      </p>
    </>
  );
};

export default IndexPage;
