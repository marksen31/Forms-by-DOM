var section = document.createElement("section")

// Name and Address
var div = creatediv("div", "First Name", "input")
var div1 = creatediv("div", "Last Name", "input")
var div2 = creatediv("div", "Address", "input")
var div3 = creatediv("div", "Pincode", "input")
var div4 = creatediv("div", "State", "input")
var div5 = creatediv("div", "Country", "input")

var div6 = document.createElement("div")
div6.setAttribute("id", "gender")
div6.innerHTML = "Gender"

var divGender = document.createElement("div")

// Radio Button Creating with div starts here
var radioMale = document.createElement("input")
var lableMale = document.createElement("label")
radioMale.setAttribute("type", "radio")
radioMale.setAttribute("name", "gender")
radioMale.setAttribute("value", "Male")
lableMale.setAttribute("for", "Gender")
lableMale.innerHTML = "Male"

var radioFemale = document.createElement("input")
var lableFemale = document.createElement("label")
radioFemale.setAttribute("type", "radio")
radioFemale.setAttribute("name", "gender")
radioFemale.setAttribute("value", "Female")
lableFemale.setAttribute("for", "Gender")
lableFemale.innerHTML = "Female"

divGender.append(radioMale, lableMale, radioFemale, lableFemale)
div6.append(divGender)
// Radio Button Creating with div ends here

var checkBox = food("div", "input", "label", "Biriyani")
var checkBox2 = food("div", "input", "label", "FishFry")
var checkBox3 = food("div", "input", "label", "Shawarma")
var checkBox4 = food("div", "input", "label", "Chicken65")
var checkBox5 = food("div", "input", "label", "Idly")


var table = document.createElement("table")
table.setAttribute("id", "table")
table.setAttribute("class", "table table-striped")

var tbody = document.createElement("tbody")
var tr = document.createElement("tr")

var th_first = createTable("th", "First Name")
var th_last = createTable("th", "Last Name")
var th_address = createTable("th", "Address")
var th_pincode = createTable("th", "Pincode")
var th_state = createTable("th", "State")
var th_country = createTable("th", "Country")
var th_gender = createTable("th", "Gender")
var th_food1 = createTable("th", "Favorite Food")
var th_food2 = createTable("th", "Favorite Food")
var th_food3 = createTable("th", "Favorite Food")
var th_food4 = createTable("th", "Favorite Food")
var th_food5 = createTable("th", "Favorite Food")



function createTable(element, value) {
    var th = document.createElement(element)
    th.setAttribute("id", value)
    th.innerHTML = value
    return th
}

tr.append(th_first, th_last, th_address, th_pincode, th_state, th_country, th_gender, th_food1, th_food2, th_food3, th_food4, th_food5)
tbody.append(tr)
table.append(tbody)

var button = document.createElement("button")
button.innerHTML = "Click Me"
button.setAttribute("id", "click me")

// reset = document.createElement("button")
// reset.setAttribute("id", "reset")
// reset.innerHTML = "Reset Form"


section.append(div, div1, div2, div3, div4, div5, div6, checkBox, checkBox2, checkBox3, checkBox4, checkBox5, button, table)
document.body.append(section)

// Function to create div and input
function creatediv(elementName, value, input) {
    var maindiv = document.createElement(elementName);
    maindiv.setAttribute("class", "main")
    maindiv.innerHTML = value;
    var childdiv = document.createElement(elementName)
    var input = document.createElement(input)
    input.setAttribute("type", "text")
    input.setAttribute("id", value)
    childdiv.append(input)
    maindiv.append(childdiv)

    return maindiv;
}

function food(element, input, label, food) {
    var checkdiv = document.createElement(element);
    var check = document.createElement(input)

    var labelcheckbox = document.createElement(label)


    check.setAttribute("type", "checkbox")
    check.setAttribute("name", food)
    check.setAttribute("value", food)
    check.setAttribute("id", food)
    check.setAttribute("class", "food")

    


    labelcheckbox.innerHTML = food
    checkdiv.append(check, labelcheckbox)
    return checkdiv
}

var entry = document.getElementById("click me")
entry.setAttribute("name", "clear")
entry.addEventListener("click", display)

var row = 1

