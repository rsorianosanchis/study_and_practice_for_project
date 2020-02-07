export const bilAlder = (year) => {
  return new Date().getFullYear() - year;

};

//räkna pris enligt märke

export const prisTillverkare = (tillverkare) => {
  let increment;

  switch (tillverkare) {
    case 'europeiska':
      increment = 1.30
      break;
    case 'amerikanska':
      increment = 1.15
      break;
    case 'japanska':
      increment = 1.05
      break;
    default:
      break;
  }
  return increment;
}

export const prisPlan = (plan) => {
  return plan === 'basic' ? 1.20 : 1.5;

}

export const firstUppercase = (string) => {
  string.trim();
  const upper = string.charAt(0).toUpperCase() + string.substring(1);
  console.log(upper);
  return upper;
}

