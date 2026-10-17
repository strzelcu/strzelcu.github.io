'use client'

import { useEffect, useState, type ReactNode } from 'react'
import { KBarProvider, type Action } from 'kbar'
import { useRouter } from 'next/navigation'
import { formatDate } from 'pliny/utils/formatDate'
import siteMetadata from '@/data/siteMetadata'
import { KBarModal } from './KBarModal'

interface SearchDocument {
  path: string
  title: string
  summary?: string
  date: string
}

export default function SearchProvider({ children }: { children: ReactNode }) {
  const router = useRouter()
  const searchConfig = siteMetadata.search
  const searchDocumentsPath =
    searchConfig?.provider === 'kbar' ? searchConfig.kbarConfig.searchDocumentsPath : false
  const [actions, setActions] = useState<Action[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const controller = new AbortController()

    async function loadDocuments() {
      try {
        if (!searchDocumentsPath) return
        const response = await fetch(searchDocumentsPath, {
          signal: controller.signal,
        })
        if (!response.ok) throw new Error('Failed to load search index')
        const posts: SearchDocument[] = await response.json()
        if (controller.signal.aborted) return
        setActions(
          posts.map((post) => ({
            id: post.path,
            name: post.title,
            keywords: post.summary || '',
            section: 'Artykuły',
            subtitle: formatDate(post.date, siteMetadata.locale),
            perform: () => router.push('/' + post.path),
          }))
        )
      } catch {
        if (!controller.signal.aborted) setHasError(true)
      } finally {
        if (!controller.signal.aborted) setIsLoading(false)
      }
    }

    loadDocuments()
    return () => controller.abort()
  }, [router, searchDocumentsPath])

  return (
    <KBarProvider>
      <KBarModal actions={actions} isLoading={isLoading} hasError={hasError} />
      {children}
    </KBarProvider>
  )
}
