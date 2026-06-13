import React from 'react'
import PublicHeader from '../_component/PublicHeader'
import PublicFooter from '../_component/PublicFooter'
import '../../../public/css/public_style.css'

export default async function PublicLayout({ children }) {
  let menus;
  let marquees;
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/marquee`,
      {
        method: "POST",
        cache: "no-store",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          details: true
        }),
      });
    const data = await res.json();
    if (data.success) {
      marquees = data?.data;
    } else {
      marquees = "";
    }
  } catch (err) {
    console.error(err);
  }
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/public-menu`);
    if (res.ok) {
      const data = await res.json();
      if (data.success) {
        menus = data?.data;
      } else {
        menus = [];
      }
    }
  } catch (err) {
    console.error(err);
  }
  return (
    <>
      <PublicHeader menus={JSON.stringify(menus)} marquees={JSON.stringify(marquees)} />
      {children}
      <PublicFooter />
    </>
  )
}
