var twoSum = function(arr, t){
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i]+arr[j] === t){
                return [i, j];
            }
        }
    }
    return null;
}