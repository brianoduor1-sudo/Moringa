const fs = require("fs");
const data = require("./data.json");

const output = [];

for (let i = 0; i < data.length; i++) {
  const user = data[i];

  let title;

  if (user.gender === "Male") {
    title = "Sir";
  } else if (user.gender === "Female") {
    title = "Madam";
  } else {
    title = "Applicant";
  }

  const message = `Dear ${title} ${user.first_name} ${user.last_name},

We regret to inform you that you will not be going to the next stage of the interview process.

Reason:
Unfortunately, you were not the best fit for this position.

Thank you for your interest in our company, and we wish you success in your future applications.

Email: ${user.email}
Phone: ${user.phone}
`;

  output.push({
    id: user.id,
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
    gender: user.gender,
    phone: user.phone,
    message: message
  });
}

// Write the output array to output.json
fs.writeFileSync(
  "./output.json",
  JSON.stringify(output, null, 2)
);

console.log("output.json created successfully!");


