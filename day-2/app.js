// loads all data when document or page is loaded
document.onload=showData();

// validate form
function validateForm(){
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var address = document.getElementById("address").value;
    var email = document.getElementById("email").value;
    // validating
    if(name.length < 2){
        alertBox("Name!","Please Enter Correct Name","warning");
        return false;
    }
    if(age<1){
        alertBox("Age!","Please Enter Correct Age","warning");
        return false;
    }
    if(address==""){
        alertBox("Address!","Please Enter Address","warning");
        return false;
    }
    else if(address.length < 10){
        alertBox("Address!","Please Enter Minimum 10 Letters","warning");
        return false;
    }
    if(email==""){
        alertBox("Email!","Please Enter Email","warning");
        return false;
    }
    else if(!email.includes("@")){
        alertBox("Email!","Please Enter Correct Email","warning");
        return false;
    }
    // validation pass return true
    return true;
}
function addData(){
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var address = document.getElementById("address").value;
    var email = document.getElementById("email").value;

    if(validateForm()==true){
        var peopleList;
        if(localStorage.getItem("peopleList")==null){
            peopleList=[];
        }
        else{
            peopleList = JSON.parse(localStorage.getItem("peopleList"));
        }
    peopleList.push({
        name : name,
        age : age,
        address : address,
        email: email
    })
    localStorage.setItem("peopleList",JSON.stringify(peopleList));
    showData();
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("address").value = "";
    document.getElementById("email").value = "";
    }
}

// show Data function
function showData(){
    var peopleList;
    if(localStorage.getItem("peopleList")==null){
        peopleList=[];
    }
    else{
        peopleList = JSON.parse(localStorage.getItem('peopleList'));
    }
    var html = "";
    peopleList.forEach(function (element, index) {
        html += "<tr>";
        html += "<td>" + element.name + "</td>";
        html += "<td>" + element.age + "</td>";
        html += "<td>" + element.address + "</td>";
        html += "<td>" + element.email + "</td>";
        html +=
            '<td><button onclick="deleteData(' // Fixed the function name here
            + index +
            ')" class="btn btn-danger">Delete</button><button onclick="updateData(' // Fixed the function name here
            + index +
            ')" class="btn btn-warning m-2" id="edit-btn">Edit</button></td>';
        html += "</tr>";
    });
    
    document.querySelector('#crudTable tbody').innerHTML=html;
}



// alert box
function alertBox(name,field,type){
    Swal.fire(
        name,
        field,
        type
      )
}

function deleteData(index){
    var peopleList = JSON.parse(localStorage.getItem("peopleList"));
    peopleList.splice(index,1);
    localStorage.setItem("peopleList",JSON.stringify(peopleList));
    showData();
}

function updateData(index){
    document.getElementById('Submit').style.display="none";
    document.getElementById('Update').style.display="block";
    var peopleList = JSON.parse(localStorage.getItem("peopleList"));
    document.getElementById("name").value = peopleList[index].name;
    document.getElementById("age").value = peopleList[index].age;
    document.getElementById("address").value = peopleList[index].address;
    document.getElementById("email").value = peopleList[index].email;

    document.querySelector("#Update").onclick = function(){
        if(validateForm()==true){
            peopleList[index].name = document.getElementById('name').value;
            peopleList[index].email = document.getElementById("email").value;
            peopleList[index].age = document.getElementById('age').value;
            peopleList[index].address = document.getElementById('address').value;

            localStorage.setItem("peopleList",JSON.stringify(peopleList));
            showData();
            document.getElementById("name").value = "";
            document.getElementById("age").value = "";
            document.getElementById("address").value = "";
            document.getElementById("email").value = "";

            document.getElementById('Submit').style.display="block";
            document.getElementById('Update').style.display="none";
        }

    }
}