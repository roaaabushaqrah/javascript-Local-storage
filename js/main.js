var myNodelist = document.getElementsByTagName("li");
var i;
for (i = 0; i < myNodelist.length; i++) {
    var txt = document.createElement("span");
    var txt = document.createTextNode("\u00D7");
    span.className = close;
    span.appendChild(txt);
    myNodelist[i].appendChild(span);

}
var close = document.getElementsByTClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";

    }

    var list = document.querySelector('ul');
    list.addEventListener('click', function(ev) {
        if (ev.target.tagName === "li") {
            ev.target.classList.toggle('checked');
        }
    }, false);

    function newElement() {
        var li = document.createElement("li");
        var inputValue = document.getElementsById("myInput").value;
        var y = document.createTextNode(inputValue);
        li.appendChild(y);
        if (inputValue === "") {
            alert("you must write something");

        } else {
            document.getElementsById("todo_list").appendChild(li);

        }
        document.getElementsById("myInput").value = "";

        var span = document.createElement("span");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        myNodelist[i].appendChild(span);
        for (i = 0; i < close.length; i++) {
            close[i].onclick = function() {
                var div = this.parentElement;
                div.style.display = "none";

            }
        }

    }




}