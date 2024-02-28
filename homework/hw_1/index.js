const object1 = {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3',
    key4: 'value4',
    key5: 'value5'
  };

const object2 = {
    key1: 'new_value3',
    key2: 'new_value4',
    key3: 'new_value5',
    key4: 'value6',
    key5: 'value7'
  };

const newObject = (obj1, obj2) => {return{...obj1, ...obj2}};
const newObject2 = (obj1, obj2) => Object.assign(obj1, obj2);

console.log(newObject(object1,object2));
console.log(newObject2(object1,object2));

console.log('----------------------------------');

//Написать функцию, которая сравнит 2 объекта и вернет true, если они идентичны, иначе false. Объекты считаются идентичными, если они содержат одинаковое количество свойств, названия и значения всех свойств совпадают.

const objectComparison = (obj1, obj2) => {
    const key1 = Object.keys(obj1);
    const key2 = Object.keys(obj2);

    const value1 = Object.values(obj1);
    const value2 = Object.values(obj2);

    for (let i = 0; i < value1.length; i++) {
        if(key1.length !== key2.length || key1[i] !== key2[i] || value1[i] !== value2[i]) {
            return false;
        }
    }
    

    return true;

}

const ob1 = {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3',
    key4: 'value4',
    key5: 'value5'
  };

const ob2 = {
    key3: 'new_value3',
    key4: 'new_value4',
    key5: 'new_value5',
    key6: 'value6',
    key7: 'value7'
  };

const objectComparison2 = (obj1, obj2) => JSON.stringify(obj1) === JSON.stringify(obj2);


console.log(objectComparison(ob1, ob2));
console.log(objectComparison2(ob1, ob2));
