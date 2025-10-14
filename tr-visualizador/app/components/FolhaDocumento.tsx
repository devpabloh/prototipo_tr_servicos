import React from 'react'

interface FolhaDocumentoprops{
  children: React.ReactNode
}

export function FolhaDocumento({children}: FolhaDocumentoprops){
  return(
    <main className='min-h-screen p-4 sm:p-8 md:p-12 flex justify-center'>
      <div className='bg-white w-full max-w-4xl p-8 sm:p-12 md:p-16 shadow-lg'>
        {children}
      </div>
    </main>
  )
}