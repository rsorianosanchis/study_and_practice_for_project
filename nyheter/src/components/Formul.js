import React from 'react';
import useSelect from '../hooks/useSelect';

const Formul = ({ setCat }) => {
  const nyhetCategories = [
    { value: 'business', label: 'Business' },
    { value: 'entertainment', label: 'Entertainment' },
    { value: 'general', label: 'General' },
    { value: 'health', label: 'Health' },
    { value: 'science', label: 'Science' },
    { value: 'sports', label: 'Sports' },
    { value: 'technology', label: 'Technology' }
  ]

  const [nyhetKategori, SelectNyheter] = useSelect('general', nyhetCategories);

  const handleSubmit = e => {
    e.preventDefault();
    console.log(e.target);
    setCat(nyhetKategori);

  }

  return (
    <div className='row'>
      <div className="col-12 d-flex justify-content-center">
        <form onSubmit={handleSubmit}>
          <h2>Hitta nyheter efter kategori</h2>
          <SelectNyheter />
          <button type="submit" className="btn btn-secondary btn-sm btn-block">Small button</button>
        </form>
      </div>
    </div>
  )
}

export default Formul;
