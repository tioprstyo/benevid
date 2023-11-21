const number = (value) => {
    return value.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
} 

export default number;