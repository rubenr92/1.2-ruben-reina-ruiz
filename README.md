#Bridge

Bridge es un patrón de diseño estructural que propone dividir la clase principal en dos, la abstracción y la implementación con el objetibo de obtener un código que pueda modificarse eficientemente evitando clases demasiado complejas o un número excesivo de clases.


####Abstracción e implementación
La abstracción sirve de controlador, podiendo incluir alguna funcionalidad extra dependiente de la definida en la implementación. Esto se consigue mediante la creación de un atributo de la abstracción que contenga una istancia de la implementación  y el uso de sus métodos.
La implementación contiene todo el código de bajo nivel y declara una interfaz que sera usada por las subclases en caso de que sea necesario.
El patrón bridge define también las categorias de abstracción refinada e implementaciones concretas para programas de mayor magnitud en las que entrarían las subclases de abstracción e implementacion.

####Ventajas
- Mejora la extensibilidad: se pueden extender las jerarquías de abstracción e implementación independientemente.
- Permite delimitar las reponsabilidades de cada grupo jerárquico.

####Pseudocódigo
Ejemplos de programas que siguen el patrón bridge podrían ser: un calendario que incluya funcionalidades de lista de tareas o una aplicación de lista de tareas que será usada por diferentes cli.

	`class calendario{
			constructor(){
				tareas: 
			}
			tareasSemanales(){
				mostrar()
				...
			}
	}
	class Tareas{
			añadir()
			mostrar()
		}´