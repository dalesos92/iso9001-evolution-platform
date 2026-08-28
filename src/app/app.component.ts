import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface ClauseData {
  id: string;
  number: string;
  title: string;
  chapter: number;
  pdca: 'Planear' | 'Hacer' | 'Verificar' | 'Actuar';
  impact: 'Alto' | 'Medio' | 'Bajo';
  diffType: 'new' | 'modified' | 'relocated';
  v2008: {
    clause: string;
    summary: string;
    status: string;
  };
  v2015: {
    clause: string;
    summary: string;
    status: string;
  };
  v2026: {
    clause: string;
    summary: string;
    status: string;
  };
  officialText: string;
  plainSpanish: string;
  realWorldExamples: {
    industry: string;
    example: string;
  }[];
  auditorChecklist: string[];
  pokaYokeTip: string;
}

export interface GapQuestion {
  id: number;
  clause: string;
  question: string;
  hint: string;
  selectedOption: 'none' | 'partial' | 'full';
}

export interface TemplateItem {
  id: string;
  title: string;
  clause: string;
  format: string;
  description: string;
  tags: string[];
  fields: string[];
}

export type KanbanColumnId = 'backlog' | 'prioritized' | 'in_progress' | 'qa' | 'done';

export interface KanbanItem {
  id: string;
  title: string;
  description: string;
  columnId: KanbanColumnId;
  epic: 'Motor IA' | 'Auditoría & Evidencias' | 'Normativa & Diff' | 'Multi-Norma' | 'SSDLC' | 'Reportes';
  priority: 'P0' | 'P1' | 'P2' | 'P3';
  storyPoints: number;
  ssdlcGate: 'Gate 1' | 'Gate 2' | 'Gate 3' | 'Gate 4' | 'Gate 5';
  assigneeAgent: string;
  tag?: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Navigation State
  activeSection: string = 'hero';

  // Version Comparison Mode: '2008_vs_2015' | '2015_vs_2026'
  comparisonMode: '2008_vs_2015' | '2015_vs_2026' = '2015_vs_2026';

  // Plain Language Card Active Tab
  activePlainTab: 'plain' | 'official' | 'examples' | 'audit' = 'plain';

  // Selected Clause
  selectedClauseId: string = '4.1';

  // Selected Template for Preview Modal
  activeTemplateModal: TemplateItem | null = null;

  // Search Filter
  searchTerm: string = '';

  // Kanban Filter States
  selectedKanbanEpic: string = 'all';
  selectedKanbanPriority: string = 'all';
  showNewItemModal: boolean = false;

  // Scrum Master Agent State
  activeScrumTab: 'board' | 'standup' | 'dod' | 'goal' = 'board';
  dailyExecutionMessage: string = '';

  // Sprint Goal
  currentSprintGoal: string = 'Entregar el MVP funcional de la plataforma ISO 9001 con comparador evolutivo, traducción en lenguaje simple, cálculo de brechas y gobierno de Backlog Scrum.';

  // Definition of Done (DoD) Checklist
  dodChecklist: { id: string; label: string; done: boolean; gate: string }[] = [
    { id: 'dod-1', label: '100% Criterios de Aceptación Funcionales validados y operativos.', done: true, gate: 'Gate 1' },
    { id: 'dod-2', label: 'Modelado de amenazas STRIDE y sanitización de inputs.', done: true, gate: 'Gate 2' },
    { id: 'dod-3', label: 'Código limpio, tipado estricto y cero secretos en repo.', done: true, gate: 'Gate 3' },
    { id: 'dod-4', label: 'Compilación ng build exitosa y pruebas de interfaz aprobadas.', done: true, gate: 'Gate 4' },
    { id: 'dod-5', label: 'Registro de Checkpoint (CHK-XXX) en Base de Conocimiento y Push a GitHub.', done: true, gate: 'Gate 5' }
  ];

