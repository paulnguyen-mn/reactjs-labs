
const initialHeroState = {
  list: [],
  activeHero: {},
};
const heroReducer = (state = initialHeroState, action) => {
  switch (action.type) {
    case 'ADD_HERO': {
      const newList = [...state.list];
      newList.push(action.payload);

      // const newState = { ...state };
      // newState.list.push(action.payload);
      return {
        ...state,
        list: newList,
      };
    }
    case 'REMOVE_HERO': {
      const heroId = action.payload;
      const newList = [...state.list].filter(hero => hero.id !== heroId);

      return {
        ...state,
        list: newList,
      };
    }
    case 'SET_ACTIVE_HERO': {
      const newActiveHero = {
        ...action.payload,
      };
      // const newActiveHero = action.payload;

      return {
        ...state,
        activeHero: newActiveHero,
      };
    }
    default:
      return state;
  }
};

export default heroReducer;