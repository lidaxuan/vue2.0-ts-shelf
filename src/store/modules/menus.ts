/*
 * @Description: 
 * @Author: 李大玄
 * @Date: 2022-02-19 11:55:02
 * @FilePath: /vue-ts-shelf/src/store/modules/menus.ts
 */
import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators'
import store from '@/store'

interface meta {
  authCode?: string
}

interface EnumItem {
  id: string| number
  name: string
  icon: string
  path: string
  meta: meta
  children: any
  [key: string]: any
}


@Module({ dynamic: true, store, name: 'errorLog' })
class Enums extends VuexModule {
  public enums: EnumItem[] = [
    {
      id: "1", name: "模板市场", icon: "icon-AI6_yiji-mobanshichang1", path: "/templateBazaar", meta: { authCode: "" }, children: []
    },
  ]

  @Mutation
  private ADD_ERROR_LOG(log: any) {
    this.enums.push(log)
  }

  @Mutation
  private CLEAR_ERROR_LOG() {
    this.enums.splice(0)
  }

  @Action
  public AddErrorLog(log: any) {
    this.ADD_ERROR_LOG(log)
  }

  @Action
  public ClearErrorLog() {
    this.CLEAR_ERROR_LOG()
  }
}

export const EnumsModule = getModule(Enums)
