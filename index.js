var arry = []

function todo(){
    var inp = document.getElementById("screen").value
    if (inp == ""){
        alert("Insert")
    }else
        arry.push(inp)
        generate()
}

function dlt(todoIndex) {
    return function () {
        arry.splice(todoIndex, 1)
        generate()
    }
}

function mark(todoIndex) {
    return function () {
        var lii = document.getElementById("lii")
        if (!mark) {
            arry.indexOf(todoIndex)
            //lii.style.textDecoration = "line-through"
            // generate()
        }else if (!!mark) {
            console.log (lii.style.textDecoration = "line-through")
            // generate()
        }
    }
}

function edit(i) {
    return function() {
        document.getElementById("screen").value = arry[i]
        arry.splice(i,1)
        add()
    }
}   

function add() {
    var btn = document.getElementById("btn")
    btn.style.backgroundImage = "url(./images/edit.png)";
    btn.style.backgroundPosition = "center";
    btn.style.backgroundSize = "cover";
}

function generate() {
    var ol = document.getElementById("list")
    ol.innerText = ""
    for (var i = 0; i < arry.length; i++) {
        var li = document.createElement("li")
        li.id = "lii"
        var li2 = document.createTextNode(arry[i])
        li.appendChild(li2)
        ol.appendChild(li)

    //Create Button ()
        var btnn1 = document.createElement("button")
        btnn1.className = "btnn1"
        btnn1.onclick = mark(i)
        li.appendChild(btnn1)
        var btnn2 = document.createElement("button")
        btnn2.className = "btnn2"
        btnn2.onclick = edit(i)
        li.appendChild(btnn2)
        var btnn = document.createElement("button")
        btnn.className = "btnn"
        btnn.onclick = dlt(i)
        li.appendChild(btnn)
        
    }

   
    
    document.getElementById("screen").value=""
    document.getElementById("btn").style.backgroundImage =  "url(./images/plus.png)";
}