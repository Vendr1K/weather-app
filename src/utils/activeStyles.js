export function activeStyle(bollean, styles) {
    switch(bollean) {
      case true:
        return styles.active
    case false:
        return ''  
        default: return ''
    }
}