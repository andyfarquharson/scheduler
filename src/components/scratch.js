const props = 0;

const formatSpots = () => {
  let string = "";
  if (props === 0) {
    string = "no spots remaining";
  } else if (props === 1) {
    string = `${prop} spot remaining`;
  }
  else {
    string = `${props} spots remaining`;
  }

  return string;
}
console.log(formatSpots(props))