export const errorHandlerInit = (req, res, next, errorName, errorStatus) => {
  const error = new Error(errorName);
  error.status = errorStatus;
  next(error);
};
