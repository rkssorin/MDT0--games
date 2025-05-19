import Alpine from '@alpinejs/csp';

Alpine.data('webcamImageUpload', () => ({
    isAsk: true,
    isCamera: false,
    isCaptureMode: true,
    isManual: false, 
    facingMode: 'user',

    init() {
        this.facingMode = this.getCameraFacingMode(this.$refs.webcamImageUpload);
        this.isAsk = this.hasWebcamSupport();
        this.isManual = !this.hasWebcamSupport();
    },

    isPreview() {
        return !this.isCaptureMode;
    }, 

    isCameraCapture() {
        return this.isCaptureMode;
    },

    getCameraFacingMode(el) {
        return (el && el.classList && el.classList.contains('bsi-webcam-back')) ? 'environment' : 'user';
    },

    visibility(isAsk, isCamera, isManual) {
        this.isAsk = isAsk;
        this.isCamera = isCamera;
        this.isManual = isManual;
    },

    hasWebcamSupport() {
        return 'mediaDevices' in navigator;
    },

    showUploadDialog() {
        this.visibility(false, false, true);
    },

    accessCamera() {
        this.isCaptureMode = true;

        navigator.mediaDevices
            .getUserMedia({
                audio: false,
                video: {
                    facingMode: this.facingMode
                }
            })
            .then((stream) => {
                this.$refs.video.srcObject = stream;
                this.visibility(false, true, false);
            })
            .catch(() => {
                this.visibility(false, false, true);
            });
    },

    capturePicture() {
        this.$refs.canvas.width = this.$refs.video.offsetWidth;
        this.$refs.canvas.height = this.$refs.video.offsetHeight;
        this.$refs.canvas.getContext('2d').drawImage(this.$refs.video, 0, 0, this.$refs.canvas.width, this.$refs.canvas.height);
        this.stopVideo();
    }, 

    stopVideo() {
        this.isCaptureMode = false;
        this.$refs.video.srcObject.getTracks().forEach(track => track.stop());
    },

    undoPicture() {
        this.$refs.canvas.getContext('2d').clearRect(0, 0, 400, 800);
        this.accessCamera();
    }, 

    uploadImageCapture() {
        this.$refs.canvas.toBlob((blob) => {
            this.sendBlobToServerAndRedirect(blob);
        }, "image/jpeg", 0.95 /* JPEG at 95% quality to reduce file size */);
    },

    // adding the webcam image to the input is not possible for security reasons. 
    // only a direct XHR is possible.
    sendBlobToServerAndRedirect(blob) {
        let xhr = new XMLHttpRequest();
        let data = new FormData();

        data.append(this.$refs.fileInput.name, blob, 'Webcam-Selfie.jpg');

        xhr.open('POST', this.$refs.form.action, true);
        xhr.onload = () => {
            window.location = xhr.responseURL;
        };
        xhr.send(data);
    }
}))
