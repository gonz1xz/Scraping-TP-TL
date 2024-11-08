# Proyecto de Scraping de Rankings de Lenguajes de Programación

Este proyecto ha sido desarrollado como parte de la materia **Taller de Lenguajes** y tiene como objetivo realizar scraping de diversos sitios web que publican rankings de popularidad de lenguajes de programación. La información recopilada se almacena en un archivo CSV, facilitando un análisis más claro y estructurado de los datos.

## Descripción del Proyecto

El proyecto scrapea datos de las siguientes fuentes de rankings de lenguajes de programación:

1. **PYPL (PopularitY of Programming Language Index)**: Mide la popularidad de los lenguajes de programación en función de la frecuencia con la que se buscan tutoriales en Google. Cuanto más se busca un lenguaje, más popular se considera.
   
2. **TIOBE Index**: Clasifica los lenguajes de programación basándose en el número de resultados de búsqueda en diversos motores de búsqueda. Este índice se utiliza para ver qué lenguajes están más presentes en la web.
   
3. **Crossover**: Proporciona un ranking actualizado de los lenguajes de programación más demandados en el año 2024, lo que ayuda a identificar cuáles son los más solicitados en el mercado laboral actual.

## Instrucciones de Instalación

Para ejecutar este proyecto, sigue estos pasos:

1. Clona este repositorio o descárgalo en tu máquina local:
   ```bash
   git clone https://github.com/gonz1xz/Scraping-TP-TL.git

2. Navega al directorio:
   ```bash
   cd nombre-del-proyecto

3. Instala las dependencias necesarias, incluyendo **Playwright**:
   ```bash
   npm install
   npx playwright install

4. Ejecuta el script:
   ```bash
   node index.js

## Salida
Este script generará un archivo denominado `rankingLenguajes.csv`, el cual puede abrirse como una hoja de cálculo para facilitar su visualización y análisis. El archivo incluirá en su encabezado el nombre de la fuente de cada dato, y cada columna contendrá la posición del lenguaje en el ranking junto a su nombre correspondiente.

## Conclusión
Se observa que Python ocupa el primer puesto en todos los rankings, lo que lo posiciona como el lenguaje más utilizado y demandado en el mercado laboral. En los siguientes puestos, en el ranking TIOBE, se encuentra C++ en segundo lugar, mientras que en el ranking PYPL, Java ocupa dicha posición. Por otro lado, según el informe de Crossover, el segundo lenguaje más demandado en el mercado laboral es JavaScript, seguido por Java. Finalmente, dentro del top 5 de los rankings de lenguajes más buscados, destacan C, C++ y C#, aunque en el análisis de Crossover únicamente aparece C#.