function display() {
    var input = document.getElementsByTagName("input");
    var numChecked = 0;

    for (var i = 0; i < input.length; i++) {
        if (input[i].type == "checkbox" && input[i].checked) {
            numChecked = numChecked + 1;
        }
    }
    if (numChecked < 2) {
        alert("Select atleast 2 food")
    } else {

        var first = document.getElementById("First Name").value
        var last = document.getElementById("Last Name").value
        var address = document.getElementById("Address").value
        var pincode = document.getElementById("Pincode").value
        var state = document.getElementById("State").value
        var country = document.getElementById("Country").value
        var gender = document.querySelector('input[name="gender"]:checked').value

        var food = " "
        if (document.getElementById("Biriyani").checked) {
            food = document.getElementById("Biriyani").value
        }
        var food2 = " "
        if (document.getElementById("FishFry").checked) {
            food2 = document.getElementById("FishFry").value

        }
        var food3 = " "
        if (document.getElementById("Shawarma").checked) {
            food3 = document.getElementById("Shawarma").value
        }
        var food4 = " "
        if (document.getElementById("Chicken65").checked) {
            food4 = document.getElementById("Chicken65").value
        }
        var food5 = " "
        if (document.getElementById("Idly").checked) {
            food5 = document.getElementById("Idly").value
        }
        // var food3 = document.querySelector('input[name="food"]:checked').value
        // var food4 = document.querySelector('input[name="food"]:checked').value
        // var food5 = document.querySelector('input[name="food"]:checked').value

        //  if(!first || !last || !address){
        //      alert("Please add")
        //      return
        //  }


        var displaytable = document.getElementById("table")

        //  var oldrow=displaytable.insertRow(0)

        var newrow = displaytable.insertRow(row)

        var cell1 = newrow.insertCell(0)
        var cell2 = newrow.insertCell(1)
        var cell3 = newrow.insertCell(2)
        var cell4 = newrow.insertCell(3)
        var cell5 = newrow.insertCell(4)
        var cell6 = newrow.insertCell(5)
        var cell7 = newrow.insertCell(6)

        // if (food.value == "Biriyani") {
        // var cell8 = newrow.insertCell(7)
        // cell8.innerHTML = food
        //     return cell8

        // }
        var cell8 = newrow.insertCell(7)
        var cell9 = newrow.insertCell(8)
        var cell10 = newrow.insertCell(9)
        var cell11 = newrow.insertCell(10)
        var cell12 = newrow.insertCell(11)
        //  var cellfood=oldrow.insertCell(0)


        cell1.innerHTML = first
        cell2.innerHTML = last
        cell3.innerHTML = address
        cell4.innerHTML = pincode
        cell5.innerHTML = state
        cell6.innerHTML = country
        cell7.innerHTML = gender

        cell8.innerHTML = food
        cell9.innerHTML = food2
        cell10.innerHTML = food3
        cell11.innerHTML = food4
        cell12.innerHTML = food5
        //  cellfood.innerHTML=Sample

        row++
        document.getElementById("First Name").value = ""
        document.getElementById("Last Name").value = ""
        document.getElementById("Address").value = ""
        document.getElementById("Pincode").value = ""
        document.getElementById("State").value = ""
        document.getElementById("Country").value = ""
        // document.getElementsByName("gender").checked = ""
        // document.querySelector('input[name="gender"]:checked').value = ""
        var ele = document.getElementsByName("gender");
        for (var i = 0; i < ele.length; i++) {
            ele[i].checked = false;
        }
        var tag=document.getElementsByClassName("food")
        for (var i = 0; i < tag.length; i++) {
            tag[i].checked = false;
        }

        
    }
}

// var entry = document.getElementById("reset")
// entry.setAttribute("name", "clear")
// entry.addEventListener("click", reset)

// // var el_down = document.getElementsByName("gender");

// function reset() {
//     var ele = document.getElementsByName("gender");
//     for (var i = 0; i < ele.length; i++)
//         ele[i].checked = false;
// }

// function resetForm() {
//     document.getElementById("First Name").value = ""
//     document.getElementById("Last Name").value = ""
//     document.getElementById("Address").value = ""
//     document.getElementById("Pincode").value = ""
//     document.getElementById("State").value = ""
//     document.getElementById("Country").value = ""
//     document.querySelector('input[name="gender"]:checked').value = ""

// }

