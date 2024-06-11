const studentName = "Dirdhrajsinh Chauhan"; 
const studentNumber = "1157288"; 

console.log(`${studentName} - ${studentNumber}`);

const headerContent = document.querySelector('h1');
headerContent.innerHTML = `${studentName} - ${studentNumber}`;
headerContent.classList.add('heading1');


