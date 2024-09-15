import { getComponentMap, getPropsMap } from './mapping'

export function uviewPlus3() {
  return {
    uiName: 'uviewPlus3',
    map: getPropsMap(),
    lib: 'uview-plus',
    prefix: 'up',
  }
}

export function uviewPlus3Components() {
  return {
    map: getComponentMap(),
    isSeperatorByHyphen: true,
    prefix: 'up',
    lib: 'uview-plus',
  }
}
