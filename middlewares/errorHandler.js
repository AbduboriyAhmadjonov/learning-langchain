// middlewares/errorHandler.js

const errorHandler = (err, req, res, next) => {
  console.log(err);
  console.error(err.stack); // Log the error stack for debugging

  // Default 500 status server error
  res.status(err.statusCode || 500).json({
    message: err.message || 'An unexpected error occurred.',
    error: process.env.NODE_ENV === 'production' ? {} : err,
  });
};

export default errorHandler;
