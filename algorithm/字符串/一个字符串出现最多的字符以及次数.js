
function getMostStr (str) {
   let obj = {} 
   let arr = str.split("")
   let max = 1
   let s = arr[0]
   for(let i=0 ; i<arr.length-1;i++) {
       if(obj[arr[i]]) {
           let count = ++obj[arr[i]]
           if(count > max) {
               max=count
               s=arr[i]
           }
       } else {
          obj[arr[i]] = 1
       }
   }
   return [s,max]
}