const bootstrap = () => {
  const reloader = () => {
    draw();
  };
  
  const toggle_graph = (graph) => {
    return () => {
      if (GRAPHS_DISPLAYED.has(graph)) {
        
        GRAPHS_DISPLAYED.get(graph).unrenderInputs();
        GRAPHS_DISPLAYED.delete(graph);
        
        draw();
        return
      }
      
      GRAPHS_DISPLAYED.set(graph, GRAPHS_ARRAY.get(graph));
      GRAPHS_DISPLAYED.get(graph).renderInputs();
      
      draw();
      return
    }
  }
  
  let reload = createButton('Recarregar');
  reload.position(CHECKBOARD_SIZE - 70, CHECKBOARD_SIZE + 20);
  reload.mousePressed(reloader);

  let last_y_coord = CHECKBOARD_SIZE + 20;
  GRAPHS_ARRAY.forEach((_function, graph_key) => {
    let y_coord = last_y_coord + 30;
    
    let unique_toggle_graph = toggle_graph(graph_key);
    
    _function.checkbox = createCheckbox(`${graph_key}`, false);
    _function.checkbox.position(20, y_coord);
    _function.checkbox.mousePressed(unique_toggle_graph);
    
    last_y_coord = y_coord;
  });
      
  GRAPHS_DISPLAYED.forEach((graph, graph_key) => {
    graph.renderInputs();
  });
  return;
};