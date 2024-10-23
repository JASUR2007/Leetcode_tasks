var expect = function(val) {
    return {
     toBe: function(compareVal) {
         if (val === compareVal) {
             return true;
         } else {
             throw new Error("Not Equal");
         }
     },
     notToBe: function(compareVal) {
         if (val !== compareVal) {
             return true;
         } else {
             throw new Error("Equal");
         }
     }
 };

};
console.log(expect(5).toBe(5));