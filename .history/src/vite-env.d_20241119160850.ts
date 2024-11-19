/// <reference types="vite/client" />


interface ImportMetaEnv {
    readonly VITE_APP_TITLE: string; // 自定义环境变量示例
    // 可以添加更多环境变量...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv; // 扩展 ImportMeta 接口以包含 env 属性
  }