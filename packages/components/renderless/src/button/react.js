import { handleClick, clearTimer } from './index'

export const api = ['state', 'handleClick']

export default function renderless(
  props,
  { useReactive },
  { emit },
  { framework }
) {
  // 利用ahooks提供的useReactive模拟vue的响应式数据，并且使用react的useRef响应式数据被重复执行定义
  const state = useReactive({
    timer: null,
    disabled: !!props.disabled,
    plain: props.plain,
    formDisabled: false
  })

  const api = {
    state,
    clearTimer: clearTimer(state),
    handleClick: handleClick({ emit, props, state, framework })
  }

  return api
}
