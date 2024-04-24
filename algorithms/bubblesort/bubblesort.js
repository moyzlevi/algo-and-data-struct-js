let bubbleSortImpl = (array) => {
 let swap = true;
  while(swap) {
    swap = false;
    for (let index = 0; index < array.length-1; index++) {
        const element = array[index];
        const nextElement = array[index+1];

        if(element>nextElement) {
            array[index] = nextElement;
            array[index+1] = element; 
            swap = true;
        }
    }
  }   
}

let rArray = [33,5,2,123,-5]
bubbleSortImpl(rArray)
console.log(rArray)