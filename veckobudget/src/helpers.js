export const kontrolAvailable = (budget, available) => {

  let defcon;

  if (available < (budget / 4)) {

    defcon = 'alert alert-danger mx-3 mt-0';

  } else if (available > (budget / 4) && available < (budget / 1.33)) {

    defcon = 'alert alert-warning mx-3 mt-0';

  } else if (available > (budget / 1.33)) {

    defcon = 'alert alert-success mx-3 mt-0';
  } else {
    defcon = 'alert alert-light mx-3 mt-0';
  }

  return defcon;

}