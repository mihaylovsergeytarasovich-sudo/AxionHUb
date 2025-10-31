import { contextBridge } from 'electron'

contextBridge.exposeInMainWorld('electron', {
  // добавить каналы, если нужно
})