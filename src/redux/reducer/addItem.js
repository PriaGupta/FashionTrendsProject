const addItem = [];

const updateCart=(arr,id)=>{
  const itemToUpdate = arr.find((item) => item.id === id);
  
  // If the item exists, update its quantity and return a new object
  if (itemToUpdate) {
    return arr.map((item) => {
      if (item.id === id) {
        // Return a new object with updated quantity
        return {
          ...item,
          quantity: item.quantity + 1
        };
      }
      return item;
  })}
}

const deleteCart=(arr,id)=>{
  const itemdel=arr.find((item)=>item.id === id)

  if(itemdel){
    return arr.map((item)=>{
   if(item.id === id){
   return {
    ...item,
    quantity:item.quantity-1
   }
   }
    return item;
  })}
}

const addItems = (state = addItem, action) => {
    switch (action.type) {
        case "ADDITEM" : return [
            ...state,
            action.payload
        ]
        break;

        case "DELETEITEM" :
          console.log('deleted in reducer',state)
            return state = state.filter((x)=>{
                return x.id !== action.payload.id
            })
        break;
       
        case "INCREMENT":
            // console.log(state,'==============',action.payload)
      return updateCart( state,action.payload) 
    
    

            case "DECREMENT":
              console.log(state,'==============',action.payload)
              return deleteCart(state,action.payload)
  
        default:
          return state;
    }
}

export default addItems
