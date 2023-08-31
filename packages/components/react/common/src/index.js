import * as hooks from 'react'
import '@opentiny/theme/base/index.less'
import { useReactive } from 'ahooks'

export const emit =
  (props) =>
  (evName, ...args) => {
    if (props[evName] && typeof props[evName] === 'function') {
      props[evName](...args)
    }
  }

// nextTick， 等待 dom 更新后触发回调
export const useNextTick = (callback) => {
  queueMicrotask(callback)
}

// emitEvent, dispath, broadcast
export const emitEvent = () => {
  const broadcast = () => {
    return ''
  }

  return {
    dispatch: () => {
      return ''
    },
    broadcast
  }
}

export const useSetup = ({
  props,
  renderless,
  extendOptions = { framework: 'React' }
}) => {
  const render =
    typeof props.tiny_renderless === 'function'
      ? props.tiny_renderless
      : renderless
  const utils = {
    parent: {},
    emit: emit(props)
  }
  const sdk = render(
    props,
    { ...hooks, useReactive, useNextTick },
    utils,
    extendOptions
  )
  return {
    ...sdk,
    type: props.type ?? 'default'
  }
}