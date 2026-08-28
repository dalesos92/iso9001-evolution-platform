# 📚 Base de Conocimiento Central (KB) & Marco SSDLC Multi-Agente

Bienvenido al repositorio central de conocimiento del proyecto. Esta base de conocimiento opera como la **fuente única de verdad (SSOT)** y se actualiza de forma incremental tras cada cambio aprobado.

---

## 🎯 Estructura de la Base de Conocimiento

```
knowledge_base/
├── README.md                                  # [ESTE ARCHIVO] Mapa maestro y gobernanza
├── architecture/
│   └── agent_architecture_ssdlc.md           # Definición del modelo de Agentes E2E y SSDLC
├── functional/
│   ├── 00_functional_checkpoints.md          # Bitácora de Puntos de Control y Cambios Exitosos
│   ├── 01_iso9001_domain_model.md            # Dominio normativo ISO 9001 y su evolución
│   └── 02_plain_language_engine.md           # Criterios del motor de simplificación (Poka-Yoke)
└── security_ssdlc/
    └── 00_security_gates_and_checkpoints.md  # Puertas de enlace de seguridad por fase E2E
```

---

## 🤖 Red de Agentes Especializados (End-to-End SSDLC)

| Rol del Agente | Fase SSDLC | Responsabilidad Principal |
| :--- | :--- | :--- |
| **🕵️ Agente Funcional & Calidad (SGC Lead)** | Requerimientos & Gobernanza | Mapeo normativo ISO, registro de requerimientos y recopilación de Puntos de Control en KB. |
| **🛡️ Agente SecArch & Threat Modeling** | Arquitectura & Diseño | Modelado de amenazas (STRIDE/OWASP), diseño seguro y definición de contratos de datos. |
| **💻 Agente Dev & Secure Coding** | Construcción & Codificación | Desarrollo modular, sanitización de inputs, validación estricta y cumplimiento de estándares. |
| **🔍 Agente QA & Security Audit (DAST/SAST)** | Verificación & Pruebas | Pruebas funcionales, tests de regresión, auditoría de seguridad y validación de aceptación. |
| **🚀 Agente DevSecOps & Release** | Despliegue & Operación | Empaquetado seguro, verificación de integridad y control de versiones. |

---

## 📌 Regla Operativa de Actualización
Cada solicitud de cambio exitosa activará el **Agente Funcional**, el cual:
1. Validará el cumplimiento del criterio de aceptación.
2. Registrará el cambio en `functional/00_functional_checkpoints.md` con su identificador único (ej: `CHK-001`).
3. Actualizará o creará el archivo `.md` de dominio correspondiente para mantener la base de conocimiento compacta y optimizada.
