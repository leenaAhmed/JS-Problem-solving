//
// This is only a SKELETON file for the 'Reverse String' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const reverseString = (str) => {
  // solution pure js  =>   str.split("").reverse().join("");

  // work with recursive

     if(str == '') {
        return ''
     }
     return reverseString(str.slice(1)) + str[0]
  
  
};
