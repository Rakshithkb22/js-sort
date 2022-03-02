const names = ['Rahul', 'Rakshith', 'Avinash', 'Nagaraju', 'Girish', 'Pravin', 'Bharat'];
for(let i = 1; i < names.length; i++) {
    for(let j = 0; j < names.length; j++ ) {
        if(names[i] < names[j]) {
            let abc = names[i]
            names[i] = names[j]
            names[j] = abc
        }
    }
}
console.log(names)

const nums = [20, 25, 30, 80, 85, 22, 10, 4, 90, 2];
for(let i = 1; i < nums.length; i++) {
    for(let j = 0; j < nums.length; j++) {
        if(nums[i] > nums[j]) {
            let x = nums[i]
            nums[i] = nums[j]
            nums[j] = x
        }
    }
}
console.log(nums);

/* const arr = [20, 25, 30, 80, 85, 22, 10, 4, 90];
for(let i = arr.length; i > 1; i--) {
    for(let j = arr.length; j > 0; j--) {
        if(arr[i] > arr[j]) {
            let x = arr[i]
            arr[i] = arr[j]
            arr[i] = x
        }
    }
}

console.log(arr) */