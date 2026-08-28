# 📁 Sala Virtual de Auditoría Express (Virtual Audit Data Room - WSH-03)

Este documento define los requerimientos funcionales, arquitectura de seguridad y modelo de datos para el Data Room de Auditorías ISO 9001 / ISO 19011.

---

## 🎯 Problema de Mercado que Resuelve
Durante las auditorías de certificación o seguimiento (Fase 1 Documental y Fase 2 en Sitio/Remota), las empresas pierden entre el **30% y el 40% del tiempo útil buscando archivos, versiones desactualizadas y correos dispersos**.

El **Virtual Audit Data Room** proporciona una bóveda estructurada según la **Estructura Armonizada (Capítulos 4 al 10)** donde el auditor externo puede inspeccionar todas las evidencias obligatorias con un solo clic mediante credenciales de solo lectura temporales.

---

## 📋 Matriz de Evidencias Mínimas por Cláusula

| Cap. | Cláusula | Código Doc. | Nombre de la Evidencia | Frecuencia de Actualización |
| :--- | :--- | :--- | :--- | :--- |
| **4** | 4.1 & 4.2 | `EVD-401` | Matriz de Contexto DOFA, PESTEL & Evaluación Climática (2024) | Anual |
| **5** | 5.2 | `EVD-501` | Política de Calidad firmada y Acta de Difusión | Cada 2 años o cambio estratégico |
| **6** | 6.1 | `EVD-601` | Matriz Integral de Riesgos y Oportunidades con Planes de Mitigación | Semestral |
| **7** | 7.2 | `EVD-701` | Matriz de Competencias, Perfiles de Cargo y Evaluaciones de Desempeño | Anual |
| **8** | 8.4 | `EVD-801` | Registro de Evaluación y Selección de Proveedores Críticos | Anual |
| **9** | 9.2 & 9.3 | `EVD-901` | Informe de Auditoría Interna (ISO 19011) y Acta de Revisión por la Dirección | Anual obligatorio |
| **10** | 10.2 | `EVD-101` | Registro de No Conformidades, Análisis de Causa Raíz (5 Porqués) y Cierres | Continuo |

---

## 🛡️ Controles de Seguridad (SSDLC Gates 1 a 3)

1. **Permisos de Solo Lectura (Read-Only Tokens):** Los auditores no pueden alterar ni eliminar archivos.
2. **Tokens con Expiración Temporal:** Enlaces válidos por 24h, 48h o 7 días durante la jornada de auditoría.
3. **Control de Integridad (SHA-256):** Cada evidencia cuenta con un hash de integridad para certificar que el archivo mostrado es la versión oficial aprobada.
4. **Log de Auditoría Inmutable:** Registro de visualizaciones y descargas por parte del auditor.
