import { GET_HERO_LIST, GET_HERO_LIST_SUCCESS, GET_HERO_LIST_FAILED } from "../actions/actionType";

const initialHeroState = {
  list: [],
  params: { _limit: 10, _page: 1 },
  loading: false,
  error: '',
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


    case GET_HERO_LIST: {
      return {
        ...state,
        error: '',
        loading: true,
      };
    }
    case GET_HERO_LIST_SUCCESS: {
      const newList = [...action.payload.data].map(product => ({
        id: product.id,
        name: product.name,
        power: product.originalPrice,
      }));
      const newParams = {
        ...state.params,
        ...action.payload.pagination
      };

      return {
        ...state,
        loading: false,
        list: newList,
        params: newParams,
      };
    }
    case GET_HERO_LIST_FAILED: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }

    default:
      return state;
  }
};

export default heroReducer;