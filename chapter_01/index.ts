
// Duck typing

var obj1 = { id: 1, print() { console.log(this.id) } }
var obj2 = { id: 2, print() { },  select() { } }


enum DoorState {
  Open, // 0
  Close // 1
}

// specified number
/*

enum DoorState {
  Open = 66,
  Close = 99,
  Unspecified = 256
}

enum DoorState {
  Open = 'Open'
  Close = 'Close'
}

 */

// variable state if 1 = open , 2 close
function checkDoorState(state: DoorState) {
  console.log(`enum value is ${state}`)
  switch (state) 
    {
        
        case DoorState.Open: 
          console.log('Door is open')
          break
        case DoorState.Close:
          console.log('Door is close')
          break

    }
}

// checkDoorState(1)




let array = [ "123", "456", "789" ]
delete array[0]

// for(let i = 0; i < array.length; i++){
//  console.log(array[i])
// }

// for(let i = 0; i < array.length; i++)
//  checkAndPrintElement(array[i])

function checkAndPrintElement(element: string | undefined)
  {
    if(element === undefined)
      console.log('Invalid array element')
    else 
      console.log(element)
  }


// conditional

const value: number = 19
const message: string = value >  10 ? "value is larger than 10" : "value is lower than 10"
// console.log(message)


// optional chaining
//
//

var ObjectA = {
  nestedProperty: {
    name: 'nestedPropertyName'
  }
}


function printNestedObject(obj: any) 
  {
    console.log('obj.nestedProperty.name = ' + obj.nestedProperty.name)
  }

function printNestedOptionalChainObject(obj: any) 
  {
    if(obj?.nestedProperty?.name) 
      console.log(`Name: ${ obj.nestedProperty.name }`)
    else
      console.log('Name not found')
  }

// printNestedOptionalChainObject("asd")


// Nullish coalescing


function nullCheck (a: number | undefined | null) 
  {
    console.log(`a: ${a ?? `undefined or null`}`)
  }

// nullCheck(1)
// nullCheck(undefined)
// nullCheck(null)
  
// wrong  error
function testNullOperands(a: number, b: number | null | undefined)
  {
    // let addResult = a + b
  }
// try this
function testNullOperandsFixed(a: number, b: number | null | undefined)
  {
    let addResult = a + ( b ?? 0 )  
    console.log(addResult)
  }
  
// testNullOperandsFixed(1,2)



// definite asignment
// means use variable before initialize 
  // error
  // let test_definite = val_definite
  // let val_definite = 'testing'

var globalString!: string
setGlobalString('This is a string')
// console.log(`global string ${globalString}`)

function setGlobalString(value: string)
  {
    globalString = value
  }


// Object
let structuredObject = {
  name: 'myObject',
  properties: {
    id: 1,
    type: 'AnObject'
  }
}

function printObject(a: object) 
  {
    console.log(`a: ${ JSON.stringify(a) }`)
  }

//printObject('asd')




// Unknown types


let a: any = 'test'
let aNumber: number = 2
aNumber = a

// console.log(aNumber)
// console.log(typeof aNumber)
// typeof aNumber would be string not number and the value is test
// the :number types wll gone
//
//

// how unknown type behave
//
let u: unknown = 'an unknown'
u = 1

let aNumber2: number

// error
// aNumber2 = u 

aNumber2 = <number>u

// never and switch


enum AnEnum {
  FIRST,
  SECOND 
}

function getEnumValue(enumValue: AnEnum): string {
  switch (enumValue)
    {
      case AnEnum.FIRST: return 'First Case'
      case AnEnum.SECOND: return 'Second case'
    }
}

// getEnumValue(0)


// Object Spread

let firstObj: object = { id: 1, name: 'john' }
let secondObj: object = { ...firstObj }

// console.log( `Second Object: ${ JSON.stringify(secondObj )}` )

// combining object

let nameObj: object = { name: 'patrick' }
let idObjt: object = { id: 1 }
let obj3 = { ...nameObj, ...idObjt }

// console.log(obj3)

// predesence

let objPred1: object = { id: 1, name: 'obj' }
let objPred2: object = { id: 1001, desc: 'combine and replace' }
let objPred3: object = { ...objPred1, ...objPred2 }

// same as array


// Tuples
// Optional Tuple

let tupleOption: [string, boolean?]
    tupleOption = ['hello', true] // tupleOption[0] hello [1] true
    tupleOption = ['hello'] // tupleOption[1] undefined



// Tuple spread syntax
    let tupleRes: [number, ...string[] ]
    tupleRes = [1,'2','2']


// object destructure
interface IComplexObject {
  aNum: number,
  bStr: string,
  cBool: boolean
} 
let complexObject: IComplexObject = {
  aNum: 1,
  bStr: 'john',
  cBool: true
}

let { aNum, bStr, cBool } = complexObject

// console.log(aNum,bStr,cBool)

let { aNum: numb, bStr: str, cBool: bool } = complexObject
// console.log(numb,str,bool, ' name change')


// optional Parameters

function concatValues(a: string, b?: string)
  {
    console.log(`a + b = ${ a + ' ' + b }`)
  }

/*
concatValues('john', 'batino') // a + b = john batino
concatValues('john') // a + b = john undefined
*/


// Default Parameters
  
function concatWithDefault(a: string, b: string = 'default')
  {
    console.log(`a + b = ${ a + b }`)
  }

// concatWithDefault('john') // johndefault


// Rest Parameters
  
function testArguments(...arg: string[] | number[]) 
  {
    for (let i in arg)
      console.log(`${arg[i]}`)
  }
// testArguments(1,2,3,4,5) //  1 2 3 4 5 // i is count for arg
// testArguments('10','string') // 10 string



// function callback


var myCallback = function(text: any) 
  {
    console.log(`My Callback ${ text }`)
  }

                                        // function myCallback
function witchCallbackArg(message: any, callbackFN: any)
  {
    console.log('withCallback called meesage ' + message)
    callbackFN(message + ' from with CallbackFN')
    // callbackFn Arguments = 'Initial Text from with CallbackFN'
  }

// witchCallbackArg('Initial Text', myCallback)

// proper way to do it
  
var myCallbackParams = function(text: string): void 
  {
    console.log(`My Callback ${ text }`)
  }

function withCallbackArgParams(
    message: string,
    callbackFN: ( text: string ) => void
  )  
  {
    console.log(`Run in withCallbackArgParams ${ message }`)
    callbackFN(`${message} from withCallbackParams`)
  }

// withCallbackArgParams('inital text' , myCallbackParams)

// args function types
// callbacnFN: () => void



// literals

type AllowedStringValues = 'one' | 'two' | 'three'
type AllowedNumberValues = 1 | 2 | 3


function withLiterealArg (input: AllowedStringValues | AllowedNumberValues) 
  {
    console.log(`Called ${input}`)
  }

withLiterealArg('four
