let id = 0;
let iId = 0;
const br = document.createElement('br')
const submit = () => {
    let type = document.querySelector('#type').value;
    let label = document.querySelector('#label').value;
    let placeholder = document.querySelector('#placeholder').value;
    switch(type){
        case 'text' : appendText(label, placeholder);
            break
        case 'Radio': appendRadio(label, placeholder);
            break
        case 'checkbox': appendCheckbox(label, placeholder);
    }
}
const changePlaceholder = () => {
    let type = document.querySelector('#type').value;
    switch (type){
        case 'text': 
            document.querySelector('#label').value = ""
            document.querySelector('#placeholder').value = ""
            document.querySelector('#placeholder').setAttribute('placeholder', 'placeholder')
            break
        case 'Radio': 
            document.querySelector('#label').value = ""
            document.querySelector('#placeholder').value = ""
            document.querySelector('#placeholder').setAttribute('placeholder', 'Number of Choices')
            break
        case 'checkbox': 
            document.querySelector('#label').value = ""
            document.querySelector('#placeholder').value = ""
            document.querySelector('#placeholder').setAttribute('placeholder', 'Number of Choices')
            break
    }
    
}
const appendText = (label = 'no Label', placeholder = 'no placeholder') => {
    id += 1;
    const PID = id; 
    let container = document.createElement('div');
    container.setAttribute('class', 'bg-dark mx-auto border border-success w-75 p-2 mt-2');
    container.setAttribute('style', 'border-radius:10px')
    let labelT = document.createElement('p');
    labelT.setAttribute('class', 'text-light');
    let del = document.createElement('button');
    del.innerHTML = "del";
    del.setAttribute('onclick', 'del('+ PID +')');
    del.setAttribute('class', 'btn btn-danger ml-auto m-1')
    labelT.innerHTML = label;
    container.setAttribute('id', id);
    let el = document.createElement('input');
    el.setAttribute('placeholder', placeholder);
    el.setAttribute('class','w-75 ml-3')
    container.append(labelT)
    container.append(el)
    container.append(br)
    container.append(del)
    document.querySelector('#results').append(container);

}

const appendRadio = (label ='no label', placeholder ='no placeholder') => {
    id += 1;
    const PID = id;
    let i = 0 
    let container = document.createElement('div');
    container.setAttribute('class', 'bg-dark mx-auto border border-success p-2 w-75 mt-2')
    container.setAttribute('style', 'border-radius:10px')
    let labelT = document.createElement('p');
    labelT.setAttribute('class', 'text-light');
    let form = document.createElement('form');
    labelT.innerHTML = label;
    for(i=0; i < parseInt(placeholder); i++){
        iId += 1;
        var permId = iId + 's'
        var choice = document.createElement('input');
        choice.setAttribute('name', 'choices')
        var choiceLabel = document.createElement('input');
        choiceLabel.setAttribute('class', 'text-light')
        choiceLabel.setAttribute('id', permId)
        choiceLabel.setAttribute('style','margin-left:20px; width:50%; margin-top:5px')
        choice.setAttribute("ondblclick", "changeData('"+permId+"')")

        choiceLabel.disabled = true
        
        var br = document.createElement('br')
        choiceLabel.setAttribute('placeholder', 'double click radio button to edit')
        choice.setAttribute('type', 'radio')
        choice.setAttribute('style', 'margin-left:20px;')
        form.append(choice)
        form.append(choiceLabel)
        form.append(br)

        
    }
    let del = document.createElement('button');
    del.innerHTML = "del";
    del.setAttribute('onclick', 'del('+ PID +')');
    del.setAttribute('class', 'mt-3 btn btn-danger')
    container.setAttribute('id', id);
    let el = document.createElement('input');
    el.setAttribute('type', 'radio')
    container.append(labelT)
    container.append(br)
    container.append(form)
    container.append(del)
    document.querySelector('#results').append(container);
}

const appendCheckbox = (label ='no label', placeholder ='no placeholder') => {
    id += 1;
    const PID = id;
    let i = 0 
    let container = document.createElement('div');
    container.setAttribute('class', 'bg-dark  mx-auto border border-success w-75 p-2 mt-2');
    container.setAttribute('style', 'border-radius:10px')
    let labelT = document.createElement('p');
    labelT.setAttribute('class', 'text-light')
    let form = document.createElement('form');
    labelT.innerHTML = label;
    for(i=0; i < parseInt(placeholder); i++){
        iId += 1;
        var permId = iId + 's'
        var choice = document.createElement('input');
        choice.setAttribute('name', 'choices')
        var choiceLabel = document.createElement('input');
        choiceLabel.setAttribute('id', permId)
        choice.setAttribute("ondblclick", "changeData('"+permId+"')")
        choice.setAttribute('style', 'margin-left:20px;')
        choiceLabel.setAttribute('style','margin-left:20px; width:50%; margin-top:5px')
        choiceLabel.disabled = true
        
        var br = document.createElement('br')
        choiceLabel.setAttribute('placeholder', 'double click checkbox to edit')
        choice.setAttribute('type', 'checkbox')
        form.append(choice)
        form.append(choiceLabel)
        form.append(br)

        
    }
    let del = document.createElement('button');
    del.innerHTML = "del";
    del.setAttribute('onclick', 'del('+ PID +')');
    del.setAttribute('class', 'mt-3 btn btn-danger');
    container.setAttribute('id', id);
    container.append(labelT)
    container.append(br)
    container.append(form)
    container.append(del)
    document.querySelector('#results').append(container);
}

const del = (del) =>{
    document.getElementById(del).remove(this);
}
const changeData = (id) => {
    if(document.getElementById(id).disabled == false){
        document.getElementById(id).disabled = true
        document.getElementById(id).setAttribute('class','text-light');
        
    } else {
        document.getElementById(id).disabled = false;
        document.getElementById(id).setAttribute('class','text-dark');
    }
}
