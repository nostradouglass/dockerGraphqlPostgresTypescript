import { Router } from 'express';


// User-route
const router = Router();

router.get('/', (req, res) => {
    res.send("index route")
})


export default router;
