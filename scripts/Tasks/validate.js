function validate() {
    let name = document.getElementById("name").value;
    let target_ele = document.getElementById("msg");
    if(name === "") {
        target_ele.textContent = 'Please enter a name';
        return false;
    }
    else if (name.length < 2) {
        target_ele.textContent = 'Short Name';
        return false;
    }
}