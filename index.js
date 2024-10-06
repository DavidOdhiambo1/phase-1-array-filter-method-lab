// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(array, name){
    return array.filter(element => element.toLowerCase() === name.toLowerCase())
}

function fuzzyMatch(array, name){
    return array.filter(element => element.slice(0,2)===name.slice(0,2) )
}

function matchName(array, reqName){
    return array.filter(property => property.name === reqName)
}