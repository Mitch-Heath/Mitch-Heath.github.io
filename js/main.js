var seatBuy = 0;
var seatSelectedCount = 0;


function openScreen() {
    var screen = document.getElementById("screen");
    var rowCount = Object.keys(seats).length;
    var seatCount = 6;
    seatBuy = document.getElementById('seatCount').value;
    seatSelectedCount = 0;
    seatsSelected.innerHTML='';

    console.log(seatBuy);
    for (var i = 0; i < rowCount; i++) {
        var row = Object.keys(seats)[i];

        for (var j = 0; j < seatCount; j++) {

            var ySpacing = 35*(i+8);
            var xSpacing = 35*(j+4);
            var seat = row+j.toString();
            var test = document.createElement('span');
            test.setAttribute("class","seatOff");
            test.setAttribute("id", seat);
            test.style.left = xSpacing + 'px';
            test.style.top = ySpacing + 'px';
            test.addEventListener("click", seatSelect);
            test.addEventListener("mouseover", seatHover);
            test.addEventListener("mouseout", seatHoverOff);
            screen.appendChild(test);
        }
    }
}

var seatsSelected = document.getElementById('seatsSelected');


function seatSelect() {
    var preName = event.srcElement.id
    var seatName = preName+", ";
    console.log("MAX: "+seatBuy);

        if (event.srcElement.className != 'seatSelect') {
            if (seatSelectedCount < seatBuy) {
                seatSelectedCount++;
                event.srcElement.setAttribute("class","seatSelect");
                var node = document.createElement("p");
                var textNode = document.createTextNode(seatName);
                node.appendChild(textNode);

                seatsSelected.appendChild(node);
                console.log("USED: "+seatSelectedCount)
            } else {
                console.log("Max tickets used.");
            }
        } else {
            event.srcElement.setAttribute("class","seatOn")
            seatSelectedCount--;
            for (var i = 0; i< document.getElementById('seatsSelected').childElementCount;i++) {
                if (seatsSelected.childNodes[i].innerHTML == seatName) {
                    seatsSelected.removeChild(seatsSelected.childNodes[i]);
                    break; 
                }
            }
        }
}


function seatHover() {
    if (event.srcElement.className != 'seatSelect') {
        event.srcElement.setAttribute("class","seatOn");
    }
}
 function seatHoverOff() {
    if (event.srcElement.className != 'seatSelect') {
        event.srcElement.setAttribute("class","seatOff");
    }
 }
 var a = document.getElementById('a');
 var b = document.getElementById('b');


var tabs = document.getElementById("tabs");   // Get the <ul> element with id="myList"
function openA2 () {
    tabs.removeChild(tabs.childNodes[2]);    
    var node = document.createElement("LI");
    var textnode = document.createTextNode("This is B");
    node.appendChild(textnode);
    tabs.appendChild(node); 
}
function openB2 () {
    tabs.removeChild(tabs.childNodes[2]);    
    var node = document.createElement("LI");
    var textnode = document.createTextNode("This is A");
    node.appendChild(textnode);
    tabs.appendChild(node); 
}

function openA() {
     b.style.visibility = 'hidden';
     a.style.visibility = 'visible';
   
}
function openB() {
    a.style.visibility = 'hidden';
    b.style.visibility = 'visible';

    
}




/*
function getName2() {
    var input = document.getElementById('trainerskill').value
    var trainerskill = input;
    console.log(trainerskill);
    skillName(trainerskill);

}
function getInfo(namePre) {
    var name = namePre.toLowerCase();
    var para = document.getElementById('trainerinfo');
    para.innerHTML = "";
    for (var i = 0; i < data['members'].length; i++) {
        var nameLow = data['members'][i]['name'].toLowerCase();
        if (nameLow == name) {
            for (attribute in data['members'][i]) {
                if (attribute == 'skills') {
                    for (var j = 0; j < data['members'][i]['skills'].length; j++) {
                        var skill = data['members'][i]['skills'][j];
                        para.innerHTML += "Skill" + (j + 1) + ": \t " + skill + "</br>"
                    }
                } else {
                    para.innerHTML += attribute + ": \t " + data['members'][i][attribute] + "</br>";

                }
            }
        }
    }
}

function skillName(skillPre) {
    if (skillPre!= '') {
    var skill = skillPre.toLowerCase();
    var para = document.getElementById('trainerinfo2');
    para.innerHTML = "";
    var recommend = [];
    var counter = 0;
    for (var i = 0; i < data['members'].length; i++) {
        for (var j = 0; j < data['members'][i]['skills'].length; j++) {
            var skillLow = data['members'][i]['skills'][j].toLowerCase();
            if (skillLow == skill) {
                para.innerHTML += data['members'][i]['secretIdentity']+" aka "+data['members'][i]['name'] + "</br>";
            } else if (skillLow.includes(skill)) {
                counter++;
                recommend[j] = skillLow;
            }
        }
    }
    if (counter>0) {
        for(var k = 0; k<recommend.length-1; k++) {
            var indexK = recommend.indexOf(recommend[k]);
            for(var z = 0 ; z<recommend.length-2; z++) {
                if (recommend.indexOf(recommend[z] != indexK)) {
                    recommend[z] == '';
                }
            para.innerHTML += "Did you mean: "+recommend[k]+ "?"+"</br>";
            }
        }
    }
}
}

//    -----------------   Forms
function validate() {
    var allPassed = true;
    for(var i = 0; i<keyArray.length; i++) {
        var value = document.getElementById(keyArray[i]).value;
        var result = regArray[i].test(value);
        var stringed = keyArray[i]+"in";
        var valuePara = document.getElementById(stringed);
        if (!result) {
            valuePara.style.color = "red";
            valuePara.innerHTML = 'Invalid ' +keyArray[i]+'.';
            allPassed = false;
        } else {
            valuePara.innerHTML = '';
        }
    }
    if (allPassed) {
        storeData();
        window.alert('Your information has been submitted.');
        var resetList = document.getElementsByClassName('reset');
        for (var i = 0; i < resetList.length; i++) {
            resetList[i].value = '';
        }   
    }
}
//      -------------------- Store data
function storeData() {
    var resetList = document.getElementsByClassName('reset');
    for (var i = 0; i < resetList.length; i++) {
        var key = resetList[i].id;
        var value = resetList[i].value;
        localStorage.setItem(key, value);
    }
}
function readData() {
    for (var i = 0; i < keyArray.length; i++) {
        var input = keyArray[i]+"in";
        var para = document.getElementById(input);
        var key = localStorage.getItem(keyArray[i]);
        para.innerHTML = key;
    }
}
*/
