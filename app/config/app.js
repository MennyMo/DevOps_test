import { json, urlencoded } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import config from './env';
import router from '../routes';


const Ddos =  require('ddos');

const app = exp => {
    exp.use(helmet());
    exp.use(cors());

    const ddos = new Ddos();
    exp.use(ddos.express);
    exp.use(json({ limit: '2mb' }));
    exp.use(urlencoded({ limit: '2mb', extended: true }));

    exp.get('/', (req, res) => {
        return res.status(200).json({
            message: 'Welcome to Molly app.'
        });
    });

    // register route here
    exp.use('/v1', router);

    exp.use((req, res) => {
        return res.status(404).json({
            message: 'Route does not exist.'
        });
    });

    const port = config.PORT || 3000;

    const server = exp.listen(port, () => {
        console.log(`App is running on ${port}`);
    });

    server.setTimeout(20000);

};

export default app;

