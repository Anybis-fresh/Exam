function Submit(){
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const age = document.getElementById('age').value;

    if(name && surname && age){
        if(age >= 18){
            const List = document.createElement('li');

            List.textContent = 'Name: ' + name + ', Surname: ' + surname + ', Age: ' + age;

            document.getElementById('list').appendChild(List);

            document.getElementById('name').value = '';
            document.getElementById('surname').value = '';
            document.getElementById('age').value = '';
        }
        else{
            alert("Sorry, but to see it you should be 18 or older");
        }
    }
    else{
        alert("Fill all inputs");
    }
}