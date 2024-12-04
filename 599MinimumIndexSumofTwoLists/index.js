let list1 = ["Shogun","Tapioca Express","Burger King","KFC"],
 list2 = ["KFC","Shogun","Burger King"]
 var findRestaurant = function(list1, list2) {
    let map = new Map();
    let result = [];
    let minIndexSum = Infinity;
    for (let i = 0; i < list1.length; i++) {
        map.set(list1[i], i);
    }
    for (let j = 0; j < list2.length; j++) {
        if (map.has(list2[j])) {
            let indexSum = j + map.get(list2[j]);
            console.log(indexSum)
            if (indexSum < minIndexSum) {
                minIndexSum = indexSum;
                result = [list2[j]]; 
z            } else if (indexSum === minIndexSum) {
                result.push(list2[j]); 
            }
        }
    }

    console.log(result);
};
findRestaurant(list1, list2)