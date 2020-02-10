import React, { Fragment, useState } from 'react';



const useCoin = (label, initialState, options) => {
  //state del custom hook
  const [state, updateState] = useState(initialState);
  //
  const Select = () => (
    <Fragment>
      <label className='mr-2'>{label}</label>
      <select onChange={e => updateState(e.target.value)} value={state}>
        <option value=''>-- select coin --</option>
        {options.map(option => <option value={option.code} key={option.code}>{option.name}</option>)}
      </select>
    </Fragment>
  );
  //return custom state, render interface and modificator for state
  return [state, Select, updateState]
}

export default useCoin;

