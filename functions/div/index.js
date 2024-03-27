exports.divFunction = (req, res) => {
  // Extract numbers from request body with default values
  const X = req.body.X;
  const Y = req.body.Y;

  // Check for missing or invalid numbers
  if (X === undefined || Y === undefined) {
    // Differentiate missing vs. one number provided (informative message)
    if (X === undefined && Y === undefined) {
      res
        .status(400)
        .send("Please provide both numbers (X and Y) to perform the division.");
    } else {
      const missingAttribute = X === undefined ? "X" : "Y";
      res
        .status(400)
        .send(`Please provide the missing attribute: ${missingAttribute}`);
    }
    return;
  }

  // Check for division by zero
  if (parseFloat(Y) === 0) {
    res.status(400).send("Error: Division by zero is not allowed.");
    return;
  }

  const result = parseFloat(X) / parseFloat(Y);

  // Format the division response with error handling
  const divResponse = isNaN(result)
    ? "Invalid input: Please provide valid numbers for division."
    : `The division of ${X} by ${Y} is ${result}`;

  res.send(divResponse);
};
