// Desafio 1
function compareTrue(param1, param2) {
  // const girafa = true;
  // const elefante = true;
  // const macaco = false;

  if (param1 === true && param2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, altura) {
  let areaTriangulo = (base * altura) / 2;
  return areaTriangulo;
}

// Desafio 3
function splitSentence(string) {
  let stringSeparate = string.split(' ');
  return stringSeparate;
}

// Desafio 4
function concatName(strings) {
  let firtsName = strings[strings.length - 1];
  let lastName = strings[0];
  return `${firtsName}, ${lastName}`;
}

// Desafio 5
function footballPoints(vitorias, empates) {
  let pontosVitorias = vitorias * 3;
  let empatesPontos = empates * 1;
  return pontosVitorias + empatesPontos;
}

// Desafio 6
function highestCount(numbers) {
  let counter = 0;
  let isMaior = numbers[0];
  for (let index = 1; index < numbers.length; index += 1) {
    if (numbers[index] >= isMaior) {
      isMaior = numbers[index];
    }
  }
  for (let indice of numbers) {
    if (indice === isMaior) {
      counter += 1;
    }
  }
  return counter;
}

// Desafio 7
function catAndMouse() {

}

// Desafio 8
function fizzBuzz(values) {
  let numbers = [];
  for (let index = 0; index < values.length; index += 1) {
    if (values[index] % 3 === 0 && values[index] % 5 !== 0) {
      numbers[index] = 'fizz';
    } else if (values[index] % 5 === 0 && values[index] % 3 !== 0) {
      numbers[index] = 'buzz';
    } else if (values[index] % 3 === 0 && values[index] % 5 === 0) {
      numbers[index] = 'fizzBuzz';
    } else {
      numbers[index] = 'bug!';
    }
  }
  return numbers;
}

// Desafio 9
function encode(frase) {
  let trocarLetra = frase
    .replace(/a/gi, 1)
    .replace(/e/gi, 2)
    .replace(/i/gi, 3)
    .replace(/o/gi, 4)
    .replace(/u/gi, 5);
  return trocarLetra;
}
function decode(frase) {
  let trocarNumero = frase
    .replace(/1/gi, 'a')
    .replace(/2/gi, 'e')
    .replace(/3/gi, 'i')
    .replace(/4/gi, 'o')
    .replace(/5/gi, 'u');
  return trocarNumero;
}

// Desafio 10
function techList(techs, nome) {
  if (techs.length === 0) {
    return 'Vazio!';
  }
  let lists = [];
  let techsSort = techs.sort();
  for (let index = 0; index < techs.length; index += 1) {
    lists.push({
      tech: techsSort[index],
      name: nome,
    });
  }
  return lists;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
