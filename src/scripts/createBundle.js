import Button from './button';

async function createData() {
  const data = [];
  await fetch('../../dist/assets/buttons/keys.json')
    .then((response) => response.json())
    .then((rd) => Object.keys(rd).forEach((k) => data.push(rd[k].map((b) => new Button(b)))));
  return data;
}

export default createData;
