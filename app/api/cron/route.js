const { exec } = require('node:child_process')

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const sharedKey = searchParams.get('key');

  if (sharedKey!== '1') {
    console.log('Failed to get sharedKey')
    return new Response('Failed to get sharedKey', { status: 200 });
  }
  console.info(`Start`);

  const cmd = 'npx playwright test fichar.spec.js';

  exec(cmd, (error, stdout, stderr) => {
    if (error) {
      console.info(`Error: ${error.message}`);
      return;
    }

    if (stderr) {
      console.info(`Stderr: ${stderr}`);
      return;
    }

    console.info(`Command output: ${stdout}`);
  });
  console.info(`End`);
  return new Response('Successfully got sharedKey', { status: 200 });
}
