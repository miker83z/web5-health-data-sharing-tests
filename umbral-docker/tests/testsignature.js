const host = 'http://127.0.0.1';
const port = 8023;

const testSignature = async () => {
  const signer = (await requestSigner(host, port)).data;
  const data = 'Hello World 2';

  const { signature } = (
    await sign(host, port, {
      signer,
      data,
    })
  ).data;

  const { verified } = (
    await verify(host, port, {
      signature,
      data,
      pk: signer.pk,
    })
  ).data;

  console.log('Signature verified: ' + verified);
};

const main = async () => {
  await testSignature();
};

main();
