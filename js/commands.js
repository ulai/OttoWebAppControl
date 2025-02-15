function Joystick(x,y) {
  sendData("J"+x+","+y+"\n");
}

function Move(i) { sendData(`M ${i}\r`); }

function Skill(i) { sendData(`M ${i}\r`); }

function Sound(i) { sendData(`K ${i}\r`); }

function Gesture(i) { sendData(`H ${i}\r`); }

function Stop(delay) { setTimeout(() => sendData('S\r'), delay); }

function Happy() {
  sendData("happy\n");
}
function Victory() {
  sendData("victory\n");
}
function Sad() {
  sendData("sad\n");
}
function Sleeping() {
  sendData("sleeping\n");
}
function Confused() {
  sendData("confused\n");
}
function Fail() {
  sendData("fail\n");
}
function Fart() {
  sendData("fart\n");
}
function Wrong() {
  sendData("wrong\n");
}
function Ultrasound() {
  sendData("ultrasound\n");
}
function Infrared() {
  sendData("infrared\n");
}
function Avoidance() {
  sendData("avoidance " + document.getElementById("speed--slider").value + "\n");
}
function UseForce() {
  sendData("force " + document.getElementById("speed--slider").value + "\n");
}
function LineFollower() {
  sendData("line_follower\n");
}
function bipedCalibration() {
  sendData("C"+document.getElementById("llvalue").innerText+"a"+document.getElementById("rlvalue").innerText+"b"+document.getElementById("lfvalue").innerText+"c"+document.getElementById("rfvalue").innerText+"d"+"\n");
}
function WalkTest() {
  sendData("walk_test\n");
}
function SaveCalibration() {
  sendData("save_calibration\n");
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Calibration saved',
    showConfirmButton: false,
    timer: 1500
  })
}
function newSettings(robot) {
  if (robot == 'Otto Starter') {
    ts_ultrasound = document.getElementById("ts_ultrasound").value;
    config = ts_ultrasound+"\n";
  }
  else if (robot == 'Otto Wheels') {
    rf = document.getElementById("rf").value;
    rb = document.getElementById("rb").value;
    lf = document.getElementById("lf").value;
    lb = document.getElementById("lb").value;
    ts_sr = document.getElementById("ts_sr").value;
    ts_sl = document.getElementById("ts_sl").value;
    ts_ultrasound = document.getElementById("ts_ultrasound").value;
    config = "S="+rf+"-"+rb+"-"+lf+"-"+lb+"-"+ts_sr+"-"+ts_sl+"-"+ts_ultrasound+"\n";
  }
  
  console.log(config);
  sendData(config);
  
}