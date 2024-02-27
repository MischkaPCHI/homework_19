const object1 = {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3',
    key4: 'value4',
    key5: 'value5'
  };

const object2 = {
    key3: 'new_value3',
    key4: 'new_value4',
    key5: 'new_value5',
    key6: 'value6',
    key7: 'value7'
  };

const newObject = (obj1, obj2) => {return{...obj1, ...obj2}};

console.log(newObject(object1,object2));

console.log('----------------------------------');

//Написать функцию, которая сравнит 2 объекта и вернет true, если они идентичны, иначе false. Объекты считаются идентичными, если они содержат одинаковое количество свойств, названия и значения всех свойств совпадают.

const objectComparison = (obj1, obj2) => {
    const key1 = Object.keys(obj1);
    const key2 = Object.keys(obj2);

    if(key1.length !== key2.length){
        return false;
    }

    for (let key of key1) {
        if(!key2.includes(key) || !objectComparison(obj1[key], obj2[key])){
            return false;
        }
    }
    

    return true;

}


console.log(objectComparison(object1, object2));;
