import React, { Fragment, useState } from 'react'

const useCriptoCoin = (label, initialState, options) => {

  //console.log(options);


  const [state, updateState] = useState(initialState);

  const Selectkrypto = () => (
    <Fragment>
      <label>{label}</label>
      <select onChange={e => updateState(e.target.value)} value={state}>
        <option value="">--select krypto coin--</option>
        {options.map(option => <option value={option.CoinInfo.Name} key={option.CoinInfo.Id}>{option.CoinInfo.FullName}</option>)}
      </select>

    </Fragment>
  );

  return [state, Selectkrypto, updateState];

}

export default useCriptoCoin;
