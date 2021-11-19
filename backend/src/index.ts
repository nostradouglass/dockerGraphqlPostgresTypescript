import './pre-start'; // Must be the first import
import app from '@server';



// Start the server
const port = Number(process.env.PORT || 4000);
app.listen(port, () => {
    console.info('Express server started on port: ' + port);
});
