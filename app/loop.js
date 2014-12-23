function openRoom() {
  console.log("openRoom");
  token = document.getElementById("roomToken").value;
  var activity = new MozActivity({
    name: "room-call",
    data: {
      token: token,
      type: "loop/rToken"
    }
  });

  console.log("Activity inovked");

  activity.onsuccess = function() {
    var picture = this.result;
    console.log("Activity launched");
  };

  activity.onerror = function() {
    console.log("Activity error")
    console.log(this.error);
  };
}

function loadJSON(callback) {
  console.log("loadJson");
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open('GET', 'config.json', true);
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
      // .open will NOT return a value but simply returns undefined in async mode so use a callback
      callback(xobj.responseText);
    }
  }
  xobj.send(null);
}

function init(){
  document.getElementById("joinRoom").addEventListener("click", openRoom);
  console.log("listener added")
  loadJSON(function(response) {
    var token = JSON.parse(response).token;
    document.getElementById("roomToken").value = token;
    openRoom();
  });
};

document.addEventListener("DOMContentLoaded", init, false);
