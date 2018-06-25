const arr = [2, 5, 3];

const arrSumm = new Array(20);

const diffElementsHelper = (arr, index) => {

    let newArr = new Array();

    if(index >= arr.length -1){
        for(let i = 0; i< arr.length -1; i++){
            newArr.push(arr[i]);
        }

        if(arr.length > 0){
            newArr.push(arr[arr.length - 1]);
        }
        console.log(newArr);
        return;
    }

    for (let i = index; i < arr.length; i++){

        let t = arr[index];
        arr[index] = arr[i];
        arr[i] = t;

        diffElementsHelper(arr, index + 1);

        t = arr[index];
        arr[index] = arr[i];
        arr[i] = t;
    }

};

const diffElements = (arr) => {
    diffElementsHelper(arr, 0);
};

diffElements(arr);