  // Daily Standup Report per Agent
  agentStandups = [
    {
      agent: '🧭 Agente Scrum Master',
      role: 'Facilitador Ágil & Delivery Lead',
      status: '🟢 Activo - Sprint en Curso',
      yesterday: 'Estructuración del Backlog de Producto y definición del DoD.',
      today: 'Monitoreo del flujo Kanban y sincronización con Vercel.',
      blockers: 'Ninguno. Velocidad del equipo: 31 pts entregados.',
      emoji: '🧭'
    },
    {
      agent: '🕵️ Agente Funcional / SGC',
      role: 'Product Owner & Calidad ISO',
      status: '🟢 Activo',
      yesterday: 'Lista de deseos del mercado (WSH-01 a 06) y fichas Poka-Yoke.',
      today: 'Especificación detallada de la Épica Copilot IA (WSH-01).',
      blockers: 'Ninguno.',
      emoji: '🕵️'
    },
    {
      agent: '🛡️ Agente SecArch',
      role: 'Seguridad & Modelado de Amenazas',
      status: '🟢 Activo',
      yesterday: 'Verificación de compuertas SSDLC Gates 1-3 y prevención de fuga de credenciales.',
      today: 'Revisión de arquitectura para el Data Room seguro (WSH-03).',
      blockers: 'Ninguno.',
      emoji: '🛡️'
    },
    {
      agent: '💻 Agente Dev Seguro',
      role: 'Construcción Frontend & Backend',
      status: '🟢 Activo',
      yesterday: 'Implementación del Tablero Kanban y controles dinámicos en Angular.',
      today: 'Optimización de bundle y componentes interactivos.',
      blockers: 'Ninguno. Build pasando en 5s.',
      emoji: '💻'
    },
    {
      agent: '🔍 Agente QA & Audit',
      role: 'Verificación & Auditoría ISO 19011',
      status: '🟢 Activo',
      yesterday: 'Validación de 4 vistas por cláusula y fórmulas de Gap Analysis.',
      today: 'Pruebas de estrés y límites en transición de tarjetas Kanban.',
      blockers: 'Ninguno.',
      emoji: '🔍'
    },
    {
      agent: '🚀 Agente DevSecOps',
      role: 'Release & Base de Conocimiento',
      status: '🟢 Activo',
      yesterday: 'Despliegue automatizado en GitHub / Vercel.',
      today: 'Sincronización continua de checkpoints en archivos .md.',
      blockers: 'Ninguno.',
      emoji: '🚀'
    }
  ];

  // New Item Form Data
  newItem: Partial<KanbanItem> = {
    title: '',
    description: '',
    columnId: 'backlog',
    epic: 'Motor IA',
    priority: 'P1',
    storyPoints: 5,
    ssdlcGate: 'Gate 1',
    assigneeAgent: '🕵️ Agente Funcional'
  };

  // Kanban Columns Definition
  kanbanColumns: { id: KanbanColumnId; title: string; emoji: string; color: string }[] = [
    { id: 'backlog', title: 'Backlog & Deseos', emoji: '💡', color: 'var(--text-muted)' },
    { id: 'prioritized', title: 'Priorizado (Sprint)', emoji: '🎯', color: 'var(--accent-cyan)' },
    { id: 'in_progress', title: 'En Desarrollo (SSDLC)', emoji: '⚙️', color: 'var(--accent-amber)' },
    { id: 'qa', title: 'QA & Verificación', emoji: '🧪', color: 'var(--accent-purple)' },
    { id: 'done', title: 'Completado (Done)', emoji: '✅', color: 'var(--accent-emerald)' }
  ];

