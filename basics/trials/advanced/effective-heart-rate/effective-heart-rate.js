// 30.06.23
// Программа на JS 'Эффективная ЧСС', которая:
// Вычисляет ЧСС для тренировок.

// Условие:
// Формула: ЧСС во время тренировки = (максимальная ЧСС — ЧСС в покое) * интенсивность + ЧСС в покое.
// Максимальная ЧСС: 220 – возраст.

// Входные данные:
// Возраст - age{number}
// ЧСС в покое - pulseAtRest{number}
// Интенсивность записана в процентах - intensity{number}

// Выходные данные:
// ЧСС для тренировки - pulseAtWorkout{number}

// Сложность:
// Продвинутая.

const age = 5;
const pulseAtRest = 90;
const intensity = 75;

const getPulseAtWorkout = (age, restPulse, intensity) => {
  const maximumPulse = 220 - age;

  const pulseAtWorkout = (maximumPulse - restPulse) * (intensity / 100) + restPulse;

  return Math.round(pulseAtWorkout);
};
