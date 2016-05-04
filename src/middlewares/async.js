// exports a function that returns a function that returns another function...
// middleware signature is cray...
export default function({ dispatch }) {
  return next => action => {
    // If action does not have payload
    // or, the payload does not have a .then property
    // we don't care about it; send it on.
    if (!action.payload || !action.payload.then) {
      // forward action to next middleware in stack.
      // if no other middleware exists, forward to reducers.
      return next(action);
    }

    // Make sure the action's promise resolve (by calling .then).
    action.payload
      .then(function(response) {
        // create a new action with the old type, but
        // replace the promise with the response data
        const newAction = { ...action, payload: response };

        // use dispatch to run the action through EVERY LAYER again
        dispatch(newAction);
      })
  };
}
