function reverseArray(arr) {
    for (var i = 0; i < arr.length / 2; i++) {
        var temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
}

function rotateArr(arr, moveBy) {
    reverseArr(arr); 
    var actualMovementsNeeded;
    if (moveBy > 0) {
        actualMovementsNeeded = moveBy % arr.length;
    } else {
        actualMovementsNeeded = Math.abs(moveBy) % arr.length;
    }
    if (moveBy > 0) {
        reverseArr(arr,0,actualMovementsNeeded - 1);
        reverseArr(arr,actualMovementsNeeded, arr.length - 1);
    } else {
        reverseArr(arr,0,arr.length-actualMovementsNeeded - 1);
        reverseArr(arr, arr.length - actualMovementsNeeded,arr.length - 1);
    }
}

function filterRange(arr, minVal, maxVal) {
    var nextInd = 0; 
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] >= minVal && arr[i] <= maxVal) {
            arr[nextInd] = arr[i];
            nextInd++; 
        }
    }
    arr.length = nextInd; 
}

function concatArrays(arr1, arr2) {
    var newArr = [];
    var curInd = 0; 
    for (var i = 0; i < arr1.length; i++) {

        newArr[curInd] = arr1[i];
        curInd++;
    }

    for (var i = 0; i < arr2.length; i++) {
       
        newArr[curInd] = arr2[i];
        curInd++;
    }
    return newArr;
}

