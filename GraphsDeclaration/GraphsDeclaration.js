const _line = new Graph(
  {
    label: 'Primeiro grau',
    resolution: 0.2,
    _color: 'blue'
  },
  new UserInterface(50),
  new FirstDegree(
    {label: 'height', value: 3},
    {label: 'distance', value: 5}
  )
);


const _circle = new GraphParametric(
  {
    label: 'Círculo paramétrico',
    resolution: 0.2,
    _color: 'red',
    t_starts: 0,
    t_ends: 2 * Math.PI
  },
  new UserInterface(100),
  new Circle(
    {label: 'r', value: 4},
    {label: 'h', value: 0},
    {label: 'k', value: 0}
  )
);


const parabolla = new Graph(
  {
    label: 'Segundo grau',
    resolution: 0.25,
    _color: 'green',
  },
  new UserInterface(200),
  new SecondDegree(
    {label: 'f', value: 2},
    {label: 'g', value: 1},
    {label: 'h', value: 0}
  )
);


const sine = new GraphParametric(
  {
    label: 'Seno',
    resolution: 0.01,
    _color: 'violet',
    t_starts: CHECKBOARD_STARTS,
    t_ends: CHECKBOARD_ENDS
  },
  new UserInterface(400),
  new Sine(
   {label: 'seilaoque', value: 2}
  )  
);





