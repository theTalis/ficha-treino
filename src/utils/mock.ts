const users = [
  {
    id: "user1",
    token: "adwawdawdawd"
  }
]

const divisions = [
  {
    id: 1,
    title: 'Peito',
  },
  {
    id: 2,
    title: 'Costas',
  },
  {
    id: 3,
    title: 'Perna',
  },
  {
    id: 4,
    title: 'Bíceps',
  },
  {
    id: 5,
    title: 'Tríceps',
  },
  {
    id: 6,
    title: 'Ombro',
  },
]

const exercises = [
  {
    id: 1,
    title: "Supino reto com halteres",
    image: "https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/supino-reto-com-halteres.gif",
    division: 1
  },
  {
    id: 2,
    title: "Remada baixa",
    image: "https://www.mundoboaforma.com.br/wp-content/uploads/2021/09/remada-sentado-com-cabos-e-triangulo-para-costas.gif",
    division: 2,
  },
  {
    id: 3,
    title: "Legpress",
    image: "https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/pernas-leg-press-45-tradicional.gif",
    division: 3,
  },
  {
    id: 4,
    title: "Rosca halteres",
    image: "https://www.mundoboaforma.com.br/wp-content/uploads/2022/09/rosca-biceps-direta-com-halteres.gif",
    division: 4,
  },
  {
    id: 5,
    title: "Triceps pulley",
    image: "https://www.mundoboaforma.com.br/wp-content/uploads/2021/07/triceps-puxada-no-pulley.gif",
    division: 5,
  },
  {
    id: 6,
    title: "Elevação lateral",
    image: "https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/ombros-elevacao-lateral-de-ombros-com-halteres.gif",
    division: 6,
  },
]

const workouts = [
  {
    id: 1,
    exercise: 1,
    series: 4,
    reps: 13
  },
  {
    id: 2,
    exercise: 2,
    series: 4,
    reps: 13
  },
  {
    id: 3,
    exercise: 3,
    series: 4,
    reps: 13
  },
  {
    id: 4,
    exercise: 4,
    series: 4,
    reps: 13
  },
  {
    id: 5,
    exercise: 5,
    series: 4,
    reps: 13
  },
  {
    id: 6,
    exercise: 6,
    series: 4,
    reps: 13
  }
]

export { users, divisions, exercises, workouts }