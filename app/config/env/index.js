import rootPath from 'app-root-path';
import 'dotenv/config';
import development from './development';
import production from './production';
import test from './test';

const currentEnv = {
    development,
    production,
    test
}[process.env.NODE_ENV || 'development'];
// []picks out values from array or object

export default {
    ...process.env,
    ...currentEnv
}