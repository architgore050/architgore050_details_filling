// eslint-disable-next-line no-unused-vars
export function errorHandler(err, req, res, next) {
  console.error('Error:', err.message, err.stack);
  res.status(500).json({ success: false, error: 'Internal server error' });
}

export default errorHandler;