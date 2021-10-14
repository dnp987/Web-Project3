var btn = document.getElementsByClassName("btn")[0];
btn.addEventListener("click", btn_click);
var reset_btn = document.getElementsByClassName("reset_btn")[0];
reset_btn.addEventListener("click", reset_btn_click);

function btn_click() {
    console.log("button text " + btn.innerHTML);
    var num_content = document.getElementsByClassName("numbers")[0].value;
    var text_content = document.getElementsByClassName("text")[0].value;
    
    console.log(num_content + " " + text_content);
    alert("You entered:" + text_content + " to be displayed " + num_content + " times.");
    document.getElementsByClassName("numbers")[0].value = "9876";
    document.getElementsByClassName("text")[0].value = "You got it";
    document.getElementsByClassName("heading2")[0].innerHTML = "Here you go:";
    btn.innerHTML = "Clicked"; /* change the name of the button after its clicked */
    
    var num = parseInt(num_content);
    var row_test = document.getElementsByClassName('row_test')[0];

    for (var i=1; i <= num; i++) {
        var row = document.createElement("div");
        row.classList.add('p_test');
        row.innerHTML = i + " : " + text_content;
        row_test.append(row);
    }

    var p_text = document.getElementsByClassName("p_test");
    console.log(p_text);
    for (var i=0; i < p_text.length; i++) {
        console.log(p_text[i].innerHTML);
    }
}

function reset_btn_click() {
    /* Reset everything */
    window.location.reload(true);
}