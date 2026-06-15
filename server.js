const dotenv = require('dotenv');
dotenv.config();     // is used to load environment variables from a .env file into process.env.
                     // without it mongo uri , jwt secret won't be loaded
const app = require('./src/app');
const connectDB = require('./src/db/db');
const PORT = 3000;
connectDB();
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    } );

