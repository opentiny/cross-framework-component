import { handleClick, clearTimer } from './index'

export const api = ['state', 'handleClick']

export default function renderless(
  props,
  { useReactive },
  { emit },
  { framework }
) {
  const { state, proxy } = useReactive({
    timer: null,
    disabled: !!props.disabled,
    plain: props.plain
  })

  const api = {
    state,
    clearTimer: clearTimer(proxy),
    handleClick: handleClick({ emit, props, state: proxy, framework })
  }

  return api
}
