import renderless from '@opentiny/renderless/button/solid'
import { useSetup } from '@opentiny/solid-common'
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
    props,
    renderless
  })

  const className = [
    'tiny-button',
    type ? 'tiny-button--' + type : '',
    size ? 'tiny-button--' + size : '',
    state.buttonDisabled ? 'is-disabled' : '',
    state.plain ? 'is-plain' : '',
    round ? 'is-round' : '',
    circle ? 'is-circle' : ''
  ].join(' ').trim()

  return (
    <button
      className={className}
      onClick={handleClick}
      disabled={state.buttonDisabled}
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
