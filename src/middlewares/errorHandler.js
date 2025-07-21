const errorHandler = (err, req, res, next) => {
  console.log(err);
  console.error(err.stack);

  res.status(err.statusCode || 500).json({
    message: err.message || 'An unexpected error occurred.',
    error: process.env.NODE_ENV === 'production' ? {} : err,
  });
};

export default errorHandler;
