# @opentiny/cross-framework

This is a demonstration of the OpenTiny cross-end and cross-framework micro-front-end project (built based on WUJIE and pnpm):


## Local startup

You can run the following command in the root directory of the project to download the project dependency:

```shell
pnpm i
```

You can then start the case project by running the following command:

```shell
pnpm dev
```

You can run the following commands to open a demonstration case of a framework:

```shell
pnpm dev:react
# or
pnpm dev:solid
# or
pnpm dev:vue2
# or
pnpm dev:vue3
```

Congratulations on the success of the launch!

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
