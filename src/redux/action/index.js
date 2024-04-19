export const addItem=(product)=>{
    return{
        type:"ADDITEM",
        payload : product
    }
}

export const deleteItem=(product)=>{
  console.log('delete')
    return{
        type:"DELETEITEM",
        payload : product
    }
}
export const increment = (product) => {
    return {
      type: "INCREMENT",
      payload: product
    }
  };

 export const decrement = (product) => {
  console.log('decrement called')
    return {
      type: "DECREMENT",
      payload: product
    }
  };
