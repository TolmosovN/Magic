const app = require('./app');
require('dotenv').config();
const PORT = process.env.PORT || 3000;
app.listen(PORT, (error) => {
  console.log(error);

  console.log('Server has started on port', PORT);
});
