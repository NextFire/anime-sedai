import type { Language } from "./src/i18n"

type AnimeItem = {
  titleZh?: string
  titleEn: string
  titleJa?: string
  score?: number
}

export type Data = {
  [key: string]: AnimeItem[]
}

// 添加一个辅助函数来根据语言获取动画标题
export const getAnimeTitle = (anime: AnimeItem, language: Language): string => {
  return anime[
    ("title" +
      language.charAt(0).toUpperCase() +
      language.slice(1)) as keyof AnimeItem
  ] as string
}
