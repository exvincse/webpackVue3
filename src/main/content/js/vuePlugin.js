import filters from './filter';

let plugin = {
    install: (app, options) => {
        const App = app.config.globalProperties;
        App.$filters = filters;
        App.$func = (params) => console.log(params);
    }
}
export default plugin;