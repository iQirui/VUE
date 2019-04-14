export default class StringTool {
    static oDiv: any;
    static initDiv() {
        if (!this.oDiv) {
            this.oDiv = document.createElement("div");
            this.oDiv.style.position = "absolute";
            this.oDiv.style.visibility = "hidden";
            this.oDiv.style.whiteSpace = "nowrap";
            this.oDiv.style.zIndex = "-100";
            document.body.appendChild(this.oDiv);
        }
    }
    static visualWidth(str, size = "12px") {
        debugger
        this.initDiv();
        this.oDiv.style.fontSize = size;
        this.oDiv.innerText = str;
        return this.oDiv.clientWidth;
    }

}