export const increment = (num = 1) => {
  return {
    type: 'INCREMENT',
    payLoad: num,
  }
}

export const decrement = () => {
  return {
    type: 'DECREMENT',
  }
}

export const loggedIn = () => {
  return {
    type: 'SIGN_IN',
  }
}