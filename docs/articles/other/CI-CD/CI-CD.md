---
title: CI/CD学习
date: 2023年02月24日
tags:
    - windows
categories:
    - 开发环境
---

# 简单认识

```

# 新建

## 方法1

> 根目录新建文件夹

> .github---> workflows---> .yml 结尾的文件

## 方法2

> active - simple workflow - CommitChagnes

# 运行

> action runworkflow 点击进入已经跑完的 ci 进入job

## 串行和并行
>    第一个运行成功才会运行第二个   第一个成功与否和第二个没有关系

```

## 触发条件

> > on: workflow_dispatch

> git 类型 手动 定时

```yml
on: [push, workflow_dispatch]
# 两个触发条件 无论在哪个分支做了 这些行动都会执行触发


on:
    push:
        branches:
            -master
    workflow_dispatch
# 两个触发条件  只有在 master 分支下做push 才会触发


    push :

        tage :
        - v1.**
                
        paths :
        - '**.js'


# 基于某个标签或文件执行



push:
schedule:
    - cron :'*/ 5 * * *'
  #  五分钟执行一次计划 cron 可以搜索




```

## 上传文件

```yml
name: pyinstaller
on: workflow_dispatch
jobs:
    build-on-windows:
        runs-on: windows-2022
        steps:
            - name : checkout code
            uses : actions/checkout@3  # 使用工具包
            - name : install pyinstaller
            run: pip install pyinstaller
            - name : buid exe
            run : pyinstaller sha256.py -F   # 打包文件生成exe 到dist文件夹下
            - name : upload exe file
            uses :actions/upload-actifact@3  # 使用工具包 上传文件
            with:
                name:shang256-windows-exe   # 文件名
                path:dist.sha256/exe        #  文件路径

PS:
    name 唯一性 如
                shar-windows
                shar-linux
                shar-macos


  *! python  打包的应用不保证在非windows的平台 稳定运行

-
    区别
******
路径         linux macos 不用加 应用尾缀
macos的命令  pip3

linux macos
  执行需要加 chmod +x  以提升运行权限
```

## 下载文件

```yml
test-buid-windows :
    run-on : windows-2022
    needs : build-on-windows  # 增加依赖条件 如果windows 运行失败 则不允许这个脚本
    setps :
        - name : dowload exe file
        uses : actions/download-artififact@v3  # 使用 工具包
        with :
          name : sha256-windows-exe  # 依赖于上方widows生成的文件
        - name : test exe file  # 查看并运行
           run : |
                ls
                ./sha256/exe sha256.exe
```

## 定义环境

```yml
name: workflow_env
on:
    workflow_dispatch:
env:
    DAT_OF_WEEK:Moday
jobs:
    .....
    steps:
     - name : test-env
        run: echo "$Greeting $First_Name .Todat is $DAT_OF_WEEK!"
## 这段代码中 可以访问到 WEEK 其余的访问不到

greeting_job:
    runs-on: ubntu-laest
    env:
        Greeting: Hello
    steps:
        - name: " Say Hello"
        run: echo "$Greeting $First_Name .Todat is $DAT_OF_WEEK!"
        env: First_Name : Mona
# 这段代码中 都可以访问
```

## 环境加密

> seting --> secrets and variables

> secrets 隐私

> variables 环境变量

> actions--> new reposiory secre

> **DB_USERNAME=' 账号'**

> **DB_PASSWORD=' test'** 设置密码为 test

## 加密引用

```yml
env:
    DB_U: ${{ vars.DB_USERNAME}}
    DB_P: ${{ secrests.DB_PASSWORD}}
jobs:
    test-secrests:
        runs-on: ubuntu-22.04

        setps:
            - name: checkout code
              uses: actions/checkout@v3
            - name: check env u
              run: echo '${{ env.DB_U }}'
            - name: check env p
              run: echo '${{ env.DB_p }}'

            # GITHUB 为了安全 这里是打印不出来的
            - name: test with pyhon # 此处的test 和密码库的相同了 页面会展示出  加密  适得其反  密码要设置
              run: python secrets.py
```

## 运行容器环境

```yml
name: testing
on:
    workflow_dispatch:
    push:
        branches:
        - 'master'
jobs:
 test-code:
    run-on: ubuntu-22.04
    steps:
        - name: checkout code
            uses: actions/checkout@v3
        - uses: actions/setup-python@v4
            name:  set up py
            with:
                python-version: 3.8
        - name: install -r requirements.text
            run: pip install -r requirements.text
        - name: create mongdb container
            run: |
                docker run -d -p 27017:27017 --name some-mongo \
                    - e MONGO_INITDB_ROOT_USERNAME=root \
                    - e MONGO_INITDB_ROOT_PASSWORD=example \
                    mongo
# 创建了数据库
        - name: run py test
            id: run-py-test
            run: pytest




# 基于dorcker MOGODB 运行了 命令
#  可改进的地方 账号密码可用 github section 的方式
```

给个金星老师的手势！！！！！👏👏👏👏
