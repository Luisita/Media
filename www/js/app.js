// Wait for device API libraries to load
    //
    document.addEventListener("deviceready", onDeviceReady, false);

    // Record audio
    //
    function recordAudio() {
        var src = "myrecording.amr";
        var mediaRec = new Media(src, onSuccess, onError);

        // Record audio
        mediaRec.startRecord();

        // Stop recording after 10 sec
        var recTime = 0;
        var recInterval = setInterval(function() {
            recTime = recTime + 1;
            setAudioPosition(recTime + " sec");
            if (recTime >= 20) {
                clearInterval(recInterval);
                mediaRec.stopRecord();
            }
        }, 1000);
    }

    // device APIs are available
    //
    function onDeviceReady() {
        alert("Espera 5 segundos para que empieze a grabar audio");
        setTimeout(function(){recordAudio();},5000);
    }

    // onSuccess Callback
    //
    function onSuccess() {
        console.log("recordAudio():Audio Success");
    }

    // onError Callback
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

    // Set audio position
    //
    function setAudioPosition(position) {
        document.getElementById('audio_position').innerHTML = position;
    }

