const initialWagonState = {
    cash: 200,
    supplies: 100,
    distance: 0,
    days: 0
  }
  
  const wagonReducer = (state = initialWagonState, action) => {
  
    switch(action.type) {
      case 'gather': return {
        ...state,
        cash: state.cash,
        supplies: state.supplies + 15,
        distance: state.distance,
        days: state.days + 1
      }
      case 'travel': return {
        ...state,
        cash: state.cash,
  
        supplies: state.supplies - (20 * action.payload) > 0 ? state.supplies - (20 * action.payload) : state.supplies,
  
        distance: state.supplies - (20 * action.payload) > 0 ? state.distance + (10 * action.payload) : state.distance,
  
        days: state.supplies - (20 * action.payload) > 0 ? state.days + (1 * action.payload) : state.days
      }
      case 'tippedWagon': return {
        ...state,
        cash: state.cash,
        supplies: state.supplies - 30,
        distance: state.distance,
        days: state.days + 1
      }
      case 'sell' : return {
        ...state,
  
        cash: state.supplies - 20 > 0 ? state.cash + 5 : state.cash,
        supplies: state.supplies - 20 > 0 ? state.supplies - 20: state.supplies,
        distance: state.distance,
        days: state.days
      }
      case 'buy' : return {
       ...state,
  
        cash: state.cash - 15 > 0 ? state.cash - 15 : state.cash,
        supplies: state.cash - 15 > 0 ? state.supplies + 25 : state.supplies,
        distance: state.distance,
        days: state.days
  
      }
      case 'theft' : return {
         ...state,
  
        cash: state.cash - (state.cash / 2) < 0 ? 0 : state.cash - (state.cash / 2),
        supplies: state.supplies,
        distance: state.distance,
        days: state.days
      }
      default: {return  state}
    }
  }
  
  let wagon = wagonReducer(undefined, {})
  console.log(wagon)
  
  wagon = wagonReducer(wagon, {type: 'travel', payload: 1})
  console.log(wagon)
  
  wagon = wagonReducer(wagon, {type: 'gather'})
  console.log(wagon)
  
  wagon = wagonReducer(wagon, {type: 'tippedWagon'})
  console.log(wagon)
  
  wagon = wagonReducer(wagon, {type: 'travel', payload: 3})
  console.log(wagon)
  
  wagon = wagonReducer(wagon, {type: 'travel', payload: 3})
  console.log(wagon)
  
  wagon = wagonReducer(wagon, {type: 'buy'})
  console.log(wagon)
  
  wagon = wagonReducer(wagon, {type: 'sell'})
  console.log(wagon)
  
  wagon = wagonReducer(wagon, {type: 'theft'})
  console.log(wagon)
  