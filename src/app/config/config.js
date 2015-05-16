app.config = {
    "api": {
        host: "api.mywebdesign.dev",
        protocol: "http",
        port: "80",
        getUrl: function getUrl(){
            return app.config.api.protocol + "://" + app.config.api.host + ":" + app.config.api.port;  
        }
    }
}