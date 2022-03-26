

// Generic


function printGeneric<T>(value: T) {
  console.log(`typeof T is: ${ typeof value }`)
  console.log(`value T is: ${ value }`)
}

printGeneric(1)
printGeneric("test")
printGeneric(true)
printGeneric(()=> {})
printGeneric({ id: 1 })

printGeneric<string>('hello')
// printGeneric<string>(1) // error


// multiple types

function multipleGeneric<A,B>(first: A, second: B) 
  {

  }


class Concatenator<T extends Array<string> | Array<number>> {
  public concatenateArray(items: T): string 
    {
      let returnString = ''
      for (let i = 0; i < items.length; i++)
        {
          returnString += i > 0 ? "," : "" // if i is greater than 0 , then add "," as string
          returnString += items[i].toString() // another do add "items[array] to string in return string"
        }
        return returnString
    }
}


let concator = new Concatenator()
let concatorResult = concator.concatenateArray(['first','second','third'])
console.log(concatorResult)
let concatorResult2 = concator.concatenateArray([1,2,3,4,5])
console.log(concatorResult2)

// let concatorResult3 = concator.concatenateArray([true,false,false,false]) // error not acceptable boolean only string | number


function printProperty<T,K extends keyof T>(object: T , key: K)
  {
    let properValue = object[key]
    console.log(`object[${key}] = ${properValue}`)
  }

let obj1 = {
  id: 1,
  name: 'myNane',
  print() { console.log(`${this.id}`) }
}

printProperty(obj1, "name")
printProperty(obj1, "id")
printProperty(obj1, "print")



interface IPrint {
  print(): void
}

interface ILoginInterface<T extends IPrint> {
  logToConsole(IPrintObj: T): void
}

class LogClass<T extends IPrint> implements ILoginInterface<T> {
  logToConsole(IPrintObj: T): void
    {
      IPrintObj.print()
    }
}


let printObject: IPrint = {
  print() { console.log(`printObject.print() called`) }
}

let logClass = new LogClass()
logClass.logToConsole(printObject)



// partial;

// make all properties on t optional


type PartialType<T> = {
  [ P in keyof T ]?: T[P]
}

type ReadyOnlyType<T> = {
  readonly [P in keyof T] : T[P]
}

interface IUserImporant {
  id: number
  name: string
}


let example: ReadyOnlyType<IUserImporant> = {
  id: 12,
  name: 'john'
}


console.log(example)


// PICK 
// picking at keys in interface


interface Todo {
  title: string 
  description: string
  completed: boolean
}

type TodoPreview = Pick<Todo, 'title' | 'completed'> 
const todo: TodoPreview = {
  title: 'clean room',
  // error no pick // description: 'asd'
  completed: false
}

console.log(todo)


// RECORD
// record > 'property' , 'value'

interface IRecord {
  name: string
  age: number
}
type TDepartment = 'IT' | 'HR' | 'QA'
const company: Record<TDepartment,IRecord> = {
  IT: { name: 'John', age: 12 },
  HR: { name: 'Lai', age:11 },
  QA: { name: 'Seh', age:11 }
}
console.log(company)


// conditional type advance
//


type NumberOrString<T> = T extends number ? number : string

function logNumberOrString<T>(input: NumberOrString<T>) {
  console.log(`logNumberOrString: ${input}`)
}


// conditional type chaining


interface IA {
  a: number
}

interface IAB {
  a: number
  b: string
}

interface IABC {
  a: number
  b: string
  c: boolean
}

type abc_ab_a<T> = 
  T extends IABC ? [number,string,boolean] :
  T extends IAB ? [number,string] :
  T extends IA ? [number] :
  never



function getTupleStringAbc<T>(tupleValue: abc_ab_a<T>): string {
  let [...tupleDestructured] = tupleValue
  let returnString = '|'

  for(let value of tupleDestructured)
      {
        returnString += `${value}`
      }
    return returnString
}


let keyA = getTupleStringAbc<IA>([1])
let keyAb = getTupleStringAbc<IAB>([1,'test'])
console.log(keyA)
console.log(keyAb)


type DateOrNumberOrString<T> = 
  T extends Date ? Date : 
  T extends number ? Date | number :
  T extends string ? Date | number | string :
  never

function compareValues<T extends string | number | Date | boolean> (input: T, compareTo: DateOrNumberOrString<T>) 
  {

  }




type inferFromPropertyType<T> = T extends { id: infer U } ? U : never
function testInferPropertyType<T> ( arg: inferFromPropertyType<T>)
  {

  }


t
