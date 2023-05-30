const contarVocales = palabra => {

    const vocales = "aáeéiíoóuú";
    let cantidadVocales = 0;
    for (const letra of palabra) {
        if (vocales.includes(letra.toLowerCase())) {
            cantidadVocales++;
        }
    }
    return cantidadVocales;
};

const cadena = "Hola mundo. Estoy estudiando programación en JavaScript con Factoría F5";
const vocales = contarVocales(cadena);
console.log("La cadena '%s' tiene %d vocales", cadena, vocales);