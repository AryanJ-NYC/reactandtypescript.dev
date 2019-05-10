import React, { useState } from 'react';

export default function MailingListForm() {
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
  );
}
