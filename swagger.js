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
    apis: ['./src/routes/*.js'], // Ruta a los archivos donde documentas tus rutas
};

const swaggerSpec = swaggerJSDoc(options);

// Función para servir la UI de Swagger y exportar JSON
function swaggerDocs(app, port) {
    // Ruta para la UI de Swagger
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

    // Ruta para obtener el archivo JSON
    app.get('/swagger.json', (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(swaggerSpec);
    });

    // Verificar si el archivo JSON ya existe
    const outputPath = path.join(__dirname, 'swagger-output.json');
    if (!fs.existsSync(outputPath)) {
        // Guardar el archivo JSON en el sistema de archivos si no existe
        fs.writeFileSync(outputPath, JSON.stringify(swaggerSpec, null, 2), 'utf-8');
        console.log(`Archivo JSON de Swagger guardado en ${outputPath}`);
    } else {
        console.log(`Archivo JSON de Swagger ya existe en ${outputPath}`);
    }

    console.log(`Swagger docs disponible en http://localhost:${port}/api-docs`);
}

module.exports = swaggerDocs;
