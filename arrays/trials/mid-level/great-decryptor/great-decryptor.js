// 24.06.23
// Программа на JS 'Великий дешифровщик', которая:
// Расшифровывает закодированное сообщение.

// Входные данные:
// Алфавит - symbols{Array}
// Зашифрованное сообщение - encodedSymbols{Array}

// Выходные данные:
// Раскодированное сообщение - decodedMessage{Array}

// Сложность:
// Средняя.

const symbols = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я', 'а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я', ' ', '.', ',', '—', '!'];

const encodedSymbols = [8, 28, 36, 52, 56, 40, 23, 31, 56, 39, 38, 28, 48, 52, 58, 56, 38, 27, 32, 37, 56, 40, 23, 31, 56, 39, 38, 41, 39, 32, 57];

const shift = 10;

const getdecodedMessage = (symbols, encodedSymbols, shift) => {
  let decoded = '';

  for (let i = 0; i < encodedSymbols.length; i++) {
    let encodedSymbol = encodedSymbols[i] + shift;

    if (encodedSymbol > symbols.length) {
      encodedSymbol -= symbols.length;
    }

    decoded += symbols[encodedSymbol];
  }

  return decoded;
};

const decodedMessage = getdecodedMessage(symbols, encodedSymbols, shift);

console.log(decodedMessage);
