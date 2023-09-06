# @opentiny/cross-framework

这是一个演示OpenTiny跨端、跨框架的案例微前端工程（基于WUJIE和pnpm搭建）：


## 本地启动

可以通过在项目根目录执行以下命令下载工程依赖：

```shell
pnpm i
```

接着可以，通过运行以下命令启动基于WUJIE的微前端案例工程：

```shell
pnpm dev
```

或者也可以分别通过以下命令单独打开某个框架的演示案例：

```shell
pnpm dev:react
# or
pnpm dev:solid
# or
pnpm dev:vue2
# or
pnpm dev:vue3
```

恭喜你启动成功！🎉

``` html
cross-framework-component
├─ package.json
├─ packages
│  ├─ components
│  │  ├─ react
│  │  ├─ renderless
│  │  ├─ solid
│  │  ├─ theme
│  │  ├─ theme-mobile
│  │  ├─ theme-watch
│  │  └─ vue
│  ├─ element-to-opentiny
│  ├─ home
│  ├─ react
│  ├─ solid
│  ├─ vue2
│  └─ vue3
├─ pnpm-workspace.yaml
├─ README.md
├─ README.zh-CN.md
└─ setup.js

```