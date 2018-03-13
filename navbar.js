var jsonData;
var request = new XMLHttpRequest();

loadData();

function loadData() {
    request.open("GET", "navbar.json");
    request.onload = loadComplete;
    request.send();
}

function loadComplete(evt) {
    jsonData = JSON.parse(request.responseText);
    navBar(jsonData);
    projDetails(jsonData);
}

function navBar(json) {
    var nav =  document.getElementById("navbar");

    var content = '';
    for (var i = 0; i < jsonData.nav.length; i++) {
        content += '<li class="nav-item"><a href="' + jsonData.nav[i][1] + '">' + jsonData.nav[i][0] + '</a></li>'
    }

    if(document.body.contains(nav)) {
        nav.innerHTML = content;
    }
}

function projDetails(json) {
    var project = document.getElementById("projects");

    var content = '';

    for(var i = 0; i < jsonData.projects.length; i++) {
        content += '<div class="project">';
        content += '<div class="picture"><img src="' + jsonData.projects[i][0] + '"></div>';
        content += '<h2 class="picture-title">' + jsonData.projects[i][1] + '</h2>';
        content += '<div class="picture-info">' + jsonData.projects[i][2] + '</div>';
        content += '</div>';
    }

    for(var i = 0; i < jsonData.projectsVideos.length; i++) {
        content += '<div class="project">';
        content += '<div class="video"><video controls><source src="' + jsonData.projectsVideos[i][0] + '" type="video/mp4"></video></div>';
        content += '<h2 class="video-titles">' + jsonData.projectsVideos[i][1] + '</h2>';
        content += '<div class="video-info">' + jsonData.projectsVideos[i][2] + '</div>';
        content += '</div>';
    }

    if(document.body.contains(projects)) {
        project.innerHTML = content;
    }
}
