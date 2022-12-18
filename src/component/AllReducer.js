

export function reducer(state,action)
{
  switch(action.type)
  {
  case 'one':
    return {data: action.payload};
    default:
    return state.data;
  }
}
