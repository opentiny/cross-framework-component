import { handleClick, clearTimer } from './index'

export const api = ['state', 'handleClick']

export default function renderless(
  props,
  { useReactive },
  { emit },
  { framework }
) {
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
