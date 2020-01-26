/**
 * 
 */

function onUpload() {
	var xhttp = new XMLHttpRequest();
    var documentData = new FormData();
    var product_name=document.getElementById("upload").files[0];
    documentData.append('file',product_name);
    xhttp.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 201) {
        	 document.getElementById("created").innerHTML = "The CSV has been uploaded and persisted Successfully";
         }
    };
    xhttp.open("POST", "http://localhost:8080/upload", true);
    xhttp.send(documentData);
}


function getAllProduct(){
	var xhttp = new XMLHttpRequest();
	var txt="";
    xhttp.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) {
             myObj = JSON.parse(this.responseText);
             txt += "<table border='1' class='allproduct'>"
             txt += "<tr><th>ID</th> <th>Last Name</th> <th>Location</th><th>Outlet Name</th><th>Outlet Type</th></tr>";
             for (x in myObj) {
               txt += "<tr><td>" + myObj[x].id + "</td>";
               txt += "<td>" + myObj[x].lastName + "</td>";
               txt += "<td>" + myObj[x].location + "</td>";
               txt += "<td>" + myObj[x].outletName + "</td>"
               txt += "<td>" + myObj[x].outletType + "</td></tr>";
             }
             txt += "</table>"
             document.getElementById("AllProduct").innerHTML = txt;
         }
    };
    xhttp.open("GET", "http://localhost:8080/getAllUploadedData", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send("Your JSON Data Here");
}