  // Kanban Items Backlog Data (including Wishlist & Current Architecture)
  kanbanItems: KanbanItem[] = [
    {
      id: 'CHK-001',
      title: 'Línea Base: Requerimientos, Dominio ISO y SSDLC Multi-Agente',
      description: 'Definición de requerimientos técnicos, arquitectura de agentes y compuertas de seguridad en Base de Conocimiento .md.',
      columnId: 'done',
      epic: 'SSDLC',
      priority: 'P0',
      storyPoints: 8,
      ssdlcGate: 'Gate 5',
      assigneeAgent: '🕵️ Agente Funcional / SGC'
    },
    {
      id: 'CHK-002',
      title: 'Landing Page MVP con Comparador Diff y Ficha Humana',
      description: 'Desarrollo en Angular de Landing Page, motor Split-View de cláusulas, ficha ELI5 de 4 pestañas y cálculo de Gap Analysis.',
      columnId: 'done',
      epic: 'Normativa & Diff',
      priority: 'P0',
      storyPoints: 13,
      ssdlcGate: 'Gate 5',
      assigneeAgent: '💻 Agente Dev Seguro'
    },
    {
      id: 'REQ-003',
      title: 'Tablero Scrum - Kanban Interactivo de Backlog y Deseos',
      description: 'Tablero dinámico de gestión ágil con cálculo de velocidad, filtros por épica y control de flujo SSDLC.',
      columnId: 'done',
      epic: 'SSDLC',
      priority: 'P0',
      storyPoints: 5,
      ssdlcGate: 'Gate 4',
      assigneeAgent: '💻 Agente Dev & QA'
    },
    {
      id: 'WSH-01',
      title: 'Copilot IA: Redactor Asistido de Políticas y Matrices de Riesgo',
      description: 'Asistente generativo RAG con contexto de ISO 9001 e ISO 31000 para autogenerar borradores conformes en < 2 minutos.',
      columnId: 'prioritized',
      epic: 'Motor IA',
      priority: 'P1',
      storyPoints: 8,
      ssdlcGate: 'Gate 2',
      assigneeAgent: '🛡️ SecArch / IA Lead'
    },
    {
      id: 'WSH-02',
      title: 'Audit Simulator: Simulador de Entrevistas de Auditoría con IA',
      description: 'Bot que asume el rol de Auditor Líder ISO 19011 y realiza preguntas imprevistas por proceso para entrenar al personal.',
      columnId: 'in_progress',
      epic: 'Auditoría & Evidencias',
      priority: 'P2',
      storyPoints: 8,
      ssdlcGate: 'Gate 3',
      assigneeAgent: '💻 Agente Dev Seguro'
    },
    {
      id: 'WSH-03',
      title: 'Data Room Virtual de Auditoría Express (Acceso 1-Clic)',
      description: 'Bóveda centralizada indexada por cláusula donde el auditor externo consulta evidencias con permisos temporales.',
      columnId: 'prioritized',
      epic: 'Auditoría & Evidencias',
      priority: 'P1',
      storyPoints: 5,
      ssdlcGate: 'Gate 1',
      assigneeAgent: '🕵️ Agente Funcional'
    },
    {
      id: 'WSH-04',
      title: 'Integrador Multi-Norma (ISO 9001 + ISO 27001 + ISO 14001)',
      description: 'Mapeo unificado de la Estructura Armonizada (HS) para gestionar Calidad, Ciberseguridad y Medio Ambiente en una sola matriz.',
      columnId: 'backlog',
      epic: 'Multi-Norma',
      priority: 'P2',
      storyPoints: 13,
      ssdlcGate: 'Gate 1',
      assigneeAgent: '🕵️ Agente Funcional'
    },
    {
      id: 'WSH-05',
      title: 'Generador de Dashboards Ejecutivos para Junta Directiva (PDF/PPT)',
      description: 'Generación automática de resúmenes de 1 página con KPIs de calidad, costo de no calidad y retorno de inversión.',
      columnId: 'backlog',
      epic: 'Reportes',
      priority: 'P3',
      storyPoints: 5,
      ssdlcGate: 'Gate 1',
      assigneeAgent: '🕵️ Agente Funcional'
    },
    {
      id: 'WSH-06',
      title: 'Notificaciones Inteligentes de Caducidad de Evidencias (Alertas)',
      description: 'Sistema proactivo de alertas por correo y webhook cuando una matriz o evaluación de proveedores cumple 11 meses.',
      columnId: 'backlog',
      epic: 'Auditoría & Evidencias',
      priority: 'P2',
      storyPoints: 3,
      ssdlcGate: 'Gate 1',
      assigneeAgent: '💻 Dev & DevSecOps'
    }
  ];

