---
title: 学习Nest
tags:
    - nest
categories:
    - nest
---

# 概念

控制器 如何访问
挂载路由 导入的行为 实现行为复用
controller / module
主显文件 可以调用不同的文件

## 安装 / 新建

```powershell
p add -g @nestjs/cli nodemon ts-node

nest new  name

```

## 创建服务

> 创建 name 服务 h 帮助

> 没有测试文件 没有子目录 详细信息查看不执行
>
> –no-spec –flat -d
>
> ​ 创建的服务会自动放到模块里

> 放到模块才可以使用 module providers [ 服务]

```powershell
nest g s name -h
nest g s --no-spec -- flat

```

通过命令创建的 服务会自动挂载到 module 可以全局使用

## 创建模块

> 模块用于 挂载路由 导入的行为 实现行为复用
>
> 如果先创建模块在创建 服务 会自动配置

```powershell
# 创建模块  不要加任何 其他特殊命令
nest g mo name
# 创建服务
nest g s  name  --no-spec
```

## 创建控制器

```powershell
# nest g co name
n g co hd -d
```

## 创建管道

```powershell
n g pi name --no-spec -d

```

## 创建类

```powershell
    n g cl name --no-spec -d
```

## 创建过滤器

```powershell
    n g f name --no-spec -d
```

## 预装包

```powershell
pnpm add prisma-binding ts-node @prisma/client mockjs @nestjs/config class-validator class-transformer argon2 @nestjs/passport passport passport-local @nestjs/jwt passport-jwt lodash multer dayjs express redis @nestjs/throttler mockjs

pnpm add -D prisma typescript @types/node @types/mockjs @nestjs/mapped-types @types/passport-local @types/passport-jwt @types/express @types/lodash @types/multer
```

## 链接数据库

```powershell
npx prisma 查看命令pr
```

### 初始化

```powershell
npx prisma init
```

### 修改 env

```powershell
mysql://账号-密码-主机地址-端口-库
DATABASE_URL="mysql://root:123456@localhost:3306/nest-blog"
```

### 修改 prims

待续....
