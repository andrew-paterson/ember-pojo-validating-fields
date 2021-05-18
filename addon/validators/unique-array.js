import { assign } from '@ember/polyfills';

export default function validateUniqueArray(opts = {}) {
  return (key, newValue, oldValue, changes, content) => {  
    var response = true; 
    const fieldName = opts.description || key;
    var current = assign(content, changes); 
    const findInstances = (arr, value) => arr.filter(item => item === value);
    if (findInstances(current[key], newValue).length > 1) {
      response = `Each ${fieldName} must be unique.`
    }
    return response;
  };
}