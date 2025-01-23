class ToyotoCar {
    start() {
        console.log("start")
    }
    stop() {
        console.log("stop")
    }
    settingbrand(brand){
        console.log(this.brand=brand);
    }
}
let FortunerCAr = new ToyotoCar();
FortunerCAr.start()
FortunerCAr.settingbrand("fortuner")