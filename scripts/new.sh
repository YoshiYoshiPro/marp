#!/bin/bash
read -p "Enter slide name : " slide
mkdir -p ./src/$slide
mkdir -p ./src/$slide/images
cp -n "./src/template/index.md" "./src/$slide/index.md"
# ファイル存在時には上書きしないため