  // Master Clauses Data
  clauses: ClauseData[] = [
    {
      id: '4.1',
      number: '4.1',
      title: 'Comprensión de la organización y su contexto (+ Acción Climática)',
      chapter: 4,
      pdca: 'Planear',
      impact: 'Alto',
      diffType: 'modified',
      v2008: {
        clause: 'No existía (Inexistente en 2008)',
        summary: 'En 2008 el alcance se centraba únicamente en los límites físicos y operacionales de la empresa.',
        status: 'No requerido'
      },
      v2015: {
        clause: '4.1 Comprensión de la organización',
        summary: 'Obligatoriedad de analizar factores externos (legales, tecnológicos, sociales) e internos (cultura, valores).',
        status: 'Requisito Clave HLS'
      },
      v2026: {
        clause: '4.1 + Enmienda 2024 (Acción Climática)',
        summary: 'Inclusión explícita y obligatoria de evaluar si el cambio climático es una cuestión relevante para el negocio.',
        status: 'Enmienda Vigente / 2026'
      },
      officialText: 'La organización debe determinar las cuestiones externas e internas que son pertinentes para su propósito y su dirección estratégica... Determinando si el cambio climático es una cuestión relevante (Enmienda 2024).',
      plainSpanish: 'Haz un mapa sincero de qué cosas buenas o malas pasan fuera y dentro de tu empresa (competidores, leyes, proveedores, lluvias extremas o nuevas tecnologías) que puedan ayudarte o perjudicarte para entregar a tiempo.',
      realWorldExamples: [
        {
          industry: 'Agencia de Software / Servicios',
          example: 'Evaluar el riesgo de cortes de luz/internet por clima severo en teletrabajo y la adopción de Inteligencia Artificial de competidores.'
        },
        {
          industry: 'Manufactura / Distribución',
          example: 'Revisar si olas de calor o inundaciones retrasan la llegada de materia prima importada.'
        }
      ],
      auditorChecklist: [
        'Matriz DOFA / PESTEL actualizada en los últimos 12 meses.',
        'Registro explícito del análisis de Cambio Climático (incluso si se concluye que "No Aplica").',
        'Evidencia de que la Gerencia revisó este contexto en la última reunión del SGC.'
      ],
      pokaYokeTip: 'Crea una reunión trimestral de 30 minutos con la gerencia y llena una matriz visual de 1 página. Si el clima no afecta, escribe explícitamente "Evaluado: Sin impacto directo".'
    },
    {
      id: '5.1',
      number: '5.1',
      title: 'Liderazgo y Compromiso de la Alta Dirección',
      chapter: 5,
      pdca: 'Planear',
      impact: 'Alto',
      diffType: 'modified',
      v2008: {
        clause: '5.5.2 Representante de la Dirección',
        summary: 'Se permitía delegar la gestión del SGC en un único empleado ("El de Calidad").',
        status: 'Figura de Delegación'
      },
      v2015: {
        clause: '5.1 Liderazgo y compromiso',
        summary: 'Desaparece el Representante de la Dirección; la Gerencia General debe rendir cuentas directas.',
        status: 'Rendición Directa'
      },
      v2026: {
        clause: '5.1 Cultura de Calidad y Gobernanza Ética',
        summary: 'Mayor énfasis en la cultura organizacional, bienestar del equipo y conducta ética.',
        status: 'Gobernanza Activa'
      },
      officialText: 'La alta dirección debe demostrar liderazgo y compromiso con respecto al sistema de gestión de la calidad asumiendo la responsabilidad y obligación de rendir cuentas con relación a la eficacia del SGC...',
      plainSpanish: 'El dueño o Gerente General no puede lavarse las manos ni pasarle el trabajo al "encargado de calidad". El líder debe conocer los objetivos, proveer los recursos y dar la cara en las auditorías.',
      realWorldExamples: [
        {
          industry: 'Cualquier Empresa',
          example: 'El Director General asiste a la reunión de apertura de auditoría y explica personalmente los resultados y visión del negocio.'
        }
      ],
      auditorChecklist: [
        'Entrevista directa del auditor al Director General (sin intermediarios que respondan por él).',
        'Presupuesto asignado y aprobado para el mantenimiento del SGC.',
        'Actas de Revisión por la Dirección firmadas por el Gerente.'
      ],
      pokaYokeTip: 'Prepara al Gerente con un "Cheat-Sheet" de 3 preguntas clave: 1. ¿Cuál es la política? 2. ¿Cuáles son los 3 riesgos principales? 3. ¿Cómo medimos el éxito del cliente?'
    },
    {
      id: '6.1',
      number: '6.1',
      title: 'Acciones para abordar Riesgos y Oportunidades',
      chapter: 6,
      pdca: 'Planear',
      impact: 'Alto',
      diffType: 'new',
      v2008: {
        clause: '8.5.3 Acciones Preventivas',
        summary: 'Requisito reactivo aislado al final de la norma tras las no conformidades.',
        status: 'Acción Aislada'
      },
      v2015: {
        clause: '6.1 Pensamiento Basado en Riesgos',
        summary: 'Reemplaza a las acciones preventivas e impregna todo el ciclo de planificación.',
        status: 'Eje Estructural'
      },
      v2026: {
        clause: '6.1 Resiliencia Operativa y Continuidad',
        summary: 'Integración de resiliencia frente a ciberseguridad, disrupciones de cadena y clima.',
        status: 'Resiliencia Total'
      },
      officialText: 'Al planificar el SGC, la organización debe considerar las cuestiones referidas en el apartado 4.1 y los requisitos referidos en el apartado 4.2, y determinar los riesgos y oportunidades que es necesario abordar...',
      plainSpanish: 'No esperes a que el cliente se queje o a que se caiga el servidor para actuar. Piensa antes de empezar qué puede salir mal, qué harás para evitarlo, y qué oportunidades puedes aprovechar.',
      realWorldExamples: [
        {
          industry: 'E-commerce / Retail',
          example: 'Riesgo: Caída de pasarela de pagos en Black Friday. Acción: Contratar pasarela de respaldo secundaria con switch automático.'
        }
      ],
      auditorChecklist: [
        'Matriz de Riesgos y Oportunidades con valoración de probabilidad e impacto.',
        'Planes de mitigación con fechas y responsables asignados.',
        'Evidencia de seguimiento y efectividad de las acciones tomadas.'
      ],
      pokaYokeTip: 'Usa una matriz sencilla de 3x3 (Bajo, Medio, Alto). Evita fórmulas matemáticas complejas que el personal no comprenda.'
    },
    {
      id: '7.5',
      number: '7.5',
      title: 'Información Documentada (Adiós al Manual de Calidad obligatorio)',
      chapter: 7,
      pdca: 'Hacer',
      impact: 'Medio',
      diffType: 'modified',
      v2008: {
        clause: '4.2 Manual de Calidad y 6 Procedimientos',
        summary: 'Obligatoriedad estricta de tener un Manual de Calidad impreso y 6 procedimientos documentados.',
        status: 'Burocrático / Rígido'
      },
      v2015: {
        clause: '7.5 Información Documentada',
        summary: 'Flexibilidad total: software, videos, wikis, Notion o ERP son válidos como información documentada.',
        status: 'Digital y Flexible'
      },
      v2026: {
        clause: '7.5 Integridad y Gobernanza de Datos Digitales',
        summary: 'Enfoque en seguridad de la información, firmas electrónicas y trazabilidad digital.',
        status: 'Gobernanza Digital'
      },
      officialText: 'El SGC de la organización debe incluir la información documentada requerida por esta Norma Internacional y la información documentada que la organización determina como necesaria...',
      plainSpanish: 'Ya nadie te obliga a tener carpetas gordas con sellos ni un "Manual de Calidad" que nadie lee. Puedes usar videos tutoriales, checklists en Notion, registros en tu software o carpetas en Google Drive protegidas.',
      realWorldExamples: [
        {
          industry: 'Empresa Moderna',
          example: 'Reemplazar procedimientos en Word de 20 páginas por videos Loom de 2 minutos para capacitar a nuevos empleados.'
        }
      ],
      auditorChecklist: [
        'Control de versiones (saber cuál es la versión vigente y quién la aprobó).',
        'Acceso controlado y seguro (que personas no autorizadas no modifiquen formatos).',
        'Almacenamiento y preservación que impida la pérdida de datos.'
      ],
      pokaYokeTip: 'Pon la versión y fecha en el encabezado de cada documento o usa Google Docs / Notion con historial de cambios automático.'
    },
    {
      id: '8.4',
      number: '8.4',
      title: 'Control de los Procesos, Productos y Servicios Suministrados Externamente',
      chapter: 8,
      pdca: 'Hacer',
      impact: 'Medio',
      diffType: 'relocated',
      v2008: {
        clause: '7.4 Compras',
        summary: 'Enfocado principalmente en la compra tradicional de insumos físicos.',
        status: 'Compras Físicas'
      },
      v2015: {
        clause: '8.4 Suministros Externos',
        summary: 'Abarca proveedores, servicios tercerizados (outsourcing), filiales y contratistas.',
        status: 'Cadena de Suministro'
      },
      v2026: {
        clause: '8.4 Debida Diligencia y Proveedores Críticos',
        summary: 'Evaluación de seguridad de proveedores de nube/IA, impacto ambiental y continuidad.',
        status: 'Cero Fricción en Cadena'
      },
      officialText: 'La organización debe asegurarse de que los procesos, productos y servicios suministrados externamente son conformes con los requisitos...',
      plainSpanish: 'Si contratas a otra empresa o freelancer para que haga parte de tu trabajo (hosting, transporte o asesoría), tú sigues siendo el responsable frente al cliente. Evalúa a tus proveedores y no compres a ciegas.',
      realWorldExamples: [
        {
          industry: 'Servicios en la Nube / SaaS',
          example: 'Evaluar el Acuerdo de Nivel de Servicio (SLA 99.9%) del proveedor de servidores AWS o Azure.'
        }
      ],
      auditorChecklist: [
        'Criterios definidos para evaluar, seleccionar y reevaluar proveedores.',
        'Registro anual de evaluación de proveedores críticos.',
        'Órdenes de compra o contratos claros con los requisitos exigidos.'
      ],
      pokaYokeTip: 'Haz una lista de tus 5 proveedores más críticos y califícalos una vez al año del 1 al 5 en: ¿Entregó a tiempo? ¿Cumplió la calidad?'
    }
  ];

