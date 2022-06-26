const parser = new DOMParser;

const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`;

const xmlDOM = parser.parseFromString(xmlString, 'text/xml');

const listNode = xmlDOM.querySelector('list');
const studentsNode = listNode.querySelectorAll('student');
const nameNode = studentsNode[0].querySelector('name');
const ageNode = studentsNode[0].querySelector('age');
const profNode = studentsNode[0].querySelector('prof');
const firstsNode = listNode.querySelectorAll('first');
const secondsNode = listNode.querySelectorAll('second');
const nameNode2 = studentsNode[1].querySelector('name');
const ageNode2 = studentsNode[1].querySelector('age');
const profNode2 = studentsNode[1].querySelector('prof');

const langAttr = nameNode.getAttribute('lang');
const langAttr2 = nameNode2.getAttribute('lang');

const resultXML = {
    list: [
        {
            name: `${firstsNode[0].textContent} ${secondsNode[0].textContent}`,
            age: Number(ageNode.textContent),
            prof: profNode.textContent,
            lang: langAttr,
        },
        {
            name: `${firstsNode[1].textContent} ${secondsNode[1].textContent}`,
            age: Number(ageNode2.textContent),
            prof: profNode2.textContent,
            lang: langAttr2,
        },
    ],
};
console.log('resultXML', resultXML);
