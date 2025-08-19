---
comments: true 
---
# Capítulo 6: Pruebas de Software: Asegurando la Calidad

Probar tu aplicación no es opcional: es esencial para asegurar que funcione correctamente, evitar errores graves y ofrecer una buena experiencia al usuario. Las pruebas te permiten validar que lo que desarrollaste cumple con los requerimientos y se comporta correctamente en distintos escenarios.

## ¿Por qué hacer pruebas?

* Detectas errores antes de que lleguen a producción.
* Reduce los costos de mantenimiento.
* Aumenta la confianza en cada nueva funcionalidad.
* Facilita cambios o refactorizaciones futuras sin miedo a romper algo.

## Tipos de pruebas más comunes

Hay muchos tipos de pruebas, pero si estás trabajando en un proyecto pequeño o mediano, puedes enfocarte en estas tres:

* **Pruebas unitarias:** Verifican que funciones o módulos individuales hagan lo que deben. Ejemplo: una función `calcularTotal()` devuelve el número correcto.
* **Pruebas de integración:** Aseguran que distintas partes del sistema trabajen bien juntas, como un endpoint conectándose correctamente a la base de datos.
* **Pruebas end-to-end (E2E):** Simulan el comportamiento real del usuario dentro de la app, como registrarse o realizar un pago. Herramientas útiles para automatizar: Cypress, Playwright, Selenium.

## ¿Cuándo deberías hacer pruebas?

No necesitas tener una cobertura perfecta desde el día uno, pero mientras antes las integres, mejor. Acá algunos momentos clave:

* **Durante el desarrollo (unitarias):** Cada vez que escribas una función importante, agrega una prueba que valide su comportamiento. Si quieres ir más allá, puedes usar **TDD (Test-Driven Development)**: primero escribes la prueba que falla, luego el código que la hace pasar.
* **Al crear nuevas funcionalidades (integración):** Cuando combines varias partes del sistema, asegúrate de probar que todo funcione correctamente. No es necesario cubrir todos los casos desde el inicio, pero sí los flujos principales del usuario.
* **Antes de desplegar (E2E):** Valida que lo más importante (login, registro, pagos, etc.) funcione bien en un entorno lo más parecido posible a producción. Puede ser manual o automatizado.
* **Cuando se corrigen bugs:** Cada vez que arreglas un error, agrega una prueba que asegure que ese bug no vuelva a aparecer sin darte cuenta.

## Automatización de pruebas

Automatizar pruebas te permite ejecutarlas fácilmente y en todo momento sin tener que revisar cada cosa a mano. Aumentas la calidad del código, ahorras tiempo y puedes integrarlas directamente en tu CI/CD (como GitHub Actions o GitLab CI).

¿Por dónde empezar? Las pruebas unitarias son lo más fácil de automatizar y suelen ser las más rápidas. Crea scripts que corran tus pruebas con un solo comando, e intégralos en tu pipeline para que se ejecuten con cada push o pull-request.

## Buenas prácticas al escribir pruebas

* Mantén las pruebas pequeñas, específicas y fáciles de leer.
* Usa datos de prueba controlados.
* Si dependen de APIs o servicios externos, utiliza *mocks* para no romperlas.
* Asegúrate de que los mensajes de error sean claros y útiles si una prueba falla.

## ¿Y si estás solo y no tienes mucho tiempo?

No hace falta cubrir todo. Prioriza las pruebas más importantes, especialmente en la lógica crítica. Automatiza todo lo que puedas, y apóyate en herramientas como *linters* (ESLint, Pylint) o SonarQube para revisar calidad de código sin tanto esfuerzo manual.