  // Gap Analysis Mini Diagnostic State
  gapQuestions: GapQuestion[] = [
    {
      id: 1,
      clause: '4.1',
      question: '¿Tienes identificados por escrito los factores externos, internos y el impacto del Cambio Climático en tu negocio?',
      hint: 'Requerido por la Enmienda 2024 de ISO 9001:2015.',
      selectedOption: 'partial'
    },
    {
      id: 2,
      clause: '5.1',
      question: '¿La Alta Dirección asume la rendición de cuentas directa del SGC y participa activamente en las revisiones?',
      hint: 'Sin depender de un "Representante de la Dirección" delegado.',
      selectedOption: 'full'
    },
    {
      id: 3,
      clause: '6.1',
      question: '¿Cuentas con una matriz de riesgos y oportunidades con acciones preventivas y responsables definidos?',
      hint: 'Reemplaza a las antiguas acciones preventivas.',
      selectedOption: 'none'
    },
    {
      id: 4,
      clause: '7.5',
      question: '¿Toda la documentación crítica está bajo control de cambios, sin necesidad de un Manual de Calidad físico?',
      hint: 'Válido en software, Drive, Notion o intranet.',
      selectedOption: 'full'
    },
    {
      id: 5,
      clause: '8.4',
      question: '¿Evalúas anualmente el desempeño de tus proveedores críticos y servicios en la nube/outsourcing?',
      hint: 'Control de procesos tercerizados.',
      selectedOption: 'partial'
    }
  ];

