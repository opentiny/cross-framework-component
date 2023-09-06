import renderless from '@opentiny/renderless/button/react' // renderless无渲染层
import { useSetup } from '@opentiny/react-common' // 抹平不同框架的适配层
import '@opentiny/theme/button/index.less' // 复用OpenTinyVue的样式文件

export default function Button(props) {
  const {
    children,
    text,
    autofocus,
    round,
    circle,
    icon: Icon,
    size,
    nativeType = 'button'
  } = props

  const { handleClick, state, tabindex, type, $attrs } = useSetup({
    // 通过common适配层的useSetup处理props和renderless无渲染层
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
  ]
    .join(' ')
    .trim()
  return (
    <button
      className={className}
      onClick={handleClick}
      disabled={state.disabled}
      autoFocus={autofocus}
      type={nativeType}
      tabIndex={tabindex}
      {...$attrs}>
      {Icon ? <Icon className={text || children ? 'is-text' : ''} /> : ''}
      <span>{children || text}</span>
    </button>
  )
}
