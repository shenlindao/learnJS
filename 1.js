function getDegree() {
    const Celsius = Number.parseInt(prompt('Введите температуру в градусах по Цельсию'));
    Fahrenheit = (9 / 5) * ((Celsius * 100) / 100) + 32;
    if (Celsius) {
        alert(`Температура в градусах по Фаренгейту равна ${Fahrenheit}°`);
    } else {
        alert(`Вы не ввели значение!`);
    }
}
document.addEventListener('DOMContentLoaded', function () {
    getDegree();
});