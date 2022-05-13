/*
 * @Description: 
 * @Author: 李大玄
 * @Date: 2022-02-19 11:55:02
 * @FilePath: /vue2.0-ts-shelf/src/store/modules/menus.ts
 */
import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators'
import store from '@/store'

interface meta {
  authCode?: string
}

export interface EnumItem {
  id: string| number
  name: string
  icon: string
  path: string
  meta: meta
  children: any
  [key: string]: any
}


@Module({ dynamic: true, store, name: 'Enums' })
class Enums extends VuexModule {
  public enums: EnumItem[] = [
    {
      id: "1", name: "模板市场", icon: "icon-AI6_yiji-mobanshichang1", path: "/templateBazaar", meta: { authCode: "" }, children: []
    },
  ]

  @Mutation
  private ADD_ENUM(item: EnumItem) {
    this.enums.push(item)
  }

  @Mutation
  private CLEAR_ENUM() {
    this.enums.splice(0)
  }

  @Action
  public AddEnum(item: EnumItem) {
    this.ADD_ENUM(item)
  }

  @Action
  public ClearEnum() {
    this.CLEAR_ENUM()
  }
}

export const EnumsModule = getModule(Enums)
