import React from 'react'
import PublicHeader from '../component/PublicHeader'
import PublicFooter from '../component/PublicFooter'
import '../../../public/css/public_style.css'

export default function PublicLayout({ children }) {
  return (
    <>
    <PublicHeader />
    {children}
    <PublicFooter />
    </>
  )
}
