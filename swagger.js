const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const fs = require('fs');
const path = require('path');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Documentación Colegio Catolico Api',
            version: '1.0.0',
            description: 'Documentación de la API de gestor de pagos de Colegio Catolico',
        },

    },
    apis: ['./src/routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

function swaggerDocs(app, port) {

    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

    app.get('/swagger.json', (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(swaggerSpec);
    });

    const outputPath = path.join(__dirname, 'swagger-output.json');
    if (!fs.existsSync(outputPath)) {
        fs.writeFileSync(outputPath, JSON.stringify(swaggerSpec, null, 2), 'utf-8');
        console.log(`Archivo JSON de Swagger guardado en ${outputPath}`);
    } else {
        console.log(`Archivo JSON de Swagger ya existe en ${outputPath}`);
    }

    console.log(`Swagger docs disponible en http://localhost:${port}/api-docs`);
}

module.exports = swaggerDocs;
