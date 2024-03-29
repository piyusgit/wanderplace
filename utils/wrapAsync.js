/**
 * The `wrapAsync` function is used to wrap asynchronous functions in Express middleware to handle
 * errors.
 * @param fn - The `fn` parameter in the `wrapAsync` function is a function that takes `req`, `res`,
 * and `next` as parameters and returns a promise. This function is then wrapped inside another
 * function that handles errors by calling `next` with the caught error if the promise is rejected.
 * @returns The `wrapAsync` function is returning a new function that takes `req`, `res`, and `next` as
 * parameters. This new function calls the original `fn` function with `req`, `res`, and `next`, and
 * then uses `.catch(next)` to handle any errors that may occur during the execution of `fn`.
 */
module.exports = (fn) => {
  return function (req, res, next) {
    fn(req, res, next).catch(next);
  };
};
