exports.addFunction = (req, res) => {
  // Extract numbers from request body with default values
  const X = req.body.X;
  const Y = req.body.Y;

  // Check for missing or invalid numbers
  if (X === undefined || Y === undefined) {
    // Differentiate missing vs. one number provided (informative message)
    if (X === undefined && Y === undefined) {
      res
        .status(400)
        .send("Please provide both numbers (X and Y) to perform the addition.");
    } else {
      const missingAttribute = X === undefined ? "X" : "Y";
      res
        .status(400)
        .send(`Please provide the missing attribute: ${missingAttribute}`);
    }
    return;
  }

  const result = parseFloat(X) + parseFloat(Y);

  // Format the sum response with error handling
  const sumResponse = isNaN(result)
    ? "Invalid input: Please provide two numbers for addition."
    : `The sum of ${X} and ${Y} is ${result}`;

  res.send(sumResponse);
};
