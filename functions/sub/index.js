exports.subFunction = (req, res) => {
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
          "Please provide both numbers (X and Y) to perform the subtraction."
        );
    } else {
      const missingAttribute = X === undefined ? "X" : "Y";
      res
        .status(400)
        .send(`Please provide the missing attribute: ${missingAttribute}`);
    }
    return;
  }

  const result = parseFloat(X) - parseFloat(Y);

  // Format the subtraction response with error handling
  const subResponse = isNaN(result)
    ? "Invalid input: Please provide valid numbers for subtraction."
    : `The subtraction of ${Y} from ${X} is ${result}`;

  res.send(subResponse);
};
