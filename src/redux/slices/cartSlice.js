import { createSlice } from '@reduxjs/toolkit'

// Load from localStorage if exists
const savedCart = JSON.parse(localStorage.getItem('cart')) || {
  items: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: savedCart,
  reducers: {
    addToCart: (state, action) => {
      const { productId, quantity } = action.payload
      const existingItem = state.items.find(item => item.productId === productId)

      if (existingItem) {
        existingItem.quantity += quantity
      } else {
        state.items.push({ productId, quantity })
      }

      // Save to localStorage
      localStorage.setItem('cart', JSON.stringify(state))
    },

    updateQuantity: (state, action) => {
      const { productId, quantity } = action.payload
      const item = state.items.find(i => i.productId === productId)
      if (item) {
        item.quantity = quantity
      }

      localStorage.setItem('cart', JSON.stringify(state))
    },

    removeFromCart: (state, action) => {
      const productId = action.payload
      state.items = state.items.filter(item => item.productId !== productId)

      localStorage.setItem('cart', JSON.stringify(state))
    },

    clearCart: (state) => {
      state.items = []
      localStorage.removeItem('cart')
    }
  }
})

export const { addToCart, updateQuantity, removeFromCart, clearCart } = cartSlice.actions
export default cartSlice.reducer
