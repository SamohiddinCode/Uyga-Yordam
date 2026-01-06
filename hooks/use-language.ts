"use client"

import { useContext } from "react"
import { LanguageContext } from "@/components/language-provider"

export function useLanguage() {
  return useContext(LanguageContext)
}
