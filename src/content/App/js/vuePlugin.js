import filters from './filter';

let plugin = {
    install: (app, options) => {
        app.config.globalProperties.$filters = filters;
    }
}
export default plugin;