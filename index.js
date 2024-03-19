 let state= [
    // студенты могут поменять имя/возраст/количество объектов, _id должны быть целочисленные
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]
 let state2= [
     // студенты могут поменять имя/возраст/количество объектов, _id должны быть целочисленные
     {_id: 0, name: 'Кот', age: 3},
     {_id: 1, name: 'Александр', age: 66},
     {_id: 2, name: 'Коля', age: 16},
     {_id: 3, name: 'Виктор', age: 44},
     {_id: 4, name: 'Дмитрий', age: 40},
     {_id: 5, name: 'Ирина', age: 55},
 ]
 let state3= [
     // студенты могут поменять имя/возраст/количество объектов, _id должны быть целочисленные
     {_id: 0, name: 'Кот', age: 3},
     {_id: 1, name: 'Александр', age: 66},
     {_id: 2, name: 'Коля', age: 16},
     {_id: 3, name: 'Виктор', age: 44},
     {_id: 4, name: 'Дмитрий', age: 40},
     {_id: 5, name: 'Ирина', age: 55},
 ]
 console.log(state)
 let newState = state.sort((a,b)=>{
     if (a.name < b.name) return -1
     /*if (a.name > b.name) return 1
     else return 0*/
 })
 console.log(newState)
 let newState2 = state2.sort((a,b)=>{
     if (a.name > b.name) return -1
     /*if (a.name < b.name) return 1
     else return 0*/
 })
 console.log(newState2)
 let newState3 = state3.filter(u => u.age >= 18)
 console.log(newState3)