- BUG #1: We should use jwt.verify(token, SECRET_KEY) function to decode the token
  and verify its signature and checks for token expiration. jwt.decode() only decode the token.
- BUG #2: If the throw statement is missing in the get method in User models , this test will fail and indicate that the expected error was not thrown.
- BUG #3: Missing {} for sqlForPartialUpdate function in partialUpdate.js.
- BUG #4: duplicate module.exports = app in app.js.
- BUG #5: the err.stack only print out when the process.env.NODE_ENV !== "test".
- BUG #6: We don't need parameter username, and password for this function getAll(username, password);