  // Implementation Templates Dataset
  templates: TemplateItem[] = [
    {
      id: 'TMP-01',
      title: 'Matriz de Contexto DOFA + Análisis Climático',
      clause: 'Cláusula 4.1 (Enmienda 2024)',
      format: 'Excel / Notion / Sheets',
      description: 'Plantilla automatizada con fórmulas para priorización de factores externos, internos y evaluación de riesgos por cambio climático.',
      tags: ['Clima 2024', 'DOFA', 'Planear'],
      fields: ['Factor / Tendencia', 'Tipo (Interno/Externo)', 'Impacto Climático (Sí/No)', 'Nivel de Afectación', 'Acción Estratégica']
    },
    {
      id: 'TMP-02',
      title: 'Matriz de Partes Interesadas y Requisitos',
      clause: 'Cláusula 4.2',
      format: 'Excel / Notion',
      description: 'Mapeo visual de Clientes, Accionistas, Empleados, Reguladores y Proveedores con sus necesidades y compromisos del SGC.',
      tags: ['Partes Interesadas', 'Compliance', 'Planear'],
      fields: ['Parte Interesada', 'Necesidad / Expectativa', 'Requisito Legal', 'Cómo lo cumplimos', 'Frecuencia de Medición']
    },
    {
      id: 'TMP-03',
      title: 'Matriz Poka-Yoke de Riesgos y Oportunidades 3x3',
      clause: 'Cláusula 6.1',
      format: 'Excel / Sheets',
      description: 'Matriz simplificada sin fórmulas crípticas. Cálculo automático de severidad y generación de planes de contingencia.',
      tags: ['Riesgos', 'Prevención', 'Planear'],
      fields: ['Proceso Afectado', 'Evento de Riesgo', 'Probabilidad (1-3)', 'Impacto (1-3)', 'Severidad', 'Plan de Mitigación', 'Líder']
    },
    {
      id: 'TMP-04',
      title: 'Checklist de Auditoría Interna Express (ISO 19011)',
      clause: 'Cláusula 9.2',
      format: 'PDF / Word / Forms',
      description: 'Lista de verificación de 25 preguntas clave que cualquier empleado puede usar para auditar su propio proceso.',
      tags: ['Auditoría', 'Verificar', 'Poka-Yoke'],
      fields: ['Cláusula', 'Pregunta en Lenguaje Simple', 'Evidencia a solicitar', 'Veredicto (C / NC / OM)', 'Hallazgo']
    }
  ];

