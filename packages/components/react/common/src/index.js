import * as hooks from 'react'
import '@opentiny/theme/base/index.less'
import { useReactive } from 'ahooks' // 使用ahooks提供的useReactive抹平vue框架的响应式数据

// 抹平vue框架的事件触发机制
export const emit =
  (props) =>
  (evName, ...args) => {
    if (props[evName] && typeof props[evName] === 'function') {
      props[evName](...args)
    }
  }

// 模拟vue框架的nextTick，等待 dom 更新后触发回调
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
  props, // 模板层传递过来的props属性
  renderless, // renderless无渲染函数
  extendOptions = { framework: 'React' } // 模板层传递过来的额外参数
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
