<?php

class Component_bball extends Component {
  public function init() {
    OrmManager::LoadModel("bball");
  }

  public function controller_bball($args) {
    $vars = array();
    return $this->GetComponentResponse("./bball.tpl", $vars);
  }
}  
