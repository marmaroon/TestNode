// слияние массивов с одновременной сортировкой
// на вход подаются уже отсортированные левая и правая части 
function merge(left, right) {
    // сюда будем складывать результат
    let arr = []
    // пока в каждой части есть хотя бы один элемент — выполняем цикл
    while (left.length && right.length) {
        // смотрим на наименьший элемент из тех, что стоят в начале обоих массивов
        if (left[0] < right[0]) {
            // если слева был элемент меньше —
            // забираем его оттуда и отправляем в массив с результатом
            arr.push(left.shift())  
        } else {
            // в противном случае забираем элемент из правой части
            arr.push(right.shift()) 
        }
    }
    // выводим результат слияния отсортированных массивов
    console.log('Результат: ' + arr);

    // возвращаем отсортированный массив и добавляем к нему в конец отсортированный остаток от какой-либо части, если её так и не обработали в цикле
    return [ ...arr, ...left, ...right ]
}

// делим массивы пополам до тех пор, пока в них не останется элементов
function mergeSort(array) {
  // находим середину 
  const half = array.length / 2
  
  // если в нашем массиве и так меньше двух элементов — возвращаем его
  if(array.length < 2){
    return array 
  }
  
  // делим массив на две части и левую отправляем в новый массив
  const left = array.splice(0, half)
  // выводим промежуточный результат
  console.log('Слева:' + left);
  console.log('Справа:' + array);
  // запускаем рекурсию и отдаём ей правую и левую части массива
  return merge(mergeSort(left),mergeSort(array))
}

// исходный массив
const array = [3, 5, 1, 6, 9, 8, 2];
console.log(mergeSort(array));