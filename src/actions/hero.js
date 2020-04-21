
export const addHero = (hero) => {
  return {
    type: 'ADD_HERO',
    payload: hero,
  }
}

export const removeHero = (heroId) => {
  return {
    type: 'REMOVE_HERO',
    payload: heroId,
  }
}

export const setActiveHero = (hero) => {
  return {
    type: 'SET_ACTIVE_HERO',
    payload: hero,
  }
}

export const getHeroList = () => {
  // Call API
  // Update redux store by dispatching an action
}