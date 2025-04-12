function setup() {
  
  createCanvas(CHECKBOARD_SIZE, CHECKBOARD_SIZE);
  
  bootstrap();
  
  noLoop();
}

function draw() {
  
  background(255);
  
  checkboard();

  GRAPHS_DISPLAYED.forEach((graph, graph_key) => {
    
    graph.plot();
  });
}