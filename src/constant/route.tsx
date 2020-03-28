interface RouteDesc {
  url: string // 描述了路由的path信息
  name: string // 描述了该路由所对应的中文名
  imgSrc: string // 图片链接
}

const InitAppRoutes: RouteDesc[] = [
  { url: '/', name: '数据看板', imgSrc: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAP1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////9Du/pqAAAAFHRSTlMAQMC/MBDQUCDwYO/gn5CwgHBv3zo/rAsAAAD9SURBVFjD7ZZbDoMgEEVHBASLD3D2v9YWQkqrUEe+TMP5MTFyB05IrtC4P9w5DvWoHl/0CioZHhh4DFCDmPDNJCpOv6FnWcJju2xiRY+2AFajZ62whzLM5RKjy6v2ZhFtzNHlNXt6+EjUVJdpx0x8hbJ0phMcBizssBhwZ9vvC5OSS0G2l6C6FHO0V8zXMZ9gL4/65XJEyo1bMTCW1hsOJ3CTT+DxppDv2X7SkrdXdrns7PjQDoh0/mtxeCWBjPTjDgEMyLAW0AJaQAtoAf8dEKpRARGVKUfjq0kR10vf49l270nk+50hnawwQU0o/weNBomYEfLwjgSHxs14Am9ZK4kFNKnrAAAAAElFTkSuQmCC' },
  { url: '/tag', name: '标签管理', imgSrc: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAKlBMVEUAAAD///////////////////////////////////////////////////+Gu8ovAAAADXRSTlMAwD8wENDwkKCAYOB/9iX4gQAAANVJREFUSMdjGAWDFLDIFoAo9osOOBRw3L0MomzvNuBQwHr3Eoiae7cAhwLfu1dAlOzdBTgU6N4NAFG5dw1wKJgLtpz57jVskgizue5exCaJMJvj7k1skhCz4X7BBBCz4X7BBBCzYX5BB+6CICB29yqI2ns3EUiWoDkfHaD55C4WgKKgFlP+OqoHlUAg9u4kIKl+9yqIYzDYwgktPTUMSHpihoRTEZDUgYSTkgHBoCYYWaRFtzs4udwGJZdYUHIBJZjBFk6DJd+xw9MTwQKMcBE4CgYnAADT+NxrcIB3cgAAAABJRU5ErkJggg==' },
  { url: '/article', name: '文章管理', imgSrc: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAPFBMVEUAAAD////////////////////////////////////////////////////////////////////////////YSWgTAAAAE3RSTlMAwEAQ8DCgkNCfIIBwb2DPX+Cw6awPqQAAAQdJREFUWMPtl9FuwyAMRbFJIAHSdrv//69L1U1WBAyHbpUqcd4icU+ABGGbwV8zx5UarHGuxwkqaK7kJyiZigYr+bbBmhyHHUrcIBF2nMm5T8AbBf4+BZPBAD5aWXkVFwWkE9AQDMGbCDYqsmkFCRWSUuBQwSsFjAqs3YPARcIbfcYhMJZwgOxJgc/+wNcI9Etw3ZsoQxfbIRACW9MnEIbgaQH721OCC4BLl0Dy8P2CVWpNtWCOtyx/RhAmYM3zegFjZ63mZdBUEdjlcaq/D/oSqvWn/9VwDVdAjnK52N7y60wMkLy+3GcxSP5Mw+F+/J+PR8krW550WKNrNl2OjiQjRIpm8B98AZ3BMmVheRoUAAAAAElFTkSuQmCC' },
]

export {
  InitAppRoutes,
}
