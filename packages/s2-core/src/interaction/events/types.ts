export enum S2Event {
  COLCELL_CLICK = 'colcell:click',
  ROWCELL_CLICK = 'rowcell:click',
  DATACELL_CLICK = 'datacell:click',
  CORNER_CLICK = 'corner:click',
  MERGEDCELLS_CLICK = 'meregedcells:click',

  COLCELL_HOVER = 'colcell:hover',
  ROWCELL_HOVER = 'rowcell:hover',
  DATACELL_HOVER = 'datacell:hover',
  CORNER_HOVER = 'corner:hover',
  MERGEDCELLS_HOVER = 'meregedcells:hover',

  COLCELL_MOUSEDOWN = 'colcell:mousedown',
  ROWCELL_MOUSEDOWN = 'rowcell:mousedown',
  DATACELL_MOUSEDOWN = 'datacell:mousedown',
  CORNER_MOUSEDOWN = 'corner:mousedown',
  MERGEDCELLS_MOUSEDOWN = 'meregedcells:mousedown',

  COLCELL_MOUSEUP = 'colcell:mouseup',
  ROWCELL_MOUSEUP = 'rowcell:mouseup',
  DATACELL_MOUSEUP = 'datacell:mouseup',
  CORNER_MOUSEUP = 'corner:mouseup',
  MERGEDCELLS_MOUSEUP = 'meregedcells:mouseup',

  COLCELL_MOUSEMOVE = 'colcell:mousemove',
  ROWCELL_MOUSEMOVE = 'rowcell:mousemove',
  DATACELL_MOUSEMOVE = 'datacell:mousemove',
  CORNER_MOUSEMOVE = 'corner:mousemove',
  MERGEDCELLS_MOUSEMOVE = 'meregedcells:mousemove',

  GLOBAL_RESIZE_MOUSEDOWN = 'global:resize:mousedown',
  GLOBAL_RESIZE_MOUSEMOVE = 'global:resize:mousemove',
  GLOBAL_RESIZE_MOUSEUP = 'global:resize:mouseup',

  GLOBAL_KEYBOARDDOWN = 'global:keyboarddown',
  GLOBAL_KEYBOARDUP = 'global:keyboardup',

  GLOBAL_CLEAR_INTERACTION_STYLE_EFFECT = 'global:clear-interaction-style-effect',
}

export enum OriginEventType {
  MOUSE_DOWN = 'mousedown',
  MOUSE_MOVE = 'mousemove',
  MOUSE_UP = 'mouseup',
  KEY_DOWN = 'keydown',
  KEY_UP = 'keyup',
}

export enum DefaultInterceptEventType {
  HOVER = 'hover',
  CLICK = 'click',
}

export type DefaultInterceptEvent =
  | DefaultInterceptEventType.HOVER
  | DefaultInterceptEventType.CLICK;