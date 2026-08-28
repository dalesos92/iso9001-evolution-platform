# 📋 Modelo de Scrum & Flujo Kanban para el Backlog de Producto

Este documento define la estructura de gobierno ágil, columnas Kanban, criterios de priorización (WSJF / MoSCoW) y flujo de trabajo para la plataforma ISO 9001.

---

## 🧭 Columnas del Flujo Kanban (End-to-End)

```
 [1. Backlog & Deseos] ➔ [2. Priorizado (Sprint)] ➔ [3. En Desarrollo (SSDLC)] ➔ [4. QA & Verificación] ➔ [5. Completado (Done)]
```

1. **Backlog / Deseos:** Banco de ideas, solicitudes de mercado y requerimientos sin refinar.
2. **Priorizado (Sprint Backlog):** Elementos con criterios de aceptación listos para iniciar desarrollo.
3. **En Desarrollo (SSDLC):** Codificación activa, diseño de interfaces y aplicación de controles de seguridad (*Gate 2 y 3*).
4. **QA & Verificación:** Pruebas unitarias, validación con auditores y pruebas dinámicas de seguridad (*Gate 4*).
5. **Completado (Done):** Desplegado en producción en Vercel, validado por usuarios y registrado en la Base de Conocimiento con su Checkpoint (`CHK-XXX`).

---

## 🏷️ Matriz de Priorización (Criterios)

- 🔴 **P0 / Crítica (Must Have):** Funcionalidad esencial para la operación o requerimiento normativo ineludible (ej. Diff Engine, Enmiendas de Clima 2024).
- 🟡 **P1 / Alta (Should Have):** Agrega valor sustancial de diferenciación y ahorro de tiempo (ej. Data Room, Asistente IA).
- 🔵 **P2 / Media (Could Have):** Mejoras de experiencia y módulos complementarios (ej. Integrador Multi-Norma, Simulador).
- ⚪ **P3 / Deseo (Nice to Have):** Innovaciones futuras a demanda de clientes corporativos.
