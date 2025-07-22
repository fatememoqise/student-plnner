let beatCount = 0;
let startTime = null;

function addBeat() {
  const now = new Date().getTime();

  if (!startTime) {
    startTime = now;
  }

  beatCount++;
  document.getElementById("beatCount").textContent = beatCount;

  const elapsedSeconds = (now - startTime) / 1000;

  if (elapsedSeconds >= 15) {
    const bpm = Math.round((beatCount * 60) / elapsedSeconds);
    document.getElementById("bpmResult").textContent =
      "میزان ضربان قلب: " + bpm + " ضربان در دقیقه (BPM)";
  }
}

function resetBeats() {
  beatCount = 0;
  startTime = null;
  document.getElementById("beatCount").textContent = "۰";
  document.getElementById("bpmResult").textContent = "";
}