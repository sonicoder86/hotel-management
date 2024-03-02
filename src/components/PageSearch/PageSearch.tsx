'use client'

import { useState } from 'react'

import Search from '../Search/Search'

export default function PageSearch() {
  const [roomTypeFilter, setRoomTypeFilter] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  return (
    // <section className='flex px-4 items-center gap-12 container mx-auto w-full'>
      <Search
        roomTypeFilter={roomTypeFilter}
        searchQuery={searchQuery}
        setRoomTypeFilter={setRoomTypeFilter}
        setSearchQuery={setSearchQuery}
      />
    // </section>
  )
}
