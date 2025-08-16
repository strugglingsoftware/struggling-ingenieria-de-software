---
comments: true 
---
# Despliegue en Ambientes: Cómo y Dónde Subir tu Aplicación

Desplegar una aplicación no es solo "subir el código a producción". En realidad, existen distintos entornos donde la aplicación puede vivir antes de llegar al usuario final, y cada uno cumple un propósito distinto.

Los ambientes más comunes son:

* **Desarrollo (Dev):** Es donde los desarrolladores trabajan día a día. Aquí todo puede fallar, probarse o romperse sin afectar al resto del equipo o al cliente.
* **QA o Staging:** Son entornos de pruebas. En QA, testers o el equipo validan funcionalidades. Staging, por otro lado, simula lo más parecido posible a producción, y sirve como último paso antes de lanzar.
* **Producción (Prod):** Es el entorno real, donde los usuarios finales interactúan con la aplicación. Acá no hay margen para errores.

## ¿Por qué importa conocer esto?

Porque el proceso de despliegue puede ser diferente en cada uno. Además, entender las diferencias te ayuda a prevenir errores como "me olvidé de configurar esto para producción" o "esto funcionaba en desarrollo pero no en prod".

En los ambientes de desarrollo (Dev), es común realizar cambios manuales durante el proceso de trabajo. Esto es porque los desarrolladores están probando y ajustando constantemente el código, lo que a veces requiere una interacción más directa con el entorno. En el ambiente de QA, aunque los cambios manuales no deberían ser la norma, a menudo existe un acceso un poco más flexible para pruebas y ajustes rápidos. Sin embargo, este ambiente aún debe estar controlado y cualquier cambio realizado aquí debería ser mínimo, ya que su propósito es verificar que todo funcione correctamente antes de pasar a producción. En producción (Prod), sin embargo, cualquier tipo de cambio manual está totalmente prohibido. El propósito de este entorno es garantizar que la aplicación esté estable y funcional para los usuarios finales. Cualquier ajuste o corrección debe pasar por el mismo proceso de desarrollo y pruebas que las nuevas funcionalidades.

## Automatización ante todo

Lo ideal es automatizar los despliegues desde el primer momento. Puedes usar pipelines de $CI/CD$ (como GitHub Actions, GitLab CI, Jenkins, etc.) para que cada cambio pase por pruebas y llegue al ambiente que corresponda sin intervención manual.

Automatizar:
* Ahorra tiempo.
* Reduce errores humanos.
* Te permite hacer despliegues frecuentes sin miedo.

## Infraestructura y arquitectura

El tipo de infraestructura con la que cuentas afecta directamente cómo vas a desplegar.

| Máquinas virtuales o hosting tradicional | Serverless o servicios administrados en la nube |
| :--- | :--- |
| Vas a tener que encargarte de levantar los servicios, configurar el sistema operativo, manejar el servidor web, etc. | Probablemente subas el código directamente desde tu pipeline y no tengas que preocuparte por servidores. |

Además, tu elección de arquitectura también influye: un monolito se despliega como una sola unidad, mientras que en microservicios cada servicio puede tener su propio pipeline y su propio entorno, lo que agrega flexibilidad, pero también complejidad.

Ojo con el orden: En arquitecturas distribuidas, el orden de despliegue sí importa. A veces desplegar una parte antes que otra puede romper todo. Por eso es clave planificar bien los despliegues y usar herramientas que te ayuden a orquestarlos correctamente.
