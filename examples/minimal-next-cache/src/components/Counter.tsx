'use client'

import { useState } from 'react'

export function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div className="panel">
      <h2>Client Component 边界</h2>
      <p className="muted">这个计数器需要浏览器事件，所以单独放在客户端组件里。</p>
      <button onClick={() => setCount((value) => value + 1)}>
        本地点击次数：{count}
      </button>
    </div>
  )
}

