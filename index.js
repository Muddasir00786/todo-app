var arry = []
function todo(){
    var inp = document.getElementById("screen").value
    var ol = document.getElementById("list")
    arry.push(inp)
    document.getElementById("list").innerText = ""
    for (var i = 0; i < arry.length; i++) {
        var li = document.createElement("li")
        li.className = "lii"
        var li2 = document.createTextNode(arry[i])
        li.appendChild(li2)
        ol.appendChild(li)
        var btnn1 = document.createElement("button")
        btnn1.className = "btnn1"
        li.appendChild(btnn1)
        var btnn = document.createElement("button")
        btnn.className = "btnn"
        li.appendChild(btnn)
    }
    document.getElementById("screen").value=""
}

btnn.onclick = function btnn() {
    for (var i = 0; i < arry.indexOf; i++) {
        console.log(arry.splice([i], [i]+1))
    }
}