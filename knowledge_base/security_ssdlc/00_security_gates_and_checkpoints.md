# 🛡️ Puertas de Seguridad y Control SSDLC (Security Gates)

Este documento define las políticas de control, validación y criterios de paso obligatorio (*Security Gates*) en cada fase del ciclo de vida del desarrollo.

---

## 🚪 Definición de Puertas de Seguridad (Gates)

```
 [Requerimientos] ──(Gate 1)──> [Arquitectura] ──(Gate 2)──> [Construcción] ──(Gate 3)──> [Verificación] ──(Gate 4)──> [Despliegue]
```

### 🚪 Gate 1: Requerimientos Seguros & Privacidad por Diseño
- **Responsable:** Agente Funcional & Agente SecArch.
- **Criterios de Aprobación:**
  - [x] Identificación de datos sensibles o clasificados (diagnósticos de empresa, propiedad intelectual de SGC).
  - [x] Definición de controles de acceso basados en roles (RBAC).
  - [x] Registro en la Base de Conocimiento con su Checkpoint (`CHK-XXX`).

### 🚪 Gate 2: Modelado de Amenazas y Diseño Seguro
- **Responsable:** Agente SecArch & Threat Modeling.
- **Criterios de Aprobación:**
  - [x] Revisión STRIDE sobre endpoints y modelos de datos.
  - [x] Políticas de sanitización y validación estricta de esquemas (JSON Schema / Zod / Pydantic).
  - [x] Especificación de cifrado (TLS 1.3 en tránsito, AES-256 en reposo).

### 🚪 Gate 3: Construcción Segura y Análisis Estático (SAST)
- **Responsable:** Agente Dev & Secure Coding.
- **Criterios de Aprobación:**
  - [x] Cero vulnerabilidades críticas/altas en dependencias (SCA).
  - [x] Sin credenciales, tokens o secretos hardcodeados.
  - [x] Validación y escape riguroso contra inyecciones (SQLi, XSS, NoSQLi).

### 🚪 Gate 4: Pruebas Dinámicas y Aceptación (DAST / QA)
- **Responsable:** Agente QA & Security Audit.
- **Criterios de Aprobación:**
  - [x] 100% de pruebas unitarias y de integración de lógica de negocio aprobadas.
  - [x] Validación de límites en el motor de comparación de cláusulas.
  - [x] Auditoría de control de acceso horizontal y vertical (BOLA/BFLA).

### 🚪 Gate 5: Entrega y Sincronización de Conocimiento
- **Responsable:** Agente DevSecOps & Knowledge Integrator.
- **Criterios de Aprobación:**
  - [x] Actualización automática de la Base de Conocimiento (`.md`).
  - [x] Trazabilidad completa desde el requerimiento hasta el código entregado.
