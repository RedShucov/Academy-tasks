// 25.06.23
// Программа на JS 'Калькулятор', которая:
// Возвращает число документов за указанный год.

// Входные данные:
// Массив с документами разных годов - documents{Array}
// Год для проверки - auditYear{number}

// Выходные данные:
// Количество документов за год - dishСount{number}

// Сложность:
// Средняя.

/**
 * Функция, принимает на вход массив документов и возращает количесвто за переданный год.
 * @param {Array} documents - Массив документов.
 * @param {number} auditYear - Год проверки.
 * @returns Количесвто документов за год.
 */
const getDocumentsNumbers = (documents, auditYear) => {
  const filteredDocuments = documents.filter((year) => year.substr(4, 4) === String(auditYear));

  return filteredDocuments.length
};

const documentNumber = getDocumentsNumbers(["01112018", "20092017", "05102017", "12052018", "04072005", "02022018"], 2018);
