export function getCurrentDate() {
  var today = new Date();

  var options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return today.toLocaleString('en-US', options);
}
