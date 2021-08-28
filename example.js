function Popup(title, text, color) {
document.write( '<div id="popupbox" style="background-color: grey; border: 1px solid green; width: 200px; height: 150px;  margin:0 auto;   text-align: center;">' );
document.write( '<p id="popuptitle">hi</p>' );
document.write( '<hr>' );
document.write( '<p id="popuptext">Hello World</p>' );
document.write( '<button onclick="el = document.getElementById("popupbox"); el.remove()\">Close</button>\n' );
document.write( '</div>' );
popuptitle = document.getElementById("popuptitle");
popuptext = document.getElementById("popuptext");
box = document.getElementById("popupbox");

popuptitle.innerHTML = title;
popuptext.innerHTML = text;
popupbox.style.backgroundColor = color;
}

Popup("Yay!", "It Works", "grey")
