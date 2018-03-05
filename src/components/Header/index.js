import React, { Component } from 'react'
import './index.css'

class Header extends Component {
  render() {
    return (
      <header className="Header-header">
        <video
          className="Header-video"
          preload="auto"
          muted
          autoPlay
          loop
          poster="https://react.amsterdam/img/dummy_bg.jpg"
          id="bgvid">
          <source src="https://react.amsterdam/video/video-.webm" type="video/webm" />
          <source src="https://react.amsterdam/video/video.mp4" type="video/mp4" />
        </video>

        <div className="Header-overlay" />

        <div className="Header-wrapper">
          <div className="Header-logos">
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjI
uOCAxMDkuNSI+PGcgZmlsbD0iIzAwZGQzYiI+PHBhdGggZD0iTTY4LjMgMjkuNGMtMi4zLTIuOS
00LjUtNS43LTYuOS04LjEtMi4zIDIuNS00LjYgNS4yLTYuOCA4LjEgNC41LS4yIDkuMS0uMiAxM
y43IDB6TTU3LjQgMTcuM2MtNS4xLTQuOS0xNy0xNC42LTIzLjgtMTAuNy02LjkgNC00LjMgMTku
MS0yLjcgMjUuOSA1LTEuMSAxMC40LTIgMTYuMi0yLjYgMy40LTQuNiA2LjgtOC45IDEwLjMtMTI
uNnptMjIuNSA1NmMzLjctLjUgNy4yLTEuMSAxMC41LTEuOS0xLTMuMi0yLjItNi42LTMuNi0xMC
0yLjEgNC4xLTQuNCA4LjEtNi45IDExLjl6bS00LjIgNi4yYy0zLjMgNC43LTYuOCA5LTEwLjMgM
TIuNyAxLjYgMS41IDMuMSAyLjggNC42IDQuMSA3LjkgNi4zIDE1IDkgMTkuMiA2LjYgNi45LTQg
NC4zLTE5LjEgMi43LTI2LTUgMS4yLTEwLjQgMi4xLTE2LjIgMi42ek02MS40IDk2LjNjLTcuMSA
2LjgtMjAuOCAxNy4zLTMwLjcgMTEuNS05LjktNS43LTcuNy0yMi43LTUuMy0zMi4zQzE1LjkgNz
IuNyAwIDY2LjIgMCA1NC43YzAtMTEuNCAxNS45LTE4IDI1LjQtMjAuOC0yLjQtOS41LTQuNi0yN
i41IDUuMy0zMi4zIDkuOS01LjcgMjMuNiA0LjcgMzAuNyAxMS41QzY4LjYgNi40IDgyLjItNC4x
IDkyLjEgMS42YzkuOSA1LjcgNy43IDIyLjcgNS4zIDMyLjMgOS41IDIuOCAyNS40IDkuNCAyNS4
0IDIwLjhzLTE1LjkgMTgtMjUuNCAyMC44YzIuMyA5LjYgNC42IDI2LjYtNS4zIDMyLjMtNi41ID
MuOC0xNS45LjgtMjUuNi03LjEtMS43LTEuMy0zLjQtMi44LTUuMS00LjR6TTI2LjkgNzBjMS41L
TQuOSAzLjUtMTAgNS45LTE1LjMtMi40LTUuMy00LjQtMTAuNC01LjktMTUuMy02LjggMi0yMS4y
IDcuNC0yMS4yIDE1LjMgMCA4IDE0LjQgMTMuNCAyMS4yIDE1LjN6TTM2IDQ4YzIuMS00LjEgNC4
0LTggNi45LTExLjgtMy43LjUtNy4yIDEuMS0xMC41IDEuOSAxIDMuMSAyLjIgNi41IDMuNiA5Lj
l6bTU5LjktOC42Yy0xLjUgNC45LTMuNSAxMC01LjkgMTUuMyAyLjQgNS4zIDQuNCAxMC40IDUuO
SAxNS4zIDYuNy0yIDIxLjItNy40IDIxLjItMTUuM3MtMTQuNC0xMy4zLTIxLjItMTUuM3pNNTcu
NCA5Mi4yYy0zLjUtMy43LTYuOS04LTEwLjMtMTIuNy01LjctLjUtMTEuMi0xLjQtMTYuMi0yLjY
tMS43IDYuOC00LjIgMjIgMi43IDI2czE4LjctNS44IDIzLjgtMTAuN3ptNC00YzIuMy0yLjUgNC
42LTUuMiA2LjktOC4xLTQuNi4yLTkuMS4yLTEzLjcgMCAyLjIgMi45IDQuNSA1LjYgNi44IDguM
XptMTEuMi0xNC4xYzQuMi02LjEgNy45LTEyLjYgMTEuMS0xOS4zLTMuMi02LjctNy0xMy4yLTEx
LjItMTkuMy03LjQtLjUtMTQuOS0uNS0yMi40IDAtNC4yIDYuMS03LjkgMTIuNy0xMS4yIDE5LjM
gMy4yIDYuNyA3IDEzLjIgMTEuMiAxOS4zIDcuNi41IDE1LjEuNSAyMi41IDB6TTg2LjggNDhjMS
40LTMuNCAyLjctNi44IDMuNy0xMC0zLjMtLjgtNi44LTEuNC0xMC41LTEuOUM4Mi40IDQwIDg0L
jcgNDQgODYuOCA0OHptNS4xLTE1LjVjMS43LTYuOCA0LjItMjItMi43LTI1LjktNi45LTQtMTgu
OCA1LjgtMjMuOCAxMC42IDMuNSAzLjggNyA4IDEwLjMgMTIuNyA1LjguNiAxMS4zIDEuNSAxNi4
yIDIuNnpNMzYgNjEuNGMtMS40IDMuNC0yLjYgNi44LTMuNiAxMCAzLjMuNyA2LjggMS40IDEwLj
UgMS45LTIuNC0zLjgtNC43LTcuOC02LjktMTEuOXoiLz48cGF0aCBkPSJNNTguNSAzOC4xbDIuO
SAyLjkgMi45LTIuOSAyLjMgMi40LTIuOSAyLjkgMi45IDIuOS0yLjMgMi4zLTIuOS0yLjktMi45
IDIuOS0yLjQtMi4zIDIuOS0yLjktMi45LTIuOSAyLjQtMi40em04LjEgMjUuMmwtMi45IDIuOSA
yLjkgMi45LTIuMyAyLjMtMi45LTIuOS0yLjkgMi45LTIuMy0yLjQgMi45LTIuOS0yLjktMi45ID
IuNC0yLjQgMi45IDIuOSAyLjktMi45IDIuMiAyLjV6bTAtMTEuNGwtMi45IDIuOSAyLjkgMi45L
TIuMyAyLjMtMi45LTIuOS0yLjkgMi45LTIuNC0yLjMgMi45LTIuOS0yLjktMi45IDIuNC0yLjQg
Mi45IDIuOSAyLjktMi45IDIuMyAyLjR6IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0
iZXZlbm9kZCIvPjwvZz48L3N2Zz4=" className="Header-logo" alt="React Amsterdam Logo" />
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MDAiIGhlaWd
odD0iMjM4Ij48cGF0aCBmaWxsPSIjMDBkZDNiIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zNS
43NjYgMTUxLjk0OGM3LjQ1MiAwIDE0LjAyOC0yLjE5IDE5LjQzNS02LjcxNSA1LjU1NC00LjUyN
iA4LjMzLTkuNzgxIDguMzMtMTUuOTEzIDAtMTkuODU0LTIzLjA5LTIyLjE5LTMyLjQ0Mi0yNi44
NjItNy4xNi00LjA4OC0yLjQ4NC0xMS41MzMgNC42NzctMTEuNTMzIDQuODIyIDAgNy41OTkgMy4
wNjYgOC4zMyA1LjQwMi43MyAyLjQ4MSAyLjQ4MyAzLjc5NSA1LjI2IDMuNzk1aDkuMzUzYTMuOT
I3IDMuOTI3IDAgMCAwIDMuOTQ1LTMuOTQxYzAtNC41MjYtMi4zMzgtOC45MDYtNy4wMTQtMTMuN
DMxLTQuNjc3LTQuNTI2LTExLjI1My02LjcxNi0xOS41ODItNi43MTYtNy4xNiAwLTEzLjQ0NSAy
LjA0NC0xOC43MDUgNi4xMzItNS4xMTUgNC4wODctNy43NDYgOS4zNDMtNy43NDYgMTUuNzY2IDA
gMTMuNzIzIDEyLjg2IDE4LjU0MSAyMi43OTcgMjIuMTkgNi44NjkgMi40ODMgMTIuNDIyIDUuNT
Q4IDEyLjQyMiA5Ljc4MiAwIDMuNjUtMi43NzcgNy4wMDgtOC43NjggNy4wMDgtNC45NjkgMC04L
jE4NC0xLjc1Mi05LjY0NS01LjQwMi0xLjAyMy0yLjQ4Mi0yLjc3Ny0zLjc5Ni01LjU1My0zLjc5
NmgtOC45MTRBMy45MjcgMy45MjcgMCAwIDAgOCAxMzEuNjU2YzAgNC4zOCAyLjMzOCA4LjkwNSA
3LjE2IDEzLjQzMSA0LjgyMyA0LjUyNiAxMS42OTEgNi44NjEgMjAuNjA2IDYuODYxem03Ni4yNT
QgMzMuODc5bC0xLjc1My0xLjE2OHYyNS44NGEzLjkyNyAzLjkyNyAwIDAgMS0zLjk0NiAzLjk0M
kg5NS45NDZBMy45MjcgMy45MjcgMCAwIDEgOTIgMjEwLjQ5OXYtOTEuMzlhMy45MjcgMy45Mjcg
MCAwIDEgMy45NDYtMy45NDFoOC45MTRhMy45MjcgMy45MjcgMCAwIDEgMy45NDUgMy45NDJ2MS4
xNjhjNC4yMzgtNC4yMzQgOS42NDUtNi4yNzggMTYuNTE0LTYuMjc4IDcuMTYgMCAxMy4yOTggMi
4zMzYgMTguNDEzIDcuMTUzIDUuMTE0IDQuNjcyIDcuNTk5IDEwLjUxMiA3LjU5OSAxNy42NjV2M
jUuNjk0YzAgNy4zLTIuNDg1IDEzLjI4NS03LjYgMTguMTAzLTUuMTE0IDQuNjcyLTExLjEwNiA3
LjAwNy0xOC4xMiA3LjAwNy01Ljg0NSAwLTExLjM5OS0yLjA0My0xMy41OS0zLjc5NXpNMjM1LjI
2NyAyNi45NDJ2MjguNzZjMy42NTMtMy4zNTggOC43NjgtNC45NjQgMTUuMzQ0LTQuOTY0IDcuMD
E0IDAgMTMuMDA2IDIuMzM2IDE4LjEyIDcuMTUzIDUuMTE1IDQuNjcyIDcuNiAxMC42NTggNy42I
DE3Ljk1N3YyNS42OTRjMCA3LjE1NC0yLjQ4NSAxMi45OTMtNy42IDE3LjgxMS01LjExNCA0LjY3
Mi0xMS4yNTIgNy4wMDctMTguNDEyIDcuMDA3LTYuODY5IDAtMTIuMjc2LTIuMDQzLTE2LjUxNC0
2LjI3N3YxLjE2OGEzLjkyNyAzLjkyNyAwIDAgMS0zLjk0NSAzLjk0MmgtOC45MTRBMy45MjcgMy
45MjcgMCAwIDEgMjE3IDEyMS4yNVYyNi45NEEzLjkyNyAzLjkyNyAwIDAgMSAyMjAuOTQ2IDIza
DEwLjM3NWEzLjkyNyAzLjkyNyAwIDAgMSAzLjk0NiAzLjk0MnptMTU1LjI1NiA1Mi44NzZjMS4w
MjMuNzMgMS40NiAxLjYwNiAxLjQ2IDIuNzczIDAgLjczLS4yOTEgMS40Ni0uNzMgMi4xOWwtNC4
5NjggNy4wMDhjLS43MzEuODc2LTEuNjA4IDEuMzE0LTIuNjMgMS4zMTQtLjg3OCAwLTEuNjA4LS
4yOTItMi4zMzktLjczLTcuNzQ1LTUuMTEtMTguNDEzLTEuMDIyLTE3LjY4MiA3LjczN3Y1LjU0O
GgyMi45NDNjMS45IDAgMy42NTMgMS42MDYgMy42NTMgMy41MDR2OC4xNzVjMCAxLjg5OC0xLjc1
MyAzLjUwNC0zLjY1MyAzLjUwNGgtMjIuOTQzdjUzLjg3YTMuOTI3IDMuOTI3IDAgMCAxLTMuOTQ
2IDMuOTQxaC0xMC4wODNhMy45MjcgMy45MjcgMCAwIDEtMy45NDYtMy45NDF2LTUzLjg3aC0xMy
4wMDZjLTEuOSAwLTMuNjUzLTEuNjA2LTMuNjUzLTMuNTA0di04LjE3NWMwLTEuODk4IDEuNzU0L
TMuNTA0IDMuNjUzLTMuNTA0aDEzLjAwNnYtNS4xMWMwLTcuMyAyLjYzLTEzLjQzIDcuNzQ1LTE4
LjI0OUMzNTguNTIgNzcuNDgyIDM2NS4wOTUgNzUgMzczLjEzMyA3NWM3LjAxNCAwIDEyLjg2IDE
uNjA2IDE3LjM5IDQuODE4em04Mi4yNjUtMzUuMzl2MTMuMTk0bDExLjQ5My0zLjk0MWMxLjItLj
E3MSAxLjg4Ny0uMzQzIDIuMjMtLjM0MyAxLjIgMCAyLjA1OCAxLjAyOCAyLjc0NCAyLjkxM2wyL
jA1OSA1LjgyN2MwIC41MTQuNjg2IDIuMDU2LjY4NiAyLjc0MiAwIDEuMzctLjg1OCAyLjM5OS0y
LjQwMSAyLjkxM2wtMTIuMzUxIDQuNDU1IDcuODkgMTAuMjgyYy4zNDQuNjg2LjUxNSAxLjM3MS4
1MTUgMi4wNTcgMCAxLjItLjY4NiAyLjIyNy0yLjA1OCAzLjA4NGwtNS42NiA0LjI4NGMtLjUxNS
42ODYtMS4zNzMgMS4wMjktMi4yMyAxLjAyOS0xLjIwMiAwLTIuMDYtLjUxNS0yLjkxNy0xLjU0M
2wtNy43MTktMTAuMTEtNy43MiAxMC4yODJjLS41MTQuODU2LTEuMiAxLjM3LTIuNCAxLjM3LTEu
MDMgMC0xLjg4Ny0uMzQyLTIuNzQ1LTEuMTk5bC02LjE3NS00LjI4NGMtMS4wMy0uODU3LTEuNTQ
0LTEuODg1LTEuNTQ0LTIuOTEzIDAtLjY4Ni4xNzEtMS4zNzEuNTE0LTIuMDU3bDcuNTQ4LTEwLj
I4Mi0xMi4xNzktNC4xMTJjLTEuNTQ0LS41MTQtMi4yMy0xLjcxNC0yLjIzLTMuMjU2IDAtLjg1N
y4xNzItMS43MTQuNTE1LTIuNzQybDEuODg2LTUuODI3Yy42ODctMS44ODUgMS43MTYtMi45MTMg
My4wODgtMi45MTMuMTcyIDAgLjg1OC4xNzIgMi4yMy4zNDNsMTEuNDkzIDMuOTQxVjQ0LjQyN2M
wLTEuODg1IDEuODg3LTMuNDI3IDQuMTE3LTMuNDI3aDcuMjA0YzIuMjMgMCA0LjExNyAxLjU0Mi
A0LjExNyAzLjQyN3oiLz48L3N2Zz4=" className="Header-logo" alt="SPB Frontend Logo" />
          </div>
          <h1 className="Header-title">SPB Frontend & React Amsterdam Competition</h1>
        </div>
      </header>
    )
  }
}

export default Header
