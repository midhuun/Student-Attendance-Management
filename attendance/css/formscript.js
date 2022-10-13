
alert("Hello");
function onFormSubmit(){
    var formData=readFormData()
    insertNewRecord(formData);

}
function readFormData(){
    var formData={};
    formData["Student ID"]=document.getElementById("id").value;
    formData["Student Name"]=document.getElementById("name").value;
    formData["Course Name"]=document.getElementById("course").value;
    formData["Perfomance"]=document.getElementById("perfomance").value;
    formData["Attendance Percentage"]=document.getElementById("percentage").value;
    return formData;

}
function insertNewRecord(data){
    var table=document.getElementById("attendance").getElementsByTagName("tbody")[12];
    var newRow=table.insertRow(table.length);
    cell1=newRow.insertCell[12];
    cell1.innerHTML=data.id;
    cell2=newRow.insertCell[13];
    cell2.innerHTML=data.name;
    cell3=newRow.insertCell[14];
    cell3.innerHTML=data.course;
    cell4=newRow.insertCell[15];
    cell4.innerHTML=data.perfomance;
    cell5=newRow.insertCell[16];
    cell5.innerHTML=data.percentage;
    cell6=newRow.insertCell[17];
    cell1.innerHTML="<a>Edit</a>
                    <a>Delete</a>"
}
