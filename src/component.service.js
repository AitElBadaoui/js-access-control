export class ComponentService {
    constructor() {
        this.successBox = document.getElementById("success-box");
        this.errorBox = document.getElementById("error-box");
        this.info = document.getElementById("info");
        this.user = document.getElementById("user");
        this.successBox.hidden = true;
        this.errorBox.hidden = true;
    }
    hideInfo(){
        this.info.hidden = true;
    }
    showSuccess(){
        this.successBox.hidden = false;
        this.errorBox.hidden = true;
    }
    setUser(str){
        this.user.innerText = str;
    }
    showError(){
        this.successBox.hidden = true;
        this.errorBox.hidden = false;
    }
}