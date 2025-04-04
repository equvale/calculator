let currentInput = '0'; // Начальное значение дисплея

// Очистка дисплея
function clearDisplay() {
    currentInput = '0'; // Сбрасываем ввод
    updateDisplay();
}

// Добавление символов на дисплей
function appendToDisplay(value) {
    if (currentInput === '0') {
        currentInput = value; // Если на дисплее ноль, заменяем его
    } else {
        currentInput += value; // Иначе добавляем символ
    }
    updateDisplay();
}

// Обновление дисплея калькулятора
function updateDisplay() {
    document.getElementById('display').innerText = currentInput;
}

// Вычисление результата
function calculate() {
    try {
        currentInput = eval(currentInput).toString(); // Выполняем выражение
    } catch (e) {
        currentInput = 'Ошибка'; // Если ошибка, выводим 'Ошибка'
    }
    updateDisplay();
}