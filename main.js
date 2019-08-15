function temperaTure(celcius) {
    this.celcius = celcius;
    this.getFahrenheit = function () {
        return (32 + (9 * celcius) / 5);
    }
    this.getKenvin = function () {
        return (273 + celcius);
    }
}

function changeTemperature() {

    let celcius = Math.floor(Math.random() * 1000);
    let temperature = new temperaTure(celcius);
    let fahrenheit = temperature.getFahrenheit();
    let kenvin = temperature.getKenvin();
    document.getElementById('C').innerHTML = celcius;
    document.getElementById('F').innerHTML = fahrenheit;
    document.getElementById('K').innerHTML = kenvin;

}

changeTemperature();