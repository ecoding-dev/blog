export const studies = [
  {
    title: "Licenciatura en Ciencias de la Computación",
    institution: "Universidad Estatal",
    description:
      "Fundamentos de CS: estructuras de datos, algoritmos, sistemas operativos, redes y bases de datos; proyecto final en equipo sobre sistemas web.",
    tags: [
      "Algoritmos",
      "Estructuras de Datos",
      "Sistemas Operativos",
      "Bases de Datos",
      "Redes",
    ],
  },
  {
    title: "Maestría en Ingeniería de Software",
    institution: "Instituto Tecnológico",
    description:
      "Enfoque en sistemas distribuidos, estrategias de testing y arquitectura cloud; tesis sobre patrones de resiliencia en microservicios.",
    tags: [
      "Sistemas Distribuidos",
      "Arquitectura Cloud",
      "Testing",
      "Microservicios",
    ],
  },
];

export type StudyItem = (typeof studies)[number];
