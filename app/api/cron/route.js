const { exec } = require('node:child_process')

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const sharedKey = searchParams.get('key');

  if (sharedKey!== '1') {
    console.log('Failed to get sharedKey')
    return new Response('Failed to get sharedKey', { status: 200 });
  }
  console.info(`Start`);

  let co = exec('npm run test:e2e', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error al ejecutar las pruebas de Playwright: ${error}`);
      return;
    }
    console.log(`Resultado de las pruebas de Playwright:\n${stdout}`);
  });

  console.info(`End`);
  return new Response('Successfully got sharedKey', { status: 200 });
}
