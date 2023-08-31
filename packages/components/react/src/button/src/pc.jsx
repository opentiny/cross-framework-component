import renderless from '@opentiny/renderless/button/react'
import { useSetup } from '@opentiny/react-common'
import '@opentiny/theme/button/index.less'

export default function Button(props) {
  const {
    children,
    text,
    autofocus,
    round,
    circle,
    icon: Icon,
    size,
    nativeType = 'button',
  } = props

  const {
    handleClick,
    state,
    tabindex,
    type,
    $attrs
  } = useSetup({
    props: { ...props, nativeType: 'button', resetTime: 1000 },
    renderless
  })

  const className = [
    'tiny-button',
    type ? 'tiny-button--' + type : '',
    size ? 'tiny-button--' + size : '',
    state.disabled ? 'is-disabled' : '',
    state.plain ? 'is-plain' : '',
    round ? 'is-round' : '',
    circle ? 'is-circle' : ''
  ].join(' ').trim()
  return (
    <button
      className={className}
      onClick={handleClick}
      disabled={state.disabled}
      autoFocus={autofocus}
      type={nativeType}
      tabIndex={tabindex}
      {...$attrs}
    >
      {(Icon) ? <Icon className={(text || children) ? 'is-text' : ''} /> : ''}
      <span>{children || text}</span>
    </button>
  )
}
