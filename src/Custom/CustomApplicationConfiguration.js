import {setConfiguration} from '@configuratorware/configurator-frontendgui/App/configuration';
import Api from '@configuratorware/configurator-frontendgui/Framework/Api';

const prod = process.env.NODE_ENV === 'production';

const envDomains = {
    test: '',
    int: '',
    local: 'http://localhost:8080',
    prod: '',
};

const domain = envDomains[prod ? 'prod' : 'local'];

const query = new URLSearchParams(location.search);

const adminMode = query.get('_adminmode');

const customApplicationConfiguration = {
    network: {
        // timeout: 40000,
        host: domain,
        baseURL: `${domain}/frontendapi/`,
        adminBaseURL: `${domain}/api/`,
        imageURL: `${domain}`,
        resourcesURL: `${domain}`,
    },
    availableTools: {
        fastConfiguration: false,
        save: true,
        load: true,
        share: false,
        print: false,
    },
    disableBeforeunloadWarning: true
};

setConfiguration(customApplicationConfiguration);

if (adminMode) {
    // in admin mode all requests should contain the no-cache header to get the most fresh content
    Api.setCacheControlHeader('no-cache');
}

export default customApplicationConfiguration;
