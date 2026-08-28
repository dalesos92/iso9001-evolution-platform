# 💡 Motor "A Prueba de Fallos" (Poka-Yoke & Plain Language Engine)

Este documento especifica la metodología de traducción de la norma ISO 9001 a lenguaje llano y el algoritmo de cálculo de madurez para el autodiagnóstico.

---

## 🎯 Filosofía Poka-Yoke aplicada a Sistemas de Calidad

Los Sistemas de Gestión de la Calidad tradicionales suelen fallar en las PYMES y empresas en crecimiento por tres razones:
1. **Sobrecarga de lenguaje abstracto:** Términos como *"determinar la pertinencia de las cuestiones"* confunden a los líderes de proceso.
2. **Burocracia documental:** Creación de manuales y procedimientos extensos que nadie consulta.
3. **Auditorías punitivas:** Miedo al auditor en lugar de usar el SGC como una palanca de rentabilidad y satisfacción del cliente.

El enfoque **Poka-Yoke** de la plataforma divide cada requisito en 4 dimensiones de asimilación rápida:

```
                      ┌────────────────────────────────────────┐
                      │    ESTRUCTURA DE FICHA POR CLÁUSULA    │
                      └───────────────────┬────────────────────┘
                                          │
    ┌──────────────────────┬──────────────┴───────┬──────────────────────┐
    ▼                      ▼                      ▼                      ▼
┌──────────────┐   ┌──────────────┐       ┌──────────────┐       ┌──────────────┐
│  1. ESPAÑOL  │   │  2. CASOS    │       │ 3. CHECKLIST │       │  4. TEXTO    │
│    SIMPLE    │   │    REALES    │       │   AUDITORÍA  │       │   OFICIAL    │
│    (ELI5)    │   │ (POR SECTOR) │       │   (EVIDENCIA)│       │  NORMATIVO   │
└──────────────┘   └──────────────┘       └──────────────┘       └──────────────┘
```

---

## 📊 Algoritmo de Cálculo de Madurez (Gap Analysis)

Para el autodiagnóstico rápido, cada reactivo se pondera con una escala de 3 niveles:
- **Totalmente Implementado (🟢):** 100 puntos (Evidencia documentada, en uso y revisada).
- **Parcial / En Proceso (🟡):** 50 puntos (Práctica informal existente o documentación sin finalizar).
- **No Implementado (🔴):** 0 puntos (Inexistencia de control o evidencia).

$$\text{Puntaje Global} = \frac{\sum_{i=1}^{N} \text{Puntos}_i}{N}$$

### Rangos de Diagnóstico y Recomendación:
- **$\ge 85\%$:** *Avanzado* — Sistema maduro; enfoque en auditoría interna y optimización.
- **$60\% - 84\%$:** *Intermedio* — En transición; requiere formalización de riesgos y liderazgo directivo.
- **$40\% - 59\%$:** *Básico* — Brechas importantes; adopción prioritaria de plantillas estructuradas.
- **$< 40\%$:** *Crítico* — Fase inicial; requiere implementación guiada desde el Capítulo 4 (Contexto).
