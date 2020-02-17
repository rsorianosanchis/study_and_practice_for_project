import React, { useContext, useState } from 'react';
import { KategoriesContext } from '../context/KategoriesContext';
import { ReceptsContext } from '../context/ReceptsContext';

const Formul = () => {
  const { kategories } = useContext(KategoriesContext);
  const { setFind } = useContext(ReceptsContext);
  const [formValues, setFormvalues] = useState({
    ingredient: '',
    kategori: ''
  });
  const { ingredient, kategori } = formValues;
  //
  const handleChange = e => {
    e.preventDefault();
    setFormvalues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(formValues);
    setFind(formValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend className='text-center'>
          Hitta dryker efter kategori eller ingredienser.
        </legend>
      </fieldset>
      <div className='row mt-2'>
        <div className='col-md-4'>
          <input
            type='text'
            name='ingredient'
            className='form-control'
            placeholder='Sök efter ingrediens'
            onChange={handleChange}
            value={ingredient}
          />
        </div>
        <div className='col-md-4'>
          <select
            className='form-control'
            name='kategori'
            value={kategori}
            onChange={handleChange}
          >
            <option value=''>-- Select Kategori --</option>
            {kategories.map(cat => (
              <option key={kategories.indexOf(cat)} value={cat.strCategory}>
                {cat.strCategory}
              </option>
            ))}
          </select>
        </div>
        <div className='col-md-4'>
          <input
            type='submit'
            className='btn btn-block btn-primary'
            value='Sök'
          />
        </div>
      </div>
    </form>
  );
};

export default Formul;
