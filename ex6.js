const nums = [10, 20, [30, 40, [50, 60, [70, 80]]]];

function flatArray(arr) {
    let res = []
    
    flatten(arr)

    function flatten(arr) {
        for(let i = 0; i < arr.length; i++) {
            if(Array.isArray(arr[i])) {
                flatten(arr[i])
            }
            else {
                res.push(arr[i])
            }
        }
    }
    console.log(res)
}

flatArray(nums)