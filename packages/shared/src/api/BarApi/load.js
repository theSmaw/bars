export default function load() {
  return fetch('http://pb-api.herokuapp.com/bars')
    .then((response) => {
      /* istanbul ignore else */
      if (response.ok) {
        return response.json();
      }

      /* istanbul ignore next */
      throw new Error(); // TODO - handle this error
    });
}
