/**
 * Resolve partial state from given path
 * @param obj - Object to search path in
 * @param path - Path witihin object
 */
export function resolve (obj:object, path:string=''):any {
  let args = path.split('.')
  var current = obj
  while(args.length) {
    if(typeof current !== 'object') return undefined
    current = current[args.shift()]
  }
  return current
}

/**
 * Is a path existent in given object?
 * @param obj - Object to search path in
 * @param path - Path witihin object
 */
export function pathInObject(obj:object, path:string=''):boolean {
  let args = path.split('.')
  for (var i = 0; i < args.length; i++) {
    if (!obj.hasOwnProperty(args[i])) {
      return false
    }
    obj = obj[args[i]]
  }
  return true
}

/**
 * Create a given path in the object
 * @param obj - Object to create path in
 * @param path - Path within object
 */
export function createPathInObject(obj:object, path:string='') {
  let args = path.split('.')
  for (let i = 0; i < args.length; i++){
    obj = obj[args[i]] = obj[args[i]] || {}
  }
}

/**
 * Inject a value into in another object at a given path
 * @param value - Value or object to inject
 * @param obj - Object to create value in
 * @param path - Path within object
 */
export function injectObjectAtPath(value:any, obj:object, path:string='') {
  let args = path.split('.')
  for (let i=0; i < args.length; i++){
    var v = (i==args.length-1 && value) ? value : {}
    obj = obj[args[i]] = obj[args[i]] || v
  }
}

/**
 * Set a value in an object at a given path
 * @param value - Value to set
 * @param obj - Object to set value in
 * @param path - Path within object
 */
export function setValueAtPath(value:any, obj:object, path:string='') {
  let i:number
  let args = path.split('.')
  for (i = 0; i < args.length - 1; i++) {
    obj = obj[args[i]]
  }
  obj[args[i]] = value
}
