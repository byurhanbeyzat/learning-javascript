const name = 'John';
const age = 22;
const job = 'Jr. Front end developer';
const city = 'Ruse';

let html;


// without template strings (ES5)
html = '<ul><li>Name: '+ name +'</li><li>Age: ' + age + '</li><li>Job: ' + job + '</li><li>City: ' + city + '</li></ul>';


// with template strings (ES6)
html = `
  <ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
  </ul>
`;


html = document.body.innerHTML = html;