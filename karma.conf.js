module.exports = function (config) {
    config.set({
        frameworks: ["jasmine", "karma-typescript"],
        files: [
            { pattern: "src/**/*.ts" },
            { pattern: "test/*.ts" }
        ],
        preprocessors: {
            "**/*.ts": ["karma-typescript"], // *.tsx for React Jsx 
        },
        reporters: ["progress", "karma-typescript"],
        browsers: ["Chrome"],
        karmaTypescriptConfig: {
            compilerOptions: {
                declaration: false,
                emitDecoratorMetadata: true,
                experimentalDecorators: true,
                lib: ["es6", "dom"],
                mapRoot: "./",
                module: "commonjs",
                moduleResolution: "node",
                noEmitOnError: true,
                noImplicitAny: false,
                sourceMap: true,
                target: "es5"
            },
        },
        singleRun: true
    });
};
