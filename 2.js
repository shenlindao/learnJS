function greeting() {
    const Name = prompt('Введите ваше имя');
    if (Name.length > 0) {
        alert(`Привет, ${Name}!`);
    } else if (Name.length == 0) {
        alert(`Вы не ввели ваше имя!`);
    }
}
document.addEventListener('DOMContentLoaded', function () {
    greeting();
});