  // Get current selected clause object
  get selectedClause(): ClauseData {
    return this.clauses.find(c => c.id === this.selectedClauseId) || this.clauses[0];
  }

  // Filtered clauses list for search
  get filteredClauses(): ClauseData[] {
    if (!this.searchTerm.trim()) {
      return this.clauses;
    }
    const term = this.searchTerm.toLowerCase();
    return this.clauses.filter(c => 
      c.number.includes(term) || 
      c.title.toLowerCase().includes(term) ||
      c.plainSpanish.toLowerCase().includes(term)
    );
  }

  // Calculate Gap Analysis Score
  get gapScore(): number {
    const totalQuestions = this.gapQuestions.length;
    if (totalQuestions === 0) return 0;
    
    let points = 0;
    for (const q of this.gapQuestions) {
      if (q.selectedOption === 'full') points += 100;
      else if (q.selectedOption === 'partial') points += 50;
    }
    return Math.round(points / totalQuestions);
  }

  // Status Badge for Gap Score
  get gapStatusText(): string {
    const score = this.gapScore;
    if (score >= 85) return 'Nivel Avanzado - Listo para Certificación';
    if (score >= 60) return 'Nivel Intermedio - En Fase de Transición';
    if (score >= 40) return 'Nivel Básico - Requiere Estructuración';
    return 'Nivel Crítico - Inicio de Implementación';
  }

  get gapStatusClass(): string {
    const score = this.gapScore;
    if (score >= 85) return 'badge-emerald';
    if (score >= 60) return 'badge-cyan';
    if (score >= 40) return 'badge-amber';
    return 'badge-rose';
  }

  // Set Gap Option
  setGapOption(questionId: number, option: 'none' | 'partial' | 'full') {
    const q = this.gapQuestions.find(item => item.id === questionId);
    if (q) {
      q.selectedOption = option;
    }
  }

  // Select Clause
  selectClause(id: string) {
    this.selectedClauseId = id;
  }

  // Open Template Modal
  openTemplate(template: TemplateItem) {
    this.activeTemplateModal = template;
  }

  // Close Template Modal
  closeTemplate() {
    this.activeTemplateModal = null;
  }

  // -------------------------------------------------------------
  // KANBAN & SCRUM METHODS
  // -------------------------------------------------------------

  get filteredKanbanItems(): KanbanItem[] {
    return this.kanbanItems.filter(item => {
      const matchEpic = this.selectedKanbanEpic === 'all' || item.epic === this.selectedKanbanEpic;
      const matchPriority = this.selectedKanbanPriority === 'all' || item.priority === this.selectedKanbanPriority;
      return matchEpic && matchPriority;
    });
  }

  getItemsByColumn(columnId: KanbanColumnId): KanbanItem[] {
    return this.filteredKanbanItems.filter(item => item.columnId === columnId);
  }

  getColumnPoints(columnId: KanbanColumnId): number {
    return this.getItemsByColumn(columnId).reduce((sum, item) => sum + item.storyPoints, 0);
  }

  get totalStoryPoints(): number {
    return this.kanbanItems.reduce((sum, item) => sum + item.storyPoints, 0);
  }

  get completedStoryPoints(): number {
    return this.kanbanItems
      .filter(item => item.columnId === 'done')
      .reduce((sum, item) => sum + item.storyPoints, 0);
  }

  get sprintProgressPercent(): number {
    if (this.totalStoryPoints === 0) return 0;
    return Math.round((this.completedStoryPoints / this.totalStoryPoints) * 100);
  }

  moveKanbanItem(itemId: string, direction: 'forward' | 'backward') {
    const item = this.kanbanItems.find(i => i.id === itemId);
    if (!item) return;

    const columnOrder: KanbanColumnId[] = ['backlog', 'prioritized', 'in_progress', 'qa', 'done'];
    const currentIndex = columnOrder.indexOf(item.columnId);

    if (direction === 'forward' && currentIndex < columnOrder.length - 1) {
      item.columnId = columnOrder[currentIndex + 1];
      // Update SSDLC Gate based on column
      if (item.columnId === 'in_progress') item.ssdlcGate = 'Gate 3';
      else if (item.columnId === 'qa') item.ssdlcGate = 'Gate 4';
      else if (item.columnId === 'done') item.ssdlcGate = 'Gate 5';
    } else if (direction === 'backward' && currentIndex > 0) {
      item.columnId = columnOrder[currentIndex - 1];
      if (item.columnId === 'prioritized') item.ssdlcGate = 'Gate 2';
      else if (item.columnId === 'backlog') item.ssdlcGate = 'Gate 1';
    }
  }

  openNewItemModal() {
    this.newItem = {
      title: '',
      description: '',
      columnId: 'backlog',
      epic: 'Motor IA',
      priority: 'P1',
      storyPoints: 5,
      ssdlcGate: 'Gate 1',
      assigneeAgent: '🕵️ Agente Funcional'
    };
    this.showNewItemModal = true;
  }

  closeNewItemModal() {
    this.showNewItemModal = false;
  }

  saveNewKanbanItem() {
    if (!this.newItem.title?.trim()) return;

    const newId = `REQ-00${this.kanbanItems.length + 1}`;
    const itemToAdd: KanbanItem = {
      id: newId,
      title: this.newItem.title,
      description: this.newItem.description || 'Sin descripción detallada.',
      columnId: this.newItem.columnId || 'backlog',
      epic: this.newItem.epic || 'Motor IA',
      priority: this.newItem.priority || 'P1',
      storyPoints: Number(this.newItem.storyPoints) || 5,
      ssdlcGate: this.newItem.ssdlcGate || 'Gate 1',
      assigneeAgent: this.newItem.assigneeAgent || '🕵️ Agente Funcional'
    };

    this.kanbanItems.push(itemToAdd);
    this.closeNewItemModal();
  }

  // Scrum Master Action: Execute Daily Standup Simulation
  executeDaily() {
    this.dailyExecutionMessage = `⚡ Daily Standup completado a las ${new Date().toLocaleTimeString()} - Todos los agentes sincronizados. Velocidad actual: ${this.completedStoryPoints}/${this.totalStoryPoints} pts (${this.sprintProgressPercent}%). Cero bloqueos detectados.`;
  }

  toggleDodItem(item: { id: string; label: string; done: boolean; gate: string }) {
    item.done = !item.done;
  }

  // Scroll smoothly to section
  scrollTo(elementId: string) {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
