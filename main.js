let selectedList = document.querySelector('#custom-columns-selected');
let unselectedList = document.querySelector('#custom-columns-unselected');

function attendanceRegister() {
    let custom_columns = {}
    for (let option of selectedList.options) {
        custom_columns[option.text] = option.value;
    }

    if (Object.keys(custom_columns).length == 0) {
       alert("Please selected atleast 1 field")
        return;
    }

    console.log(custom_columns);
}

function addCustomField() {
    let option = document.createElement('option');
    let custom_field = document.querySelector("#custom-field").value
    option.text = custom_field;
    option.value = custom_field.toLowerCase().replace(' ','_');
    selectedList.add(option);
}

function moveToSelect(select,moveAll) {

    let fromSelect = unselectedList
    let toSelect = selectedList
        
    if(select == "selected"){
        fromSelect = selectedList
        toSelect = unselectedList
    }
    
    if(fromSelect.options.length>0){
        if(moveAll){
            let x = fromSelect.options.length-1;
            for(;x>-1;x--){
                toSelect.add(fromSelect.options[x]);
            }
        }
        else
        {
            
            let x = fromSelect.options.length-1;
            for(;x>-1;x--){
                console.log(x);
                if(fromSelect.options[x].selected){
                    toSelect.add(fromSelect.options[x]);
                }
            }
        }
    }
}

function moveSelection(direction) {

    let actions = { up: 'previousElementSibling',
        down: 'nextElementSibling'
    }
    
    let action = actions[direction]
    for(let option of selectedList.options){

        if(!option[action] || !option.selected) continue;
        let temp = option.cloneNode(true); 
        option.value = option[action].value;
        option.text = option[action].text;
        option[action].value = temp.value;
        option[action].text = temp.text;
    }
}