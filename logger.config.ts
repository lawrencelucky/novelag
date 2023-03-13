import constants from '@config/constants';

const { development } = constants.ENVIRONMENT;

const logger = <T>(log: T): void => {
    console.log(log);
};

export default logger;
