import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[],
        counter: {},
        price:0,
        searchItems:[],
        formState:false,
    },
    reducers:{
        addItem:(state,action) => {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.card.info.id === newItem.card.info.id);
            const itemId = newItem.card.info.id

            if (!existingItem) {
                state.items.push(newItem);
                if(newItem.card.info.price === undefined){
                  state.price = state.price + 50
                  state.counter[itemId] = 1
                }
                else{
                  state.price = state.price + (newItem.card.info.price/100)
                  state.counter[itemId] = 1
                }
            }
           
        },
        removeItem: (state, action) => {
          const removedItemId = action.payload;
          const removedItem = state.items.find(item => item.card.info.id === removedItemId);
          
          if (removedItem) {
            state.items = state.items.filter(item => item.card.info.id !== removedItemId);
            
            if (state.counter[removedItemId] !== undefined) {
              const counterValue = state.counter[removedItemId];
        
              if (counterValue === 1) {
                if (removedItem.card.info.price === undefined) {
                  state.price =state.price - 50;
                } else {
                  state.price =state.price - (removedItem.card.info.price / 100);
                }
              }else {
                if (removedItem.card.info.price === undefined) {
                  state.price -= counterValue * 50;
                } else {
                  state.price -= counterValue * (removedItem.card.info.price / 100);
                }
              }
               delete state.counter[removedItemId];
            }
          }
        },
        clearCart:(state) => {
            state.items = []
            state.price = 0
            state.counter = {}
            state.searchItems=[]
        },
        incrementCounter: (state, action) => {
            const { itemId,itemPrice } = action.payload;
            if (!state.counter[itemId]) {
              state.counter[itemId] = 2;
            } else {
              state.counter[itemId] = state.counter[itemId]+1;
            }
            if(itemPrice === undefined){
              state.price = state.price + 50;
            }
            else{
              state.price = state.price + (itemPrice/100);
            }
          },

          decrementCounter: (state, action) => {
            const { itemId,itemPrice } = action.payload;
            if (state.counter[itemId] && state.counter[itemId] > 1) {
              state.counter[itemId]--;
              if(itemPrice === undefined && state.price>0){
                state.price = state.price - 50;
              }
              else if(state.price === 0){
                state.price=0
              }
              else{
                state.price = state.price - (itemPrice/100);
              }
            }
           
          },
          searchAddItem:(state,action) => {
            const newItem = action.payload;
            const existingItem = state.searchItems.find((item) => item.card.card.info.id === newItem.card.card.info.id);
            const itemId = newItem.card.card.info.id

            if (!existingItem) {
                state.searchItems.push(newItem);
                state.price = state.price + (newItem.card.card.info.price/100)
                state.counter[itemId] = 1
                
            }
          },
           searchremoveItem: (state, action) => {
            const removedItemId = action.payload;
            const removedItem = state.searchItems.find(item => item.card.card.info.id === removedItemId);
            
            if (removedItem) {
              state.searchItems = state.searchItems.filter(item => item.card.card.info.id !== removedItemId);
              
              if (state.counter[removedItemId] !== undefined) {
                const counterValue = state.counter[removedItemId];
          
                if (counterValue === 1) {
                  if (removedItem.card.card.info.price === undefined) {
                    state.price =state.price - 50;
                  } else {
                    state.price =state.price - (removedItem.card.card.info.price / 100);
                  }
                }else {
                  if (removedItem.card.card.info.price === undefined) {
                    state.price -= counterValue * 50;
                  } else {
                    state.price -= counterValue * (removedItem.card.card.info.price / 100);
                  }
                }
                 delete state.counter[removedItemId];
              }
            }
          },
          searchincrementCounter: (state, action) => {
            const { itemId,itemPrice } = action.payload;
            if (!state.counter[itemId]) {
              state.counter[itemId] = 2;
            } else {
              state.counter[itemId] = state.counter[itemId]+1;
            }
            if(itemPrice === undefined){
              state.price = state.price + 50;
            }
            else{
              state.price = state.price + (itemPrice/100);
            }
          },

          searchdecrementCounter: (state, action) => {
            const { itemId,itemPrice } = action.payload;
            if (state.counter[itemId] && state.counter[itemId] > 1) {
              state.counter[itemId]--;
              if(itemPrice === undefined && state.price>0){
                state.price = state.price - 50;
              }
              else if(state.price === 0){
                state.price=0
              }
              else{
                state.price = state.price - (itemPrice/100);
              }
            }
           
          },
          formshow : (state,action) =>{
            state.formState = action.payload
          }
    }

})

export const {addItem ,removeItem,clearCart,incrementCounter,decrementCounter,searchAddItem,searchremoveItem,
searchincrementCounter,searchdecrementCounter,formshow} = cartSlice.actions

export default cartSlice.reducer

