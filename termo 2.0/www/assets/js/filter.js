function filterKeys(key){
    const filter = [
    'Escape',
    'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12',
    '-', '=', "'",
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
    'Clear', 'Home', 'PageUp',
    'Backspace', 'Enter', 'ScrollLock', 'Pause', 'ScrollLock', 'Insert', 'Delete', 'End', 'PageDown', 'NumLock',
    '/', '*', '-', '+', ',',
    'ArrowLeft', 'ArrowUp', 'ArrowDown', 'ArrowRight', 
    'Control', 'Shift', 'Control', 'AltGraph', 'ContextMenu',
    ';', '.', ',', '<', '>', ':', '?', '}', ']', '{', '[',
     'Dead', 'Alt', 'Tab', 'CapsLock', 'Control', ' ']
    if(filter.includes(key)){
        return true;
    }
    return false;
}