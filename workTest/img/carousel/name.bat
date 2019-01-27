@echo off
setlocal ENABLEDELAYEDEXPANSION
for /l %%a in (1,1,32) do (
    set b=00%%a
    rename %%a.jpg !b:~-2!.jpg
)