exports.mulFunction = (req, res) => {
  // Extract numbers from request body with default values
  const X = req.body.X;
  const Y = req.body.Y;

  // Check for missing or invalid numbers
  if (X === undefined || Y === undefined) {
    // Differentiate missing vs. one number provided (informative message)
    if (X === undefined && Y === undefined) {
      res
        .status(400)
        .send(
          "Please provide both numbers (X and Y) to perform the multiplication."
        );
    } else {
      const missingAttribute = X === undefined ? "X" : "Y";
      res
        .status(400)
        .send(`Please provide the missing attribute: ${missingAttribute}`);
    }
    return;
  }

  const result = parseFloat(X) * parseFloat(Y);

  // Format the multiplication response with error handling
  const mulResponse = isNaN(result)
    ? "Invalid input: Please provide valid numbers for multiplication."
    : `The multiplication of ${X} and ${Y} is ${result}`;

  res.send(mulResponse);
};
