var myObject = {
  name: 'John',
  age: 29,
  email: 'j@j.com'
};

function name() {
  window.alert(myObject.name);
}

function rename() {
  window.alert('Previous name: '+myObject.name);
  myObject.name =
  window.document.getElementById('ex3input').value; 
  document.getElementById('ex3output').value 
  = myObject.name;
  window.alert('New name: '+myObject.name);
  
}
function ageUp() {
  window.alert('Previousage: '+myObject.age);
  myObject.age += 10;
  document.getElementById('ex3outputage').value 
  = myObject.age;
}
function createPerson() {
  
}