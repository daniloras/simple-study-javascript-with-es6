const myPromise = () => new Promise((resolve, reject) => {
  setTimeout( () => { resolve('Ok') }, 2000);
})

async function executeMyPromisse() {
  console.log(await myPromise());
  console.log(await myPromise());
  console.log(await myPromise());
  console.log(await myPromise());
  console.log(await myPromise());
}

executeMyPromisse();

// Arrow Funcions

const executePromisse = async () => {
  console.log(await myPromise());
  console.log(await myPromise());
  console.log(await myPromise());
  console.log(await myPromise());
}

executePromisse();