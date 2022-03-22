

// Optional properties


interface IOptional {
  id: number
  name?: string
}

let optionalId: IOptional = {
  id: 122
}

let optionalIdName: IOptional = {
  id: 123,
  name: 'kevin'
}


interface IWeakType {
  id?: number
  name?: number
}

let weakTypeNoOverlap: IWeakType = {
  // description: 'a description' // Error
}


// In operator

interface IIdName {
  id: number
  name: string
}

interface IDescValue {
  desc: string
  value: number
}


function printNameOrValue (
  obj: IIdName | IDescValue
): void {
  if('id' in obj)
    {
      console.log(`obj.name = ${obj.name}`)
    }
  if('desc' in obj)
    {
      console.log(`obj.value = ${obj.value}`)
    }
}

printNameOrValue({id: 1, name: 'nameValue'}) // obj.name = nameValue
printNameOrValue({desc: 'description', value: 2}) // obj.value = 2


// Keyof

interface IPerson {
  id: number,
  name: string
}

type personPropertyType = keyof IPerson
// equivalent of  type personPropertyType = 'id' | 'name'

function getProperty( key: personPropertyType, value: IPerson )
{
  console.log(`${key} , ${value}`)
}

getProperty('id', { id: 1, name: 'john' })
getProperty('name', { id: 2, name: 'batino' })
// getProperty('test', { id: 3, name: 'error' }) // Error

console.log(`----- CLASS ------`)

// Classes

class SimpleClass {
  id: number | undefined;
  print(): void {
    console.log(`SimpleClass.print called ${this.id}`)
  }
}


let mySimpleClass = new SimpleClass();
mySimpleClass.print()
mySimpleClass.id = 1222
mySimpleClass.print()


interface IPrint {
  print(): void
}

class ClassA implements IPrint 
  {
    print(): void 
      {
        console.log('Class a void')
      }
  }

class ClassB implements IPrint
  {
    print(): void
      {
        console.log('Class b void')
      }
  }

  
function printClass(a: IPrint) 
  {
    a.print()
  }


let classA = new ClassA()
let classB = new ClassB()

printClass(classA)
printClass(classB)


// Class Contstructor

class ClassWithConstructor {
  id: number
  constructor(_id: number)
    {
      this.id = _id
      // you can use id arg also 
      // this.id is not the same as id inside of class
    }
}


let classWithConstructor = new ClassWithConstructor(10)
console.log(`Class with Constructor ${JSON.stringify(classWithConstructor)}`)

// class modifier
//

class ClassWithPublicProperty {
  public id: number | undefined
}

let publicAccess = new ClassWithPublicProperty()
publicAccess.id = 10


class ClassWithPrivateProperty {
  private id: number
  constructor()
    {
      this.id = 10 
    }
}

let privateAccess = new ClassWithPublicProperty()


class ClassWithEcmaPrivate {
  #id: number
  constructor()
    {
      this.#id = 10 
    }
}

let ecmaClass = new ClassWithEcmaPrivate()

console.log(`${JSON.stringify(ecmaClass)}`)


class ShortHandPublic {

  constructor(public id: number, public name: string)
    {

    }
}

let shortHandPublic = new ShortHandPublic(12,'john')
console.log(`${JSON.stringify(shortHandPublic)}`)


// ReadOnly
class ReadOnlyClass {
  readonly name: string
  constructor(_name: string)
    {
      this.name = _name
    }
}

let readOnlyClass = new ReadOnlyClass('asd')
// readOnlyClass.setNameValue('asd') // Error ready only 
console.log(`${JSON.stringify(readOnlyClass)}`)



// getters setters


class ClassWithAccesors {
  private _id: number = 0
  get id(): number { 
    
      console.log(`getters id`)
      return this.id;
    }
  set id(value: number) { 
      console.log('setters id()')
      this.id = value
    }
}


class StaticClass {
  static count = 0
  updateCount() {
    StaticClass.count++ 
  }
}

let staticClass = new StaticClass()
console.log(staticClass)


// inheritance

interface IBaseStringOrNumber {
  id: string | number
}

interface IDerivedFromBaseNumber extends IBaseStringOrNumber {
  id: number
}


// multiple inheritance

interface IDerivedId {
  id: number
}
interface IDerivedName {
  name: string
}

interface IMultiple extends IDerivedId,IDerivedName {
  description: string
} 


let multipleOBject: IMultiple = {
  id: 1,
  name: 'john',
  description: 'A Human'
}


// class inheritance
//
//


interface IFirstInterface {
  id: number
}
interface ISecondInterface {
  name: string
}
class MultipleInterface implements IFirstInterface,ISecondInterface {
  id: number = 0
  name: string = 'john'
}

// super 
//

class BaseWithCons {
  private id: number
  constructor(id: number) 
    {
      this.id = id
    }
}

class DerivedClassWithCons extends BaseWithCons {
  private name: string
  constructor(id: number, name: string)
    {
      super(id)
      this.name = name
    }
}


let testDerivedCons = new DerivedClassWithCons(5,'pat')
console.log(testDerivedCons)


// function overide
//

class BaseClassFn {
  print(text: string) {
   console.log(`from base classFn ${text}`) 
  }
}

class DerivedBaseeClassFn extends BaseClassFn{
  print(text: string) {
    console.log(`from DerivedBaseClassFn ${ text }`)
    // to run on baseclassfn and DerivedBaseClassFn
    // use super.print()  
  }
}

let testOverwriteFn = new DerivedBaseeClassFn()

console.log(testOverwriteFn.print('Hello there'))


// protected


class BaseClassProtected {
  protected id: number
  private name: string = ''
  constructor(id: number) {
    this.id = id
  }
}

class AccessProtected extends BaseClassProtected {
  constructor(id: number)
  {
    super(id)
  }
}

let AP = new AccessProtected(1)
console.log(AP)


// Abstract class
abstract class EmployeeBase {
  public id: number
  public name: string
  abstract doWork(): void
  constructor(id: number, name: string)
    {
      this.id = id
      this.name = name
    }
}

class OfficeWorker extends EmployeeBase {
  doWork()
    {
      console.log(`${this.name} doing work`)
    }
}

class OfficeManager extends OfficeWorker {
  public employees: OfficeWorker[] = []
  manageEmployee()
    {
      for( let employee of this.employees)
        {
          employee.doWork()
        }
    }
}


let joeBlog = new OfficeWorker(2,'Joe')
let kevBlog = new OfficeWorker(3,'Kev')
let jackManager = new OfficeManager(4,'Jack')

jackManager.employees.push(joeBlog)
jackManager.employees.push(kevBlog)

jackManager.manageEmployee()


// instanceOf
//


class A {}
class BFromA extends A {} // new BFromA() instanceof A = true
class CFromA extends A {} // new CFromA() instanceof A = true // new CFromA() instanceof BFromA = false
class DFromC extends CFromA {} 


// 
// export is easy 
