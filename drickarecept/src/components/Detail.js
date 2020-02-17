import React, { useContext, useState } from 'react';
import { DetailContext } from '../context/DetailContext';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

//
const Detail = ({ drink }) => {
  //conf modal
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  //
  const { setId, superDetails } = useContext(DetailContext);
  const { strDrink, strDrinkThumb, idDrink } = drink;

  const handleClick = e => {
    e.preventDefault();
    console.log(idDrink);
    setId(idDrink);
    handleOpen();
  };

  return (
    <div className='card col-2 m-1' style={{ width: '18rem' }}>
      <img src={strDrinkThumb} className='card-img-top' alt='...' />
      <div className='card-body'>
        <p className='card-text'>{strDrink}</p>
      </div>
      <button
        type='button'
        className='btn btn-block btn-primary mb-2'
        onClick={handleClick}
      >
        Ver
      </button>
      <Modal
        open={open}
        onClose={() => {
          handleClose();
          setId('');
        }}
      >
        <div style={modalStyle} className={classes.paper}>
          <h1>{superDetails.strDrink}</h1>
          <img
            src={superDetails.strDrinkThumb}
            alt='..'
            className='card-img-top'
          />
          <p>{superDetails.strInstructions}</p>
        </div>
      </Modal>
    </div>
  );
};

export default Detail;
