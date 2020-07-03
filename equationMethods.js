const triangleArea = (len, height) => {
    return (len*height)/2;
}

const addAllUpTo = (countTo) => {
    return (!countTo) ? 0 : countTo + addAllUpTo(countTo-1)
}

export {triangleArea, addAllUpTo}