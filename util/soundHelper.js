import { useAudioPlayer } from 'expo-audio';

async function playTone(time) {
  let playTime = 0;

  const interval = setInterval(async () => {
    playTime++;

    const player = useAudioPlayer(audioSource);
    const ring = require('../assets/audio/tone.mp3')
    const tone = useAudioPlayer(ring);

    tone.play();

    if (playTime === time) {
      clearInterval(interval);
    }
  }, 30000);
}



export function callTone(day, h, m, s, amPM) {
  if (day != 4 && day != 10) {
    //if day is not 4 or 10
    // console.log("lay and tone ma nyi"+day);
    if (amPM == "AM") {
      if (h == "3" && m == "59" && s == "20") {
        playTone(7);
      } else if (h == "4" && m == "19" && s == "20") {
        playTone(5);
      } else if (h == "6" && m == "31" && s == "20") {
        playTone(1);
      } else if (h == "7" && m == "49" && s == "20") {
        playTone(5);
      } else if (h == "9" && m == "4" && s == "20") {
        playTone(3);
      } else if (h == "10" && m == "59" && s == "20") {
        playTone(1);
      } else if (h == "0" && m == "0" && s == "0") {
        var val = document.getElementById("dayChange").value;
        val = parseInt(val) + 1;

        document.getElementById("dayChange").value = val;
        document.getElementById("day").innerHTML = val;
      }
    } else {
      //if PM

      if (h == "12" && m == "49" && s == "20") {
        playTone(5);
      } else if (h == "2" && m == "14" && s == "20") {
        playTone(1);
      } else if (h == "2" && m == "19" && s == "20") {
        playTone(3);
      } else if (h == "3" && m == "34" && s == "20") {
        playTone(3);
      } else if (h == "4" && m == "59" && s == "20") {
        playTone(1);
      } else if (h == "5" && m == "49" && s == "20") {
        playTone(5);
      } else if (h == "7" && m == "4" && s == "20") {
        playTone(3);
      }
    }
  } else if (day == 4) {
    if (amPM == "AM") {
      if (h == "3" && m == "59" && s == "20") {
        playTone(7);
      } else if (h == "4" && m == "19" && s == "20") {
        playTone(5);
      } else if (h == "6" && m == "29" && s == "20") {
        playTone(1);
      } else if (h == "7" && m == "49" && s == "20") {
        playTone(5);
      } else if (h == "9" && m == "4" && s == "20") {
        playTone(3);
      } else if (h == "10" && m == "59" && s == "20") {
        playTone(1);
      } else if (h == "0" && m == "0" && s == "0") {
        var val = document.getElementById("dayChange").value;
        val = parseInt(val) + 1;
        document.getElementById("dayChange").value = val;
        document.getElementById("day").innerHTML = val;
      }
    } else {
      if (h == "12" && m == "49" && s == "20") {
        playTone(5);
      } else if (h == "1" && m == "44" && s == "20") {
        playTone(1);
      } else if (h == "1" && m == "49" && s == "20") {
        playTone(3);
      } else if (h == "4" && m == "59" && s == "20") {
        playTone(1);
      } else if (h == "5" && m == "49" && s == "20") {
        playTone(5);
      } else if (h == "7" && m == "4" && s == "20") {
        playTone(3);
      }
    }
  } else if (day == 10) {
    if (amPM == "AM") {
      if (h == "3" && m == "59" && s == "20") {
        playTone(7);
      } else if (h == "4" && m == "19" && s == "20") {
        playTone(5);
      } else if (h == "6" && m == "29" && s == "20") {
        playTone(1);
      } else if (h == "7" && m == "49" && s == "20") {
        playTone(5);
      } else if (h == "9" && m == "4" && s == "20") {
        playTone(3);
      } else if (h == "10" && m == "59" && s == "20") {
        playTone(1);
      } else if (h == "0" && m == "0" && s == "0") {
        val = 1;
        document.getElementById("dayChange").value = val;
        document.getElementById("day").innerHTML = val;
      }
    }else{

      if (h == "2" && m == "19" && s == "20") {
        playTone(3);
      }if (h == "5" && m == "49" && s == "20") {
        playTone(5);
      }

    }

  } else if (day == 0) {
    if (h == "0" && m == "0" && s == "0") {
      var val = document.getElementById("dayChange").value;
      val = parseInt(val) + 1;
      document.getElementById("dayChange").value = val;
      document.getElementById("day").innerHTML = val;
    }
  }
} 