const triangleArea = (len, height) => {
    return (len*height)/2;
}

const addAllUpTo = (countTo) => {
    return (!countTo) ? 0 : countTo + addAllUpTo(countTo-1)
}

const matchStickHouses = (houseCount) => {
    if (houseCount == 0) return 0;
    let minihouse = 5;
    let initialHouse = 6;
    let demo = houseCount - 1;
    let afterFirst = demo * minihouse;
    let postFirst = afterFirst + initialHouse;
    return postFirst
}

const canArrayBeNested = (arr1, arr2) => {
    arr1.sort((a,b) => a-b);
    arr2.sort((a,b) => a-b);
    let min1 = arr1[0], min2 = arr2[0];
    if (min1 > min2 && arr1.slice(-1) < arr2.slice(-1)) {
        console.log('true')
        return true
    }else {
        console.log('false');
        return false;
    }
}
const returnPlusOne = (num) => {
    return num+1;
}


function minMax(arr) {
    arr.sort((a, b) => a-b);
	return [arr[0], parseFloat(arr.slice(-1))]
}

function tallestBuildingHeight(arr) {
    let results = arr.filter(space => space.trim().length > 0);
    return results.length*20;
}


export {triangleArea, addAllUpTo, matchStickHouses, canArrayBeNested, returnPlusOne, minMax, tallestBuildingHeight}