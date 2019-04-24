const axios = require('axios');

exports.handler = async function(event) {
  const { body } = event;
  const apiKey = process.env.GATSBY_MAILING_LIST_API_KEY;
  const response = await axios.post(
    'https://api.sendgrid.com/v3/contactdb/recipients',
    body,
    {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    }
  );

  return {
    headers: {
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Methods': 'OPTIONS,POST',
      'Access-Control-Allow-Origin': 'http://localhost:8000',
    },
    statusCode: 201,
    body: JSON.stringify(response.data),
  };
};
