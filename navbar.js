var navData;
var request = new XMLHttpRequest();

loadData();

function loadData() {
    request.open("GET", "navbar.json");
    request.onload = loadComplete;
    request.send();
}

function loadComplete(evt) {
    navData = JSON.parse(request.responseText);
    navBar(navData);
}

function navBar(json) {
    var nav =  document.getElementById("navbar");

    var content = '';
    for (var i = 0; i < navData.nav.length; i++) {
        content += '<li class="nav-item"><a href="' + navData.nav[i][1] + '">' + navData.nav[i][0] + '</a></li>'
    }

    if(document.body.contains(nav)) {
        nav.innerHTML = content;
    }
}

function projDetails(json) {
    
}
