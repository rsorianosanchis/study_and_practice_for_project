import React, { useState } from 'react'

const useSelect = (initialState, options) => {

  const [state, updateState] = useState(initialState);

  const SelectNyheter = () => (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <label className="input-group-text" htmlFor="inputGroupSelect01">Categories</label>
      </div>
      <select className="custom-select" id="inputGroupSelect01" value={state} onChange={e => updateState(e.target.value)}>

        {options.map(item => <option key={item.value} value={item.value}>{item.label}</option>)}

      </select>
    </div>
  );

  return [state, SelectNyheter];
}

export default useSelect